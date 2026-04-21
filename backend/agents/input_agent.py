def process_input(payload):
    style = payload.get("style", "").strip()

    if not style:
        return None, "Style is required"

    return {"style": style}, None
