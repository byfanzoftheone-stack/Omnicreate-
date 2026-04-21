import uuid

def generate_music():
    return {
        "track_id": str(uuid.uuid4()),
        "style": "cinematic hip hop",
        "audio_url": "https://example.com/audio.mp3"
    }
