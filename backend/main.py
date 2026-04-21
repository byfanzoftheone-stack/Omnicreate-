from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uuid
import time

app = FastAPI(title="OmniCreate API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# =========================
# CORE GENERATION ENGINE (DEMO → PRO READY)
# =========================
def generate_track(style: str):
    track_id = str(uuid.uuid4())

    # deterministic placeholder "engine"
    return {
        "track_id": track_id,
        "status": "completed",
        "style": style,
        "audio_url": f"https://cdn.omnicreate.ai/tracks/{track_id}.mp3",
        "cost": 1,
        "monetized": True
    }

@app.post("/api/generate-music")
def generate_music():
    return generate_track("cinematic hip hop")

@app.get("/api/health")
def health():
    return {"status": "online"}

@app.get("/")
def root():
    return {"service": "OmniCreate API", "status": "running"}
