# AI Phishing Detector
An AI-powered web app that analyzes emails and detects phishing attempts. Paste an email into the chat interface, and the AI provides a **risk score**, **classification**, and **findings**.

![AI Phishing Detector Screenshot](http://placecorgi.com/1200/650)  
*(Replace this placeholder with an actual screenshot of your frontend)*

## How It's Made

**Tech used:** Python, React (TypeScript, JavaScript, HTML, CSS), Machine Learning

This project has a **React frontend** where users paste emails into a chatbot interface. The frontend sends the email to a **Python backend** running a machine learning model (`trained_model.py`) that analyzes the text. `main.py` handles requests, processes the email, and returns:  
- A phishing **risk score**  
- **Classification** (phishing or legitimate)  
- Key findings highlighting suspicious patterns

The backend and frontend are fully integrated, providing **real-time results** in a clean, easy-to-read UI.

## Optimizations

- Backend model is pre-loaded to reduce response time  
- Frontend updates asynchronously without page reloads  
- Clean component structure in React for maintainability  
- Transparent icons and responsive design for all screen sizes

## Lessons Learned

- Learned how to integrate a machine learning model with a full-stack web app  
- Gained experience handling real-time data between frontend and backend  
- Improved skills in Python API design and React UI development  
- Learned the importance of clean documentation and user-friendly design
