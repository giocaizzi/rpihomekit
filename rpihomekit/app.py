from flask import Flask

from .views import core, apps
from flask_cors import CORS


def create_app():
    app = Flask(__name__)
    CORS(app)
    # register blueprints
    app.register_blueprint(core)
    app.register_blueprint(apps)

    return app


if __name__ == "__main__":
    app = create_app()
    app.run()
