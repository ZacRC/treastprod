#!/bin/bash

# Exit on error
set -e

# Clone the repository
git clone https://github.com/ZacRC/treastprod.git
cd treastprod

# Install dependencies with increased memory allocation
NODE_OPTIONS="--max-old-space-size=4096" npm install

# Build the project
CI=false npm run build

# Install a simple HTTP server
npm install -g serve

# Start the server
serve -s build -l 3000