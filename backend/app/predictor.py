import os
import pickle
import pandas as pd


# ==============================
# Load Trained Pipeline
# ==============================

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
MODEL_PATH = os.path.join(BASE_DIR, "models", "placement_pipeline.pkl")

with open(MODEL_PATH, "rb") as f:
    model = pickle.load(f)


# ==============================
# Feature Engineering Function
# ==============================

def feature_engineering(df):

    # 🔥 Force correct datatype (IMPORTANT FIX)
    df["college_tier"] = df["college_tier"].astype(int)

    # Columns to normalize
    cols_normalize = [
        "cgpa",
        "internship_count",
        "project_count",
        "skills_score",
        "communication_score",
        "certifications",
        "dsa_score",
    ]

    # Safe Normalization (avoid division by zero)
    for col in cols_normalize:
        max_val = df[col].max()
        if max_val == 0:
            df[col + "_norm"] = 0
        else:
            df[col + "_norm"] = df[col] / max_val

    # Profile Strength Index
    df["profile_strength_index"] = (
        0.25 * df["cgpa_norm"] +
        0.20 * df["internship_count_norm"] +
        0.20 * df["project_count_norm"] +
        0.15 * df["skills_score_norm"] +
        0.10 * df["communication_score_norm"] +
        0.10 * df["certifications_norm"]
    )

    # Technical Strength
    df["technical_strength"] = (
        0.4 * df["dsa_score_norm"] +
        0.3 * df["skills_score_norm"] +
        0.3 * df["project_count_norm"]
    )

    # Interaction Features
    df["cgpa_internship"] = df["cgpa_norm"] * df["internship_count_norm"]
    df["project_skill_interaction"] = df["project_count_norm"] * df["skills_score_norm"]
    df["internship_communication"] = df["internship_count_norm"] * df["communication_score_norm"]
    df["psi_tech_interaction"] = df["profile_strength_index"] * df["technical_strength"]

    # Internship Effect
    df["internship_skill"] = df["internship_count"] * df["skills_score_norm"]

    # College Weight (avoid division by zero)
    df["college_weight"] = df["college_tier"].apply(lambda x: 1/x if x != 0 else 0)

    return df


# ==============================
# Prediction Function
# ==============================

def predict_placement(data_dict):

    # Convert input to DataFrame
    df = pd.DataFrame([data_dict])

    # Apply Feature Engineering
    df = feature_engineering(df)

    # Predict
    prediction = model.predict(df)[0]
    probability = model.predict_proba(df)[0][1]

    return {
        "prediction": int(prediction),
        "probability": float(round(probability, 4))
    }