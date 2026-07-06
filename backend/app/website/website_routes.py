from flask import Blueprint, request, jsonify

from app.website.website_service import generate_website
from app.website.website_editor import edit_website
from app.website.generation_status import generation_status

website_bp = Blueprint(
    "website",
    __name__,
    url_prefix="/api/website"
)


@website_bp.route("/status", methods=["GET"])
def status():
    return jsonify(generation_status)


@website_bp.route("/generate", methods=["POST"])
def generate():

    data = request.get_json()

    if not data or "prompt" not in data:
        return jsonify({
            "success": False,
            "message": "Prompt is required"
        }), 400

    try:

        result = generate_website(data["prompt"])

        return jsonify(result)

    except Exception as e:

        import traceback

        traceback.print_exc()

        return jsonify({
            "success": False,
            "message": str(e)
        }), 500
@website_bp.route("/edit", methods=["POST"])
def edit():

    try:

        data = request.get_json()

        if not data or "prompt" not in data:

            return jsonify({

                "success": False,

                "message": "Prompt is required."

            }), 400

        edit_website(data["prompt"])

        return jsonify({

            "success": True,

            "message": "Website Updated Successfully"

        })

    except Exception as e:

        print(e)

        return jsonify({

            "success": False,

            "message": str(e)

        }), 500