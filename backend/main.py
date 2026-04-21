from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
import uuid

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

PROJECTS = {}

@app.get("/")
def root():
    return {"status": "OmniCreate MVP running"}

@app.websocket("/ws/stream")
async def stream(websocket: WebSocket):
    await websocket.accept()
    project_id = str(uuid.uuid4())
    PROJECTS[project_id] = {"transcript": []}

    await websocket.send_json({"type": "init", "project_id": project_id})

    while True:
        data = await websocket.receive_text()
        PROJECTS[project_id]["transcript"].append(data)

        await websocket.send_json({
            "type": "update",
            "transcript": " ".join(PROJECTS[project_id]["transcript"]),
            "emotion": "creative"
        })
