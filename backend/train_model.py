import pandas as pd
import re
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.svm import LinearSVC
from sklearn.metrics import classification_report
import joblib

# Step 1: Load dataset
df = pd.read_csv("emails.csv")
# ------------------------------

# Step 2: Clean Text
def clean_text(text):
    text = str(text).lower()
    text = re.sub(r'<.*?>', '', text)
    text = re.sub(r'http\S+', '', text)
    text = re.sub(r'[^a-z\s]', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text

df['Email Text'] = df['Email Text'].apply(clean_text)
df.dropna(subset=['Email Text', 'Email Type'], inplace=True)

X = df['Email Text']
y = df['Email Type']

print(f"Dataset ready — {len(df)} samples total.")
# ------------------------------
# Step 3: Split dataset
# ------------------------------
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# ------------------------------
# Step 4: Feature extraction
# ------------------------------
vectorizer = TfidfVectorizer(stop_words='english', max_features=5000)
X_train_vec = vectorizer.fit_transform(X_train)
X_test_vec = vectorizer.transform(X_test)

# ------------------------------
# Step 5: Train model
# ------------------------------
model = LogisticRegression(max_iter=1000)
# model = LinearSVC()  # alternative option
model.fit(X_train_vec, y_train)

# ------------------------------
# Step 6: Evaluate
# ------------------------------
y_pred = model.predict(X_test_vec)
print("Classification Report:\n", classification_report(y_test, y_pred))

# ------------------------------
# Step 7: Save model and vectorizer
# ------------------------------
joblib.dump(model, "trained_model.pkl")
joblib.dump(vectorizer, "vectorizer.pkl")
print("Model and vectorizer saved successfully!")