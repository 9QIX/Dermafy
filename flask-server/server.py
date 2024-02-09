from fastapi import FastAPI, Form, UploadFile, Request, Response, status
from fastapi.templating import Jinja2Templates
import uvicorn
import requests
import os

templates = Jinja2Templates(directory=".")
app = FastAPI()

@app.get("/")
async def index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.head("/", status_code=200)
async def health(response: Response):
    response.status_code = status.HTTP_200_OK
    return

@app.post("/image")
async def process(
    *,
    image: UploadFile = Form(...),
    request: Request,
):
    image_contents = await image.read()
    response = requests.post(
         "https://autoderm.ai/v1/query?model=autoderm_v2_2&language=en",
         headers={"Api-Key": "5675fd21-7929-2597-6c8e-69e220ede9a2"},
         files={"file": image_contents},
     )

    data = response.json()
    predictions = data.get("predictions", [])

    # Extract confidence scores from predictions
    confidence_scores = [prediction.get("confidence", 0) for prediction in predictions]

    return templates.TemplateResponse(
        "prediction.html", {"request": request, "predictions": predictions, "confidence_scores": confidence_scores}
    )

if __name__ == "__main__":
    uvicorn.run("main:app", host="localhost", port=3100, reload=False)