from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from app.auth.profile import profile_bp

from app.extensions.extensions import db
from app.models.user import User

auth_bp = Blueprint(
    "auth",
    __name__,
    url_prefix="/api/auth"
)

auth_bp.register_blueprint(profile_bp)

@auth_bp.route("/register", methods=["POST"])
def register():

    data = request.get_json()

    full_name=data.get("full_name")
    email = data.get("email")
    password = data.get("password")

    if User.query.filter_by(email=email).first():
        return jsonify({
            "success": False,
            "message": "Email already exists"
        }), 409

    user = User(
        full_name=full_name,
        email=email
    )

    user.set_password(password)

    db.session.add(user)
    db.session.commit()

    return jsonify({
        "success": True,
        "message": "Registration successful"
    }), 201


@auth_bp.route("/login", methods=["POST"])
def login():

    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({
            "success": False,
            "message": "Invalid email or password"
        }), 401

    if not user.check_password(password):
        return jsonify({
            "success": False,
            "message": "Invalid email or password"
        }), 401

    access_token = create_access_token(identity=str(user.id))

    return jsonify({
        "success": True,
        "token": access_token,
        "user": {
            "id": user.id,
            "full_name": user.full_name,
            "email": user.email
        }
    })