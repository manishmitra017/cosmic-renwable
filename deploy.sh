#!/bin/sh
set -e

echo "=== Stopping existing Node processes ==="
pkill -f "next" || true
pkill -f "node.*3000" || true

echo "=== Installing dependencies ==="
cd ./frontend
npm install

echo "=== Building application ==="
npm run build

echo "=== Starting application on port 3000 ==="
PORT=3000 nohup npm start > ../frontend.log 2>&1 &
cd ..

echo "=== Ensuring nginx is running ==="
rc-service nginx status || rc-service nginx start

echo "=== Deployment complete! ==="
echo "Application is running on port 3000, proxied through nginx on port 80/443"
echo "Visit: https://cosmicrenewableenergy.com.au"