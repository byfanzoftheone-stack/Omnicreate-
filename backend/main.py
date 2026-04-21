from fastapi import FastAPI
from backend.system import REAL_PRODUCT_SYSTEM, SYSTEM_NAME

app = FastAPI()

@app.get("/")
def root():
    return {
        "system": SYSTEM_NAME,
        "real_product_system": REAL_PRODUCT_SYSTEM,
        "status": "ACTIVE"
    }
