import json


def parse_gemini_json(data):

    # Already parsed
    if isinstance(data, dict):
        return data

    # String response
    if isinstance(data, str):

        text = data.strip()

        if text.startswith("```json"):
            text = text.replace("```json", "", 1)

        if text.startswith("```"):
            text = text.replace("```", "", 1)

        if text.endswith("```"):
            text = text[:-3]

        text = text.strip()

        return json.loads(text)

    raise Exception("Invalid Gemini Response")