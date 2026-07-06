from google.genai.errors import ClientError


def gemini_safe_call(function):

    try:

        return function()

    except ClientError as e:

        return {

            "status":"error",

            "message":str(e)

        }

    except Exception as e:

        return {

            "status":"error",

            "message":str(e)

        }