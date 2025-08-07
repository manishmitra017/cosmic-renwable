from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional
import uvicorn

app = FastAPI(title="Cosmic Renewable Energy API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    message: str

class QuoteRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str
    address: str
    property_type: str
    roof_type: str
    energy_usage: Optional[str] = None
    budget_range: Optional[str] = None
    message: Optional[str] = None

@app.get("/")
async def root():
    return {"message": "Cosmic Renewable Energy API"}

@app.post("/contact")
async def submit_contact(contact: ContactForm):
    # TODO: Implement email sending logic
    return {"message": "Contact form submitted successfully", "data": contact}

@app.post("/quote")
async def request_quote(quote: QuoteRequest):
    # TODO: Implement quote processing logic
    return {"message": "Quote request submitted successfully", "data": quote}

@app.get("/services")
async def get_services():
    services = [
        {
            "id": 1,
            "title": "Solar Panel Installation",
            "description": "Professional solar panel installation for residential and commercial properties",
            "features": ["Free site assessment", "Custom system design", "Professional installation", "Ongoing support"]
        },
        {
            "id": 2,
            "title": "Solar Consultation",
            "description": "Expert consultation to help you understand your solar options",
            "features": ["Energy audit", "Cost-benefit analysis", "System recommendations", "Rebate guidance"]
        },
        {
            "id": 3,
            "title": "Maintenance & Support",
            "description": "Ongoing maintenance and support for your solar system",
            "features": ["Regular inspections", "Performance monitoring", "Cleaning services", "Warranty support"]
        }
    ]
    return {"services": services}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)