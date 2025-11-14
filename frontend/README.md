AI Phishing Detector
An AI-powered web application that analyzes emails and detects potential phishing attempts using a trained machine learning model. Users can paste any email into the frontend chat interface, and the system returns a risk score, detection explanation, and phishing indicators identified by the model.
🚀 Features
AI-based phishing classification using a machine learning model trained on a Kaggle dataset
User-friendly frontend built with React (TypeScript, JavaScript, HTML, CSS)
Python backend API that processes emails and generates risk scores
Real-time evaluation of suspicious links, wording, formatting, and metadata
Clear explanations of why the email may be phishing
🧠 How It Works
User enters or pastes an email into the React frontend.
The frontend sends the text to the Python backend API.
The backend loads the machine learning model from trained_model.py.
main.py handles the request, runs the analysis, and returns:
A phishing risk score
A classification (phishing or legitimate)
Key findings explaining what triggered the model
Results are displayed in the chatbot-style frontend interface.
📚 Tech Stack
Backend
Python
FastAPI (or standard Python API if not using FastAPI)
Machine Learning (trained model in trained_model.py)
Frontend
React
TypeScript / JavaScript
HTML / CSS
AI / ML
Kaggle Phishing Emails Dataset
Feature extraction + model training handled in Python
📂 Project Structure
AI-Phishing-Detector/
│
├── backend/
│   ├── main.py               # API endpoints & processing
│   ├── trained_model.py      # Loaded ML model
│   ├── requirements.txt      # Backend dependencies
│
├── frontend/
│   ├── src/                  # React (TypeScript/JS) files
│   ├── package.json
│
└── README.md