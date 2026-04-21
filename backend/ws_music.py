from fastapi import WebSocket
from music_brain import MusicBrain
from music_pipeline import MusicPipeline

brain = MusicBrain()
pipeline = MusicPipeline()

@app.websocket("/ws/music/create")
async def music_socket(websocket: WebSocket):
    await websocket.accept()
    while True:
        text = await websocket.receive_text()
        b = brain.interpret_thought(text)
        song = pipeline.generate_song(b)

        await websocket.send_json({
            "type": "music_generated",
            "brain": b,
            "song": song
        })
