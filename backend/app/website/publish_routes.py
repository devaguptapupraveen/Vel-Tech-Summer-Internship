import os
import shutil

from flask import Blueprint, jsonify

publish_bp = Blueprint(
    "publish",
    __name__,
    url_prefix="/api/publish"
)


@publish_bp.route("/", methods=["POST"])
def publish():

    SOURCE = "generated"

    DESTINATION = "published"

    os.makedirs(DESTINATION, exist_ok=True)

    # Remove old published files
    for item in os.listdir(DESTINATION):

        path = os.path.join(DESTINATION, item)

        if os.path.isfile(path):

            os.remove(path)

        else:

            shutil.rmtree(path)

    # Copy new website
    for item in os.listdir(SOURCE):

        src = os.path.join(SOURCE, item)

        dst = os.path.join(DESTINATION, item)

        if os.path.isdir(src):

            shutil.copytree(src, dst)

        else:

            shutil.copy2(src, dst)

    return jsonify({

        "success": True,

        "url": "http://127.0.0.1:5000/published/index.html"

    })