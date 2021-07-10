from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from starlette.responses import FileResponse

app = FastAPI()

app.mount("/static", StaticFiles(directory="public"), name="static")


@app.get("/", response_class=FileResponse)
async def main():
    return "public/app.html"