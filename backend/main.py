from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uuid, random

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

styles = [
    "cinematic hip hop",
    "drill ambient",
    "lofi emotional",
    "trap dark",
    "piano cinematic"
]

@app.get("/")
def root():
    return {"status": "OmniCreate LIVE", "ok": True}

@app.post("/api/generate-music")
def generate_music():
    return {
        "track_id": str(uuid.uuid4()),
        "style": random.choice(styles),
        "audio_url": "https://file-examples.com/storage/fe3c2f7a.mp3"
    }
