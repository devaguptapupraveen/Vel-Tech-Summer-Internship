from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

from app.extensions.extensions import db
from app.models.project import Project

project_bp = Blueprint(
    "projects",
    __name__,
    url_prefix="/api/projects"
)


@project_bp.route("/", methods=["GET"])
@jwt_required()
def get_projects():

    user_id = get_jwt_identity()

    projects = Project.query.filter_by(user_id=user_id).all()

    result = []

    for project in projects:

        result.append({
            "id": project.id,
            "name": project.name,
            "description": project.description
        })

    return jsonify(result)


@project_bp.route("/", methods=["POST"])
@jwt_required()
def create_project():

    data = request.get_json()

    user_id = get_jwt_identity()

    project = Project(
        name=data["name"],
        description=data["description"],
        user_id=user_id
    )

    db.session.add(project)
    db.session.commit()

    return jsonify({
        "success": True
    })


@project_bp.route("/<int:id>", methods=["DELETE"])
@jwt_required()
def delete_project(id):

    user_id = get_jwt_identity()

    project = Project.query.filter_by(
        id=id,
        user_id=user_id
    ).first()

    if project is None:
        return jsonify({
            "success": False,
            "message": "Project not found"
        }), 404

    db.session.delete(project)
    db.session.commit()

    return jsonify({
        "success": True
    })