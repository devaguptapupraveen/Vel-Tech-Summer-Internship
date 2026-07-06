import os
import json

from app.services.gemini_service import ask_gemini
from app.services.json_parser import parse_gemini_json

HTML_FILE = "generated/index.html"


def edit_website(user_prompt):

    if not os.path.exists(HTML_FILE):
        raise Exception("Generated website not found.")

    with open(
        HTML_FILE,
        "r",
        encoding="utf-8"
    ) as file:

        current_html = file.read()

    prompt = f"""
You are an expert frontend engineer.

Modify ONLY what the user requested.

Return ONLY JSON.

Format:

{{
    "html":"<!DOCTYPE html>..."
}}

Current Website

{current_html}

User Request

{user_prompt}
"""

    response = ask_gemini(prompt)
    print(type(prompt))
    print(type(current_html))
    website = parse_gemini_json(response)

    with open(
        HTML_FILE,
        "w",
        encoding="utf-8"
    ) as file:

        file.write(website["html"])

    return True