import json
import os

from app.services.gemini_service import ask_gemini
from app.services.json_parser import parse_gemini_json
from app.website.generation_status import generation_status
from app.website.website_planner import plan_website
from app.website.prompts.prompt_builder import MASTER_PROMPT


def generate_website(prompt):

    generation_status["status"] = "Planning Website..."
    generation_status["progress"] = 10

    plan = plan_website(prompt)

    generation_status["status"] = "Generating Website..."
    generation_status["progress"] = 40

    final_prompt = f"""
{MASTER_PROMPT}

Website Plan

{json.dumps(plan, indent=2)}

Original User Prompt

{prompt}

Generate the complete website.

Return ONLY valid JSON.

Format:

{{
    "title":"",
    "html":""
}}
"""

    response = ask_gemini(final_prompt)

    generation_status["status"] = "Processing AI Response..."
    generation_status["progress"] = 70

    website = parse_gemini_json(response)

    if "html" not in website:
        raise Exception("Gemini did not return HTML.")

    generation_status["status"] = "Saving Website..."
    generation_status["progress"] = 90

    os.makedirs("generated", exist_ok=True)

    with open(
        "generated/index.html",
        "w",
        encoding="utf-8"
    ) as file:

        file.write(website["html"])

    generation_status["status"] = "Completed"
    generation_status["progress"] = 100

    return website