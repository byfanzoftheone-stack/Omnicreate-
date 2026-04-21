from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.music_engine import generate_music

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
def create_music():
    return generate_music()
