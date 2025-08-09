#!/bin/sh
set -e

echo "=== Stopping existing PM2 processes ==="
pm2 delete cosmic-renewable || true

echo "=== Installing dependencies ==="
cd ./frontend
npm install

echo "=== Building application ==="
npm run build

echo "=== Starting application with PM2 on port 3000 ==="
cd ..
PORT=3000 pm2 start ecosystem.config.js

echo "=== Saving PM2 state ==="
pm2 save

echo "=== Creating startup script ==="
pm2 startup

echo "=== Ensuring nginx is running ==="
rc-service nginx status || rc-service nginx start

echo "=== Deployment complete! ==="
echo "Application is running on port 3000, proxied through nginx on port 80/443"
echo "Visit: https://cosmicrenewableenergy.com.au"