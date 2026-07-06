from flask import Blueprint, send_file
import os
import zipfile

export_bp = Blueprint(
    "export",
    __name__,
    url_prefix="/api/export"
)


@export_bp.route("/", methods=["GET"])
def export_website():

    import os

    BASE_DIR = os.getcwd()

    EXPORT_FOLDER = os.path.join(BASE_DIR, "generated")

    ZIP_PATH = os.path.join(BASE_DIR, "website.zip")

    with zipfile.ZipFile(ZIP_PATH, "w", zipfile.ZIP_DEFLATED) as zipf:

        # Export everything inside generated/
        for root, dirs, files in os.walk(EXPORT_FOLDER):

            for file in files:

                filepath = os.path.join(root, file)

                zipf.write(

                    filepath,

                    os.path.relpath(filepath, EXPORT_FOLDER)
                )

    return send_file(

    ZIP_PATH,

    as_attachment=True,

    download_name="website.zip"

)