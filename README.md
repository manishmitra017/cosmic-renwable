# Cosmic Renewable Energy Website

A modern, responsive website for Cosmic Renewable Energy built with Next.js (frontend) and FastAPI (backend).

## Project Structure

```
cosmicweb/
├── frontend/          # Next.js frontend application
│   ├── src/
│   │   ├── app/       # App router pages
│   │   └── components/ # Reusable components
│   └── package.json
├── backend/           # FastAPI backend application
│   ├── main.py        # Main FastAPI application
│   └── requirements.txt
└── README.md
```

## Features

- **Modern Design**: Clean, professional design similar to leading solar companies
- **Responsive Layout**: Fully responsive design that works on all devices
- **Contact Forms**: Integrated contact and quote request forms
- **Service Pages**: Comprehensive information about solar services
- **FAQ Section**: Interactive accordion-style FAQ section
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Tech Stack

### Frontend
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React** for UI components

### Backend
- **FastAPI** for API endpoints
- **Pydantic** for data validation
- **SQLAlchemy** for database operations (ready for future database integration)
- **Python 3.8+**

## Quick Start

### Prerequisites
- Node.js 18+ and npm
- Python 3.8+ and pip

### Run Both Servers (Recommended)

**Option 1: Using the run script**
```bash
./run_all.sh
```

**Option 2: Using npm**
```bash
npm run dev
```

This will start both the frontend (http://localhost:3000) and backend (http://localhost:8000) servers automatically.

### Manual Setup

If you prefer to run servers individually:

**Frontend Setup:**
```bash
cd frontend
npm install
npm run dev
```

**Backend Setup:**
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

### Available Scripts

- `./run_all.sh` - Start both frontend and backend servers
- `npm run dev` - Start both servers using npm
- `npm run setup` - Install all dependencies for both frontend and backend
- `npm run frontend` - Start only the frontend server
- `npm run backend` - Start only the backend server
- `npm run build` - Build the frontend for production
- `npm run clean` - Clean all dependencies and build files

## API Endpoints

- `GET /` - API health check
- `POST /contact` - Submit contact form
- `POST /quote` - Submit quote request
- `GET /services` - Get available services

## Pages

- `/` - Homepage with hero section and company overview
- `/services` - Detailed service offerings
- `/about` - Company information and mission
- `/why-solar` - Benefits of solar energy
- `/contact` - Contact form and company details
- `/quote` - Quote request form
- `/faq` - Frequently asked questions

## Customization

### Adding Photos
Replace the placeholder content in the components with your actual photos:
1. Add images to `frontend/public/` directory
2. Update image references in the React components
3. Replace placeholder gradient backgrounds with actual images

### Content Updates
- Update company information in components
- Modify service offerings in `/services` page
- Customize FAQ content in `/faq` page
- Update contact information in `/contact` page

### Styling
- Tailwind CSS classes can be modified throughout the components
- Color scheme uses green and blue tones - update in `tailwind.config.js` if needed

## Deployment

### Frontend (Vercel recommended)
```bash
cd frontend
npm run build
```

### Backend (Railway, Heroku, or similar)
```bash
cd backend
# Follow your hosting provider's deployment instructions
```

## Environment Variables

Create `.env` files for both frontend and backend as needed:

**Frontend** (.env.local):
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

**Backend** (.env):
```
DATABASE_URL=your_database_url_here
SECRET_KEY=your_secret_key_here
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary software for Cosmic Renewable Energy.