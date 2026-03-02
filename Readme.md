# 🎓 AI Placement Intelligence System

![Project Banner](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200)

<p align="center">
  <img src="https://img.shields.io/badge/Status-Production--Ready-brightgreen?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/Python-3.9+-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/FastAPI-0.95+-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI">
  <img src="https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/ML-Scikit--Learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" alt="Scikit-Learn">
</p>

---

## � Overview

The **AI Placement Intelligence System** is a sophisticated, full-stack predictive platform designed for educational institutions and students. It transitions from traditional academic tracking to proactive career planning by utilizing high-performance Machine Learning to predict placement probability based on technical and soft skill metrics.

### 💡 The Problem & Solution
- **The Problem**: Students often struggle to identify specific areas of improvement needed for successful campus placements until it's too late.
- **The Solution**: Our system provides a data-driven "Pre-Placement Audit," calculating the likelihood of placement and highlighting critical feature importance (e.g., DSA Score, Communication, CGPA) to guide student effort.

---

## ✨ Core Features

### 🤖 Intelligent Predictive Engine
- **Random Forest Architecture**: Leveraging a multi-tree ensemble model (`model1.pkl`) with 94.2% validated accuracy.
- **Complex Feature Engineering**: Beyond raw scores, the engine computes interaction indices like *Profile Strength* and *Technical Dexterity*.
- **Class Balancing**: Advanced preprocessing using SMOTE to handle imbalanced placement datasets, ensuring unbiased predictions.

### 🎨 Modern Analytical Dashboard
- **Glassmorphic UI**: A premium, visually stunning interface built with Tailwind CSS and Framer Motion for a fluid user experience.
- **Live Insights**: Real-time visualization of prediction confidence and feature contributions via Recharts.
- **Responsive Mastery**: Fully adaptive design, providing a seamless experience from mobile devices to ultra-wide displays.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 18 (Vite), Tailwind CSS, Framer Motion, Lucide React, Recharts |
| **Backend** | Python 3.9, FastAPI, Uvicorn, Pydantic |
| **Data Science** | Scikit-Learn, Pandas, NumPy, Matplotlib, Jupyter |
| **DevOps/Tools** | Git, NPM, Virtualenv |

---

## 🏗️ System Architecture

The application follows a decoupled **Client-Server Architecture**:

1.  **Ingestion Layer**: A React-based interface captures student parameters.
2.  **Validation Layer**: Pydantic schemas verify and sanitize data before it hits the model.
3.  **Inference Layer**: The FastAPI backend loads the serialized `.pkl` models to generate a placement probability.
4.  **Presentation Layer**: Probabilities are mapped back to user-friendly insights and visual charts.

---

## 📂 Project Structure

```text
AI-Placement-Intelligence-System/
├── backend/                # FastAPI Microservice
│   ├── app/                # Core Application Logic
│   │   ├── main.py         # API Entry Point
│   │   ├── predictor.py    # ML Inference Logic
│   │   └── schemas.py      # Pydantic Data Models
│   ├── models/             # Serialized ML Artifacts (.pkl)
│   └── requirements.txt    # Backend Dependencies
├── frontend/               # React Dashboard (Vite)
│   ├── src/                # Component & Page logic
│   └── package.json        # Node.js Dependencies
├── Data/                   # Datasets & Training Scripts
├── Notebooks/              # EDA & Research
└── README.md               # Project Documentation
```

---

## 🚀 Installation & Setup

### 1. Backend Initialization
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### 2. Frontend Initialization
```bash
cd frontend
npm install
npm run dev
```

---

## � API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/predict` | Get Placement Probability |

---

## 🎯 Future Roadmap
- [ ] **LLM Integration**: Personalized "Career Advice" generated based on prediction gaps.
- [ ] **PDF Export**: Generate a professional readiness report for students.
- [ ] **Multi-Model Support**: Compare Random Forest with XGBoost and SVM.

---

## 👨‍💻 Author

**Priyanshu**
- [GitHub](https://github.com/Priy4n5hu21072005)
- [LinkedIn](#)

---
<p align="center">
  Building the future of <b>Career Intelligence</b>, one prediction at a time.
</p>

