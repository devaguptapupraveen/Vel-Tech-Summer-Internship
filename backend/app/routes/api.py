from flask import Blueprint

from app.auth.routes import auth_bp
from app.builder.project_routes import project_bp
from app.routes.health import health_bp
from app.website.website_routes import website_bp
from app.preview.preview_routes import preview_bp
from app.export.export_routes import export_bp
from app.website.publish_routes import publish_bp

api_bp = Blueprint("api", __name__)

api_bp.register_blueprint(auth_bp)
api_bp.register_blueprint(project_bp)
api_bp.register_blueprint(health_bp)
api_bp.register_blueprint(website_bp)
api_bp.register_blueprint(preview_bp)
api_bp.register_blueprint(export_bp)
api_bp.register_blueprint(publish_bp)