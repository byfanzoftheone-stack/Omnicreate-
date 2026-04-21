def validate_output(output):
    required = ["track_id", "status", "style", "audio_url"]

    for key in required:
        if key not in output:
            return False, f"Missing {key}"

    return True, None
