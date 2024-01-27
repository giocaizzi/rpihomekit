"""views"""

from flask import Blueprint, jsonify
from importlib import metadata

from .rpi.stats import get_stats


core = Blueprint("core", __name__)


@core.route("/")
def home():
    return jsonify(
        {
            "Message": "Welcome to HomeKit",
            "Version": metadata.metadata("rpihomekit")["version"],
        }
    )


apps = Blueprint("apps", __name__)


@apps.route("/stats")
def stats():
    return jsonify(get_stats())
