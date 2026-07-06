import os
from app.utils.logger import logger
from app.utils.errors import register_error_handlers
from flask import Flask

from app.config.settings import config

from app.extensions.extensions import (
    db,
    migrate,
    jwt,
    bcrypt,
    cors,
)
from app.models import User

def create_app():

    app = Flask(__name__)

    environment = os.getenv("FLASK_ENV", "development")

    app.config.from_object(config[environment])

    db.init_app(app)

    migrate.init_app(app, db)

    jwt.init_app(app)

    bcrypt.init_app(app)

    cors.init_app(
    app,
    resources={r"/api/*": {"origins": "*"}},
    supports_credentials=True,
    allow_headers=["Content-Type", "Authorization"]
)
    from app.routes.api import api_bp

    app.register_blueprint(api_bp)
    

    logger.info("JimAI Backend Started Successfully")

    register_error_handlers(app)

    return app