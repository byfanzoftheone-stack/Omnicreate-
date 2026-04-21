from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uuid
import random

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

STYLES = [
    "cinematic hip hop",
    "lofi emotional",
    "trap dark energy",
    "future bass wave",
    "piano storytelling",
    "drill ambient"
]

@app.get("/")
def root():
    return {"status": "OMNICREATE AI ENGINE LIVE"}

@app.post("/api/generate-music")
def generate_music():
    track_id = str(uuid.uuid4())
    style = random.choice(STYLES)

    # PLACEHOLDER ENGINE (READY FOR REAL AI DROP-IN)
    audio_url = f"https://example.com/generated/{track_id}.mp3"

    return {
        "track_id": track_id,
        "style": style,
        "audio_url": audio_url,
        "engine": "v1-placeholder"
    }
