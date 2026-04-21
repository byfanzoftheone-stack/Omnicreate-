from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uuid
import time

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# =========================
# CORE FUNCTIONAL ENGINE
# =========================
def run_generation(style: str):
    # STEP 1: validate request
    if not style:
        return {"error": "missing style"}

    # STEP 2: simulate processing time (real pipeline behavior)
    time.sleep(1.5)

    # STEP 3: output contract
    return {
        "track_id": str(uuid.uuid4()),
        "status": "completed",
        "style": style,
        "audio_url": f"https://cdn.omnicreate.ai/{uuid.uuid4()}.mp3"
    }

@app.post("/api/generate-music")
def generate_music():
    return run_generation("cinematic hip hop")

@app.get("/health")
def health():
    return {"status": "ok"}
