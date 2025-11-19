from fastapi import FastAPI, Request
from pydantic import BaseModel
from typing import List
import re
import joblib
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Phishing Detector API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for development, or ["http://localhost:5173"] for stricter frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = joblib.load("trained_model.pkl")
vectorizer = joblib.load ("vectorizer.pkl")

# Example request body
class Email(BaseModel):
    subject: str
    sender: str
    body: str


# Dummy phishing detection rules
def apply_dummy_rules(email: Email) -> List[str]:
    issues = []

    # Rule 1: Suspicious keywords
    phishing_keywords = ["urgent", "password", "click here", "verify account", "notice", "warning"]
    if any(word.lower() in email.body.lower() for word in phishing_keywords):
        issues.append("Contains suspicious keywords")

    # Rule 2: Free email domain sender
    free_domains = ["gmail.com", "yahoo.com", "hotmail.com"]
    if any(email.sender.lower().endswith("@" + d) for d in free_domains):
        issues.append("Sender is from a free email domain")

    # Rule 3: No subject line
    if not email.subject.strip():
        issues.append("No subject line")

    return issues

# Malicious Link Rules
def check_malicious_links(email: Email) -> bool:
    urls = re.findall(r'https?://[^\s]+', email.body)
    for url in urls:
        domain = url.split("/")[2]
        if domain.lower() not in email.sender.lower():
            return True
    return False

# Dangerous Attachment Detection Rules
def check_dangerous_attachments(email: Email) -> bool:
    dangerous_types = [".exe", ".scr", ".zip", ".bat"]
    for ext in dangerous_types:
        if ext in email.body.lower():
            return True
    return False


# Risk Score Rules
def calculate_risk_score(email: Email) -> int:
    score = 0
    if any(word.lower() in email.body.lower() for word in ["urgent", "password", "click here", "verify account"]):
        score += 3
    if any(email.sender.lower().endswith("@" + d) for d in ["gmail.com", "yahoo.com", "hotmail.com"]):
        score += 2
    if not email.subject.strip():
        score += 1
    if check_malicious_links(email):
        score += 3
    if check_dangerous_attachments(email):
        score += 2
    return score


@app.post("/detect")
async def detect_phishing(email: Email):
    issues = apply_dummy_rules(email)

    # -- AI Model Check --
    email_vec = vectorizer.transform([email.body])
    prediction = model.predict(email_vec)[0]

    if prediction != 'ham': # or == 'phish', depending on your dataset
        issues.append("AI Model detected phising content")
    
    # Additional checks
    if check_malicious_links(email):
        issues.append("Contains suspicious/malicious links")
    if check_dangerous_attachments(email):
        issues.append("Contains potentially dangerous attachments")
    
    risk_score = calculate_risk_score(email)
    
    result = {
        "is_phishing": len(issues) > 0,
        "issues": issues,
        "risk_score": risk_score
    }
    return result



@app.get("/")
async def root():
    return {"message": "Phishing Detector API is running"}

if __name__ == "__main__":
    import uvicorn, os
    port = int(os.environ.get("PORT", 8000)) 
    uvicorn.run(app, host="0.0.0.0", port=port)

