from flask import Flask, jsonify
from importlib import metadata

app = Flask(__name__)


@app.route("/")
def home():
    return jsonify(
        {
            "Message": "Welcome to HomeKit",
            "Version": metadata.metadata("rpihomekit")["version"],
        }
    )


if __name__ == "__main__":
    app.run(
        # comment out when deploying to production
        # auto reloads the server when code changes
        # debug=True,
        # Setting host to "0.0.0.0" tells
        # the os to listen on all public IPs.
        host="0.0.0.0",
        port=5000,
    )
