from starlette.applications import Starlette
from starlette.responses import HTMLResponse, FileResponse

ERROR_PAGE = "public/error.html"


async def not_found(request, exc):
    return FileResponse(ERROR_PAGE, status_code=exc.status_code)


async def server_error(request, exc):
    return FileResponse(ERROR_PAGE, status_code=exc.status_code)


exception_handlers = {
    404: not_found
}