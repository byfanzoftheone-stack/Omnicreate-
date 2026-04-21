from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

from agents.input_agent import process_input
from agents.processor_agent import run_generation
from agents.auditor_agent import validate_output

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/generate-music")
async def generate_music(request: Request):
    payload = await request.json()

    # 1. INPUT AGENT
    data, error = process_input(payload)
    if error:
        return {"error": error}

    # 2. PROCESSOR AGENT
    result = run_generation(data)

    # 3. AUDITOR AGENT
    valid, audit_error = validate_output(result)
    if not valid:
        return {"error": audit_error}

    return result

@app.get("/health")
def health():
    return {"status": "ok"}
