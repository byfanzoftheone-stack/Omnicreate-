class MusicBrain:
    def interpret_thought(self, text: str):
        mood = "creative"
        if "sad" in text:
            mood = "dark"
        if "fun" in text:
            mood = "fun"

        return {"mood": mood, "genre": "cinematic_lofi"}
