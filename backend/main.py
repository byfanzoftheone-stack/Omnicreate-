from fastapi import FastAPI
import uuid
import random

app = FastAPI()

@app.get("/")
def root():
    return {"status": "OmniCreate LIVE MVP"}

@app.post("/api/generate-music")
def generate_music():
    styles = [
        "hip hop cinematic",
        "lofi emotional",
        "trap dark beat",
        "future bass wave",
        "piano storytelling"
    ]

    return {
        "track_id": str(uuid.uuid4()),
        "style": random.choice(styles),
        "audio_url": "https://placeholder.audio/fake.mp3"
    }
