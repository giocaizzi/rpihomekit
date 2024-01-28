#!/bin/bash

# Load the .env file
source .env

cd frontend
npm run dev -- -p $PORT
cd ..
