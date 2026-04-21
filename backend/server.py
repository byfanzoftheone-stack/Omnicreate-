from fastapi import FastAPI
import os
import uvicorn

app = FastAPI()

@app.get("/")
def root():
    return {"status": "OMNICREATE LIVE FIXED"}

@app.post("/api/generate-music")
def generate_music():
    return {
        "track_id": "demo",
        "style": "cinematic hip hop",
        "audio_url": "https://example.com/audio.mp3"
    }

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("backend.server:app", host="0.0.0.0", port=port)
