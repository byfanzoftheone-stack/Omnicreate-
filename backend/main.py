from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"status": "OmniCreate LIVE - backend running"}

@app.post("/api/generate-music")
def generate_music():
    return {
        "track": "demo-beat",
        "status": "ok"
    }
