from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"status": "OMNICREATE LIVE", "railway": "stable"}

@app.post("/api/generate-music")
def generate_music():
    return {
        "track_id": "demo-001",
        "style": "cinematic hip hop",
        "audio_url": "https://example.com/audio.mp3"
    }

# HARD BIND (IMPORTANT FOR RAILWAY)
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
