#!/bin/bash

# Cosmic Renewable Energy - Run All Development Servers
# This script starts both the Next.js frontend and FastAPI backend servers

echo "🚀 Starting Cosmic Renewable Energy development servers..."

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check if port is in use
port_in_use() {
    lsof -Pi :$1 -sTCP:LISTEN -t >/dev/null 2>/dev/null
}

# Function to find available port
find_available_port() {
    local port=$1
    while port_in_use $port; do
        port=$((port + 1))
    done
    echo $port
}

# Check prerequisites
echo "📋 Checking prerequisites..."

if ! command_exists node; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

if ! command_exists python3; then
    echo "❌ Python 3 is not installed. Please install Python 3.8+ first."
    echo "   Download from: https://python.org/"
    exit 1
fi

if ! command_exists uv; then
    echo "❌ uv is not installed. Please install uv first."
    echo "   Install with: curl -LsSf https://astral.sh/uv/install.sh | sh"
    exit 1
fi

NODE_VERSION=$(node --version | cut -d 'v' -f 2 | cut -d '.' -f 1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version $NODE_VERSION is too old. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Prerequisites check passed"

# Check and find available ports
BACKEND_PORT=8000
FRONTEND_PORT=3000

if port_in_use $BACKEND_PORT; then
    NEW_BACKEND_PORT=$(find_available_port $BACKEND_PORT)
    echo "⚠️  Port $BACKEND_PORT is in use. Using port $NEW_BACKEND_PORT for backend."
    BACKEND_PORT=$NEW_BACKEND_PORT
fi

if port_in_use $FRONTEND_PORT; then
    NEW_FRONTEND_PORT=$(find_available_port $FRONTEND_PORT)
    echo "⚠️  Port $FRONTEND_PORT is in use. Using port $NEW_FRONTEND_PORT for frontend."
    FRONTEND_PORT=$NEW_FRONTEND_PORT
fi

# Start backend server
echo "🐍 Setting up FastAPI backend server..."
cd backend

# Create virtual environment if it doesn't exist
if [ ! -d ".venv" ]; then
    echo "🔧 Creating Python virtual environment with uv..."
    uv venv
fi

# Install dependencies if not already installed
if [ ! -f ".venv/.installed" ]; then
    echo "🔧 Installing Python dependencies with uv..."
    uv sync
    if [ $? -eq 0 ]; then
        touch .venv/.installed
        echo "✅ Python dependencies installed successfully"
    else
        echo "❌ Failed to install Python dependencies"
        exit 1
    fi
fi

echo "🔥 Starting backend server on http://localhost:$BACKEND_PORT"

# Modify the main.py temporarily if using a different port
if [ "$BACKEND_PORT" != "8000" ]; then
    sed -i.bak "s/port=8000/port=$BACKEND_PORT/" main.py
fi

uv run python main.py > ../backend.log 2>&1 &
BACKEND_PID=$!

# Restore original main.py if modified
if [ "$BACKEND_PORT" != "8000" ]; then
    mv main.py.bak main.py
fi

cd ..

# Wait for backend to start
sleep 3

# Check if backend started successfully
if ! kill -0 $BACKEND_PID 2>/dev/null; then
    echo "❌ Backend server failed to start. Check backend.log for details."
    cat backend.log
    exit 1
fi

# Start frontend server
echo "⚛️  Setting up Next.js frontend server..."
cd frontend

# Install Node.js dependencies if not already installed
if [ ! -d "node_modules" ]; then
    echo "🔧 Installing Node.js dependencies..."
    npm install
    if [ $? -eq 0 ]; then
        echo "✅ Node.js dependencies installed successfully"
    else
        echo "❌ Failed to install Node.js dependencies"
        kill $BACKEND_PID 2>/dev/null
        exit 1
    fi
fi

echo "🔥 Starting frontend server on http://localhost:$FRONTEND_PORT"

# Start frontend server on the determined port
if [ "$FRONTEND_PORT" != "3000" ]; then
    PORT=$FRONTEND_PORT npm run dev > ../frontend.log 2>&1 &
else
    npm run dev > ../frontend.log 2>&1 &
fi

FRONTEND_PID=$!

cd ..

# Wait for frontend to start
sleep 5

# Check if frontend started successfully
if ! kill -0 $FRONTEND_PID 2>/dev/null; then
    echo "❌ Frontend server failed to start. Check frontend.log for details."
    cat frontend.log
    kill $BACKEND_PID 2>/dev/null
    exit 1
fi

echo ""
echo "🌟 Cosmic Renewable Energy development servers are running!"
echo "   🌐 Frontend:  http://localhost:$FRONTEND_PORT"
echo "   🔌 Backend:   http://localhost:$BACKEND_PORT"
echo "   📚 API Docs:  http://localhost:$BACKEND_PORT/docs"
echo ""
echo "📋 Server Status:"
echo "   ✅ Backend server (PID: $BACKEND_PID)"
echo "   ✅ Frontend server (PID: $FRONTEND_PID)"
echo ""
echo "📄 Logs:"
echo "   Backend:  tail -f backend.log"
echo "   Frontend: tail -f frontend.log"
echo ""
echo "🛑 Press Ctrl+C to stop all servers"
echo ""

# Function to cleanup background processes
cleanup() {
    echo ""
    echo "🛑 Stopping development servers..."
    
    # Kill background processes gracefully
    if [ ! -z "$BACKEND_PID" ] && kill -0 $BACKEND_PID 2>/dev/null; then
        kill $BACKEND_PID 2>/dev/null
        sleep 1
        if kill -0 $BACKEND_PID 2>/dev/null; then
            kill -9 $BACKEND_PID 2>/dev/null
        fi
        echo "   ✅ Backend server stopped (PID: $BACKEND_PID)"
    fi
    
    if [ ! -z "$FRONTEND_PID" ] && kill -0 $FRONTEND_PID 2>/dev/null; then
        kill $FRONTEND_PID 2>/dev/null
        sleep 1
        if kill -0 $FRONTEND_PID 2>/dev/null; then
            kill -9 $FRONTEND_PID 2>/dev/null
        fi
        echo "   ✅ Frontend server stopped (PID: $FRONTEND_PID)"
    fi
    
    # Clean up any remaining processes on the ports
    if command_exists pkill; then
        pkill -f "python main.py" 2>/dev/null
        pkill -f "next-server" 2>/dev/null
        pkill -f "next dev" 2>/dev/null
    fi
    
    echo "✅ All servers stopped successfully!"
    echo "📄 Logs have been saved as backend.log and frontend.log"
    echo "🚀 Run './run_all.sh' again to restart the servers"
    exit 0
}

# Set trap to cleanup on script exit
trap cleanup INT TERM EXIT

# Show real-time logs (optional)
echo "📊 Showing real-time server status... (Press Ctrl+C to stop)"
while true; do
    sleep 10
    if ! kill -0 $BACKEND_PID 2>/dev/null; then
        echo "❌ Backend server has stopped unexpectedly!"
        cat backend.log | tail -10
        cleanup
    fi
    if ! kill -0 $FRONTEND_PID 2>/dev/null; then
        echo "❌ Frontend server has stopped unexpectedly!"
        cat frontend.log | tail -10
        cleanup
    fi
done