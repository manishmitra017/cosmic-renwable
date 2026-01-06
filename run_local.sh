#!/bin/bash

# Cosmic Renewable Energy - Local Development Script
# This script starts the Next.js development server

set -e

echo "============================================"
echo "  Cosmic Renewable Energy - Local Dev"
echo "============================================"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${YELLOW}Node.js is not installed. Please install Node.js 22+${NC}"
    exit 1
fi

echo -e "${GREEN}Node.js version:${NC} $(node -v)"

# Navigate to frontend directory
cd "$(dirname "$0")/frontend"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}Installing dependencies...${NC}"
    npm install
fi

# Start development server
echo ""
echo -e "${GREEN}Starting Next.js development server...${NC}"
echo -e "${GREEN}Website:${NC} http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo "============================================"
echo ""

npm run dev
