from fastapi import FastAPI, Request
from fastapi.responses import FileResponse

app = FastAPI()

@app.get("/")
async def home(request: Request):
    return {"msg":"NASA SpaceApp Challenge!"}

@app.get("/generate")
async def generate(request: Request):
    return FileResponse("./api/mars.jpg")