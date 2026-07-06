import os

def load_preview():

    path = os.path.join("generated", "index.html")

    if not os.path.exists(path):
        return "<h1>No Website Generated</h1>"

    with open(path, "r", encoding="utf-8") as f:
        return f.read()