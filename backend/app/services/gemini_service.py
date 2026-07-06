import os
import json

from google import genai

from app.services.gemini_errors import gemini_safe_call

client = genai.Client(

    api_key=os.getenv("GEMINI_API_KEY")

)


def ask_gemini(prompt):

    def generate():

        response = client.models.generate_content(

            model="gemini-2.5-flash",

            contents=prompt

        )

        text = response.text.strip()

        if text.startswith("```json"):

            text = text.replace("```json", "", 1)

        if text.startswith("```"):

            text = text.replace("```", "", 1)

        if text.endswith("```"):

            text = text[:-3]

        text = text.strip()
        print("\n=========== GEMINI RESPONSE ===========\n")
        print(text)
        print("\n=======================================\n")
        json.loads(text)

        return text

    return gemini_safe_call(generate)