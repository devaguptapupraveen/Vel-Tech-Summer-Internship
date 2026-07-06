from app import create_app
from flask import send_from_directory
import os

app = create_app()

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

PUBLISHED_FOLDER = os.path.join(BASE_DIR, "published")


@app.route("/published/<path:filename>")
def published(filename):

    return send_from_directory(
        PUBLISHED_FOLDER,
        filename
    )


print("\n========== REGISTERED ROUTES ==========\n")

for rule in sorted(app.url_map.iter_rules(), key=lambda r: str(r)):
    print(f"{rule.methods}  {rule}")

print("\n=======================================\n")


if __name__ == "__main__":
    app.run(debug=True)