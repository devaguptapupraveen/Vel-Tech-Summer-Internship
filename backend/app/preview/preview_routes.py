from flask import Blueprint, Response
from app.preview.preview_service import load_preview

preview_bp = Blueprint(
    "preview",
    __name__,
    url_prefix="/api/preview"
)

@preview_bp.route("/")
def preview():
    return Response(
        load_preview(),
        mimetype="text/html"
    )