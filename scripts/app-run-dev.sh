#!/bin/bash

echo "  - Running on shell : $SHELL"

echo "Starting server..."

# if there is a screen named 'server' already running, do nothing
# else create a new screen named 'server'
if screen -list | grep -q "server"; then
    echo "  > Server is already running!"
    echo "  > Restarting server..."
    screen -XS server quit
fi
screen -dmS server './scripts/flask-run-dev.sh'
echo "Server started!"
