# Cosmic Renewable Energy Backend

FastAPI backend for the Cosmic Renewable Energy website.

## Quick Start

Using uv (recommended):
```bash
uv sync
uv run python main.py
```

## API Endpoints

- `GET /` - Health check
- `POST /contact` - Submit contact form
- `POST /quote` - Submit quote request
- `GET /services` - Get available services

## Development

The backend runs on http://localhost:8000 with automatic API documentation at http://localhost:8000/docs