#!/bin/bash

# Load the .env file
source .env

# Check if the --public parameter is provided
if [[ $1 == "--public" ]]; then
    HOST="0.0.0.0" # Public on the network
else
    HOST="127.0.0.1" # Localhost
fi

# Run flask with the port from the .env file
flask run --debugger --host=$HOST --port=$PORT_SERVER_DEV