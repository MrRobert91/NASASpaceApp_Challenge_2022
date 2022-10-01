from fastapi import FastAPI, Request
from fastapi.responses import FileResponse
import json

app = FastAPI()

@app.get("/")
async def home(request: Request):
    return {"msg":"NASA SpaceApp Challenge!"}

@app.get("/generate")
async def generate(request: Request):
    return FileResponse("./api/mars.jpg")

@app.get("/space-objects")
async def generate(request: Request):
    with open("./api/resources/space_objects.json", "r") as space_objects:
        space_objects = json.loads(space_objects.read())
        return space_objects

@app.get("/artists")
async def generate(request: Request):
    with open("./api/resources/artists.json", "r") as artists:
        artists = json.loads(artists.read())
        return artists