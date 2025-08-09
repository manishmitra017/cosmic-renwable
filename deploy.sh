#!/bin/sh
set -e

echo "=== Stopping existing processes on port 80 ==="
if [ -n "$(lsof -ti :80)" ]; then
    echo "Found processes on port 80:"
    lsof -ti :80
    echo "Stopping processes..."
    kill $(lsof -ti :80)
    sleep 2 # Give processes time to terminate
fi

echo "=== Installing dependencies ==="
cd ./frontend
npm install

echo "=== Building application ==="
npm run build

echo "=== Starting application with PM2 on port 80 ==="
cd ..
PORT=80 pm2 start ecosystem.config.js

echo "=== Saving PM2 state ==="
pm2 save

echo "=== Creating startup script ==="
pm2 startup

echo "=== Deployment complete! ==="
echo "Application is now running on port 80 and will automatically restart if it crashes"