#!/bin/bash

echo "🚀 Starting Cosmic Renewable Energy development servers..."

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check if port is in use
port_in_use() {
    lsof -Pi :$1 -sTCP:LISTEN -t >/dev/null
}

# Check prerequisites
echo "📋 Checking prerequisites..."

if ! command_exists node; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

if ! command_exists python3; then
    echo "❌ Python 3 is not installed. Please install Python 3.8+ first."
    exit 1
fi

echo "✅ Prerequisites check passed"

# Check if ports are already in use
if port_in_use 8000; then
    echo "⚠️  Port 8000 is already in use. Please stop the existing process or use a different port."
    exit 1
fi

if port_in_use 3000; then
    echo "⚠️  Port 3000 is already in use. Please stop the existing process or use a different port."
    exit 1
fi

# Start backend server in background
echo "🐍 Starting FastAPI backend server..."
cd backend

if [ ! -d "venv" ]; then
    echo "🔧 Creating Python virtual environment..."
    python3 -m venv venv
fi

source venv/bin/activate

if [ ! -f "venv/installed" ]; then
    echo "🔧 Installing Python dependencies..."
    pip install -r requirements.txt
    touch venv/installed
fi

echo "🔥 Backend server starting on http://localhost:8000"
python main.py > ../backend.log 2>&1 &
BACKEND_PID=$!

cd ..

# Wait a moment for backend to start
sleep 2

# Start frontend server
echo "⚛️  Starting Next.js frontend server..."
cd frontend

if [ ! -d "node_modules" ]; then
    echo "🔧 Installing Node.js dependencies..."
    npm install
fi

echo "🔥 Frontend server starting on http://localhost:3000"
npm run dev > ../frontend.log 2>&1 &
FRONTEND_PID=$!

cd ..

# Wait a moment for servers to start
sleep 3

echo ""
echo "🌟 Cosmic Renewable Energy development servers are running!"
echo "   🌐 Frontend: http://localhost:3000"
echo "   🔌 Backend:  http://localhost:8000"
echo "   📚 API Docs: http://localhost:8000/docs"
echo ""
echo "📋 Logs:"
echo "   Backend log: backend.log"
echo "   Frontend log: frontend.log"
echo ""
echo "📝 Press Ctrl+C to stop all servers"

# Function to cleanup background processes
cleanup() {
    echo ""
    echo "🛑 Stopping development servers..."
    
    # Kill background processes
    if [ ! -z "$BACKEND_PID" ]; then
        kill $BACKEND_PID 2>/dev/null
        echo "   ✅ Backend server stopped"
    fi
    
    if [ ! -z "$FRONTEND_PID" ]; then
        kill $FRONTEND_PID 2>/dev/null
        echo "   ✅ Frontend server stopped"
    fi
    
    # Clean up any remaining processes on the ports
    pkill -f "python main.py" 2>/dev/null
    pkill -f "next-server" 2>/dev/null
    
    echo "✅ All servers stopped. Goodbye!"
    exit 0
}

# Set trap to cleanup on script exit
trap cleanup INT TERM

# Wait for background processes
wait