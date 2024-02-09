# app.py
from fastapi import FastAPI, Form, UploadFile, Request
from fastapi.templating import Jinja2Templates
import requests
import os

templates = Jinja2Templates(directory=".")

headers = {"Api-Key": os.getenv("API_KEY")}

app = FastAPI()

@app.get("/")
async def index(request: Request):
    return templates.TemplateResponse("dermafy-function.tsx", {"request": request})

@app.post("/img/")
async def process(
    *,
    age: int = Form(...),
    sex: str = Form(...),
    image_uploads: UploadFile = Form(...),
    request: Request,
):
    image_contents = await image_uploads.read()
    received_file = {"Image": image_contents}

    response = requests.post(
        os.getenv("API_URL", "https://autoderm-api.firstderm.com/Query"),
        headers=headers,
        files=received_file,
        data={"AgeYears": age, "Sex": sex, "Language": "EN", "Model": "43PLUS_noo_v3"},
    )

    data = response.json()
    predictions = data["prediction.tsx"]

    return templates.TemplateResponse(
        "prediction.tsx", {"request": request, "predictions": predictions}
    )
