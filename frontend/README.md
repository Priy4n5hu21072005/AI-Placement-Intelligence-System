# Placement Intelligence UI

A modern, professional dashboard built with React, Vite, Tailwind CSS, and Framer Motion. This UI serves as the frontend for the AI Placement Intelligence System.

## Features
- **Modern Dark UI**: Premium aesthetic inspired by modern SaaS products (Stripe, Vercel).
- **Interactive Prediction**: Form with real-time feedback and animated results.
- **Model Insights**: Data visualizations using Recharts to show model performance and feature importance.
- **Responsive Design**: Fully optimized for mobile and desktop.
- **Smooth Animations**: Powered by Framer Motion.

## Tech Stack
- **Frontend**: React 18, Vite, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts
- **API Client**: Axios

## Getting Started

### 1. Install Dependencies
Navigate to the frontend directory and install the required packages:
```bash
cd frontend
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

### 3. Connect to Backend
Ensure the FastAPI backend is running on `http://localhost:8000`. You can start it using:
```bash
cd backend
uvicorn app.main:app --reload
```

## Structure
- `src/components`: Reusable UI components.
- `src/pages`: Main page views (Landing, Prediction, Insights).
- `src/index.css`: Global styles and Tailwind directives.
- `tailwind.config.js`: Custom theme and color palette.
