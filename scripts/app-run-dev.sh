#!/bin/bash

# Start the Flask app in a detached screen named 'flask-app'
screen -dmS server bash -c './scripts/flask-run-dev.sh; exec sh' &

# Start the frontend in a detached screen named 'frontend'
(cd frontend &&
screen -dmS client bash -c 'npm run dev; exec sh')