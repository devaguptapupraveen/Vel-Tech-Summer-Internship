from app.services.gemini_service import ask_gemini
from app.services.groq_service import ask_groq

from app.prompt_engine.router import build_prompt
from app.prompt_engine.memory import (
    save_memory,
    get_memory
)


def run_task(task, project_id, profile):

    prompt = build_prompt(task, profile)

    try:

        response = ask_gemini(prompt)

        if isinstance(response, dict):

            if response.get("status") == "error":

                raise Exception()

        provider = "gemini"

    except Exception:

        response = ask_groq(prompt)

        provider = "groq"

    save_memory(

        project_id,

        task,

        response

    )

    return {

        "provider": provider,

        "task": task,

        "response": response

    }


def memory(project_id):

    return get_memory(project_id)

def ask_ai(prompt):

    try:

        response = ask_gemini(prompt)

        if isinstance(response, dict):

            if response.get("status") == "error":

                raise Exception()

        return {

            "provider": "gemini",

            "response": response

        }

    except Exception:

        response = ask_groq(prompt)

        return {

            "provider": "groq",

            "response": response

        }