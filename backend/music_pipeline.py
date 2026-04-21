class MusicPipeline:
    def generate_song(self, brain_output):
        return {
            "drums": ["kick", "snare"],
            "melody": ["piano"],
            "chords": ["I", "V", "vi", "IV"],
            "style": brain_output["genre"]
        }
