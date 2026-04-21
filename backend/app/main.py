from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"status": "OMNICREATE LIVE", "boot": "ok"}

@app.post("/api/generate-music")
def generate_music():
    return {
        "track_id": "demo",
        "style": "cinematic hip hop",
        "audio_url": "https://example.com/audio.mp3"
    }
