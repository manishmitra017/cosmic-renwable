import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface QuoteRequestData {
  name: string
  email: string
  phone: string
  address: string
  property_type: string
  roof_type: string
  energy_usage?: string
  budget_range?: string
  message?: string
}

async function sendEmail(subject: string, content: string) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_SERVER || 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'ceejay@cosmicrenewableenergy.com.au',
      subject: subject,
      text: content,
      html: content.replace(/\n/g, '<br>'),
    })

    return true
  } catch (error) {
    console.error('Failed to send email:', error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    const data: QuoteRequestData = await request.json()

    const subject = `New Quote Request from ${data.name}`
    
    const content = `
New quote request received:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Property Address: ${data.address}
Property Type: ${data.property_type}
Roof Type: ${data.roof_type}
Energy Usage: ${data.energy_usage || 'Not provided'}
Budget Range: ${data.budget_range || 'Not provided'}
Message: ${data.message || 'No additional message'}

This email was sent from the Cosmic Renewable Energy website quote form.
`

    const emailSent = await sendEmail(subject, content)

    if (!emailSent) {
      return NextResponse.json(
        { error: 'Failed to send email notification' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      message: 'Quote request submitted successfully',
      data: data
    })

  } catch (error) {
    console.error('Error processing quote request:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}