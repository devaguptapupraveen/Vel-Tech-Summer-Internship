import json

from app.services.gemini_service import ask_gemini
from app.services.json_parser import parse_gemini_json


def plan_website(user_prompt):

    planner_prompt = f"""

You are an expert Solution Architect.

Analyze the user's request.

Return ONLY JSON.

Format:

{{
    "website_type":"",
    "industry":"",
    "pages":[],
    "features":[],
    "theme":"",
    "color_palette":"",
    "animations":[],
    "sections":[],
    "target_users":"",
    "ui_style":"",
    "recommended_layout":""
}}

User Request:

{user_prompt}

"""

    response = ask_gemini(planner_prompt)

    return parse_gemini_json(response)