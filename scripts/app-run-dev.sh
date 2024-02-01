#!/bin/bash

source .env

# ----------------------------------
# Start the flask app in dev (debug) mode
# and the react app in dev mode

# Args:
#   --public: Run the server on the network
#
# The underlying scripts use .env file
# for configuration
# ----------------------------------

# Check if the --public parameter is provided
if [[ $1 == "--public" ]]; then
    PUBLIC="--public"
else
    PUBLIC=""
fi

for port in $PORT_CLIENT $PORT_SERVER; do
    echo "Cleaning port $port..."
    # clean all processes on the port
    lsof -i tcp:$port | awk 'NR!=1 {print $2}' | xargs kill 
done

if [ "$1" == "--quit" ]; then
    echo "Quitting client and server..."
    exit 0
fi

echo "Starting server..."
# if there is a screen named 'server' already running, do nothing
# else create a new screen named 'server'
if screen -list | grep -q "server"; then
    echo "  > Server is already running!"
    echo "  > Restarting server..."
    screen -XS server quit
fi
screen -dmS server './scripts/flask-run-dev.sh' $PUBLIC
echo "Server started on port $PORT_SERVER!"

echo "Starting client..."
if screen -list | grep -q "client"; then
    echo "  > Client is already running!"
    echo "  > Restarting client..."
    screen -XS client quit
fi
screen -dmS client './scripts/react-run-dev.sh' $PUBLIC
echo "Client started on port $PORT_CLIENT!"