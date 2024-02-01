#!/bin/bash

# ----------------------------------
# Start the flask app in dev (debug) mode
# Args:
#   --public: Run the server on the network
#
# Uses the .env file for:
#   PORT_SERVER: The port to run the server on
# ----------------------------------

# Load the .env file
source .env

cd server

# Check if the --public parameter is provided
if [[ $1 == "--public" ]]; then
    HOST="0.0.0.0" # Public on the network
else
    HOST="127.0.0.1" # Localhost
fi

# Run flask with the port from the .env file
flask run --debugger --host=$HOST --port=$PORT_SERVER