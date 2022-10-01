from fastapi import FastAPI, Request
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
import json

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
async def home(request: Request):
    return {"msg": "NASA SpaceApp Challenge!"}


@app.get("/generate")
async def generate(request: Request):
    return FileResponse("./resources/mars.jpg")


@app.get("/space-objects")
async def generate(request: Request):
    with open("./resources/space_objects.json", "r") as space_objects:
        space_objects = json.loads(space_objects.read())
        return space_objects


@app.get("/artists")
async def generate(request: Request):
    with open("./resources/artists.json", "r") as artists:
        artists = json.loads(artists.read())
        return artists
