#!/bin/bash

# Load the .env file
source .env

cd client
npm run dev -- -p $PORT_CLIENT