from flask import jsonify


def register_error_handlers(app):

    @app.errorhandler(404)
    def not_found(error):
        return jsonify({
            "success": False,
            "message": "Resource not found"
        }), 404

    @app.errorhandler(500)
    def internal_server_error(error):
        return jsonify({
            "success": False,
            "message": "Internal server error"
        }), 500

    @app.errorhandler(Exception)
    def unhandled_exception(error):
        return jsonify({
            "success": False,
            "message": str(error)
        }), 500