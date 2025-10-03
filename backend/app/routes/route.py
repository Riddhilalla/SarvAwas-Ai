from fastapi import APIRouter

router = APIRouter(prefix="/api")

@router.get("/")
async def get_apicall():
    return {"message": "Hello from FastAPI!"}
