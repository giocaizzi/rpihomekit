#!/bin/bash

# ----------------------------------
# Start the react app in dev mode
# Args:
#   --public: Run the server on the network
# 
# Uses the .env file for:
#   PORT_CLIENT: The port to run the client on
# ----------------------------------

# Load the .env file
source .env

# Check if the --public parameter is provided
if [[ $1 == "--public" ]]; then
    HOST="0.0.0.0" # Public on the network
else
    HOST="127.0.0.1" # Localhost
fi

cd client
npm run dev -- -p $PORT_CLIENT -H $HOST