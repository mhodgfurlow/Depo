#!/bin/bash

# Script to set up the local development environment

echo "Starting development environment setup..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Set up local configuration
echo "Setting up local configuration..."
cp .env.example .env

echo "Development environment setup complete."
