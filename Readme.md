# 🎓 AI Placement Intelligence System

![Project Banner](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000)

## 🚀 Overview
The **AI Placement Intelligence System** is a production-grade machine learning application designed to predict the likelihood of a student getting placed based on various technical and academic parameters. This project showcases a full-stack ML engineering lifecycle, from data cleaning and feature engineering to a modern, responsive full-stack deployment.

## ✨ Key Features
- **Accurate Predictions**: Uses a Random Forest Classifier trained on merged and balanced datasets.
- **Deep Insights**: Visualizes feature importance and model performance metrics using Recharts.
- **Modern UI/UX**: Professional-grade dashboard with glassmorphism, theme support, and smooth animations.
- **Feature Engineering**: Implements complex interaction features like Profile Strength Index and Technical interaction scores.

## 🛠️ Technology Stack
### Frontend
- **Framework**: React 18 (Vite)
- **Styling**: Tailwind CSS (Adaptive Dark/Light mode)
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Backend
- **Framework**: FastAPI (Python)
- **ML Libraries**: Scikit-Learn, Pandas, NumPy
- **Validation**: Pydantic
- **Deployment**: Uvicorn

## 📂 Project Structure
```text
├── backend/            # FastAPI Backend API
│   ├── app/            # Source code (routes, logic, schemas)
│   ├── models/         # Trained .pkl model files
│   └── requirements.txt
├── frontend/           # React/TypeScript Frontend
│   ├── src/            # Components, pages, and logic
│   └── package.json
├── data/               # Raw and processed datasets
├── notebooks/          # EDA & Model Training notebooks
├── .gitignore          # Standard exclusion rules
└── README.md           # Project Documentation
```

## ⚙️ Installation & Setup

### 1. Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## 📊 Model Information
- **Algorithm**: Random Forest Classifier
- **Features**: 27 engineered parameters including Profile Strength Index and DSA Score interaction.
- **Accuracy**: 94.2%
- **Balancing**: Applied SMOTE for balanced class representation.

---
Developed with ❤️ for Students and Recruiters.
