#!/bin/bash

source .env


lsof -i tcp:$PORT | awk 'NR!=1 {print $2}' | xargs kill 


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

echo "Starting client..."
if screen -list | grep -q "client"; then
    echo "  > Client is already running!"
    echo "  > Restarting client..."
    screen -XS client quit
fi
screen -dmS client './scripts/react-run-dev.sh'
echo "Client started!"
