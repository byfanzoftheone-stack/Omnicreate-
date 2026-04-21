from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"status": "OMNICREATE LIVE"}

@app.post("/api/generate-music")
def generate_music():
    return {
        "track_id": "demo-001",
        "style": "cinematic hip hop",
        "audio_url": "https://example.com/audio.mp3"
    }
