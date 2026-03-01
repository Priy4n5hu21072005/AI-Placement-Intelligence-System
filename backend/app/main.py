from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.schemas import StudentInput
from app.predictor import predict_placement

app = FastAPI(title="Placement Prediction API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "Placement Model API Running"}



@app.post("/predict")
def predict(data: StudentInput):
    result = predict_placement(data.dict())
    return result