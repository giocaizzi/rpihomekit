from flask import Flask
from dotenv import load_dotenv
import os

from .views import core, apps

# load environment variables
load_dotenv()


def create_app():
    app = Flask(__name__)

    # register blueprints
    app.register_blueprint(core)
    app.register_blueprint(apps)

    return app


if __name__ == "__main__":
    app = create_app()
    app.run()
