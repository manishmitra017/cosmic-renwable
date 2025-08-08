import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  suburb?: string
  serviceInterest?: string
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
    const data: ContactFormData = await request.json()

    const subject = `New Contact Form Submission from ${data.name}`
    
    const content = `
New contact form submission received:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Suburb: ${data.suburb || 'Not provided'}
Service Interest: ${data.serviceInterest || 'Not specified'}
Message: ${data.message || 'No message provided'}

This email was sent from the Cosmic Renewable Energy website contact form.
`

    const emailSent = await sendEmail(subject, content)

    if (!emailSent) {
      return NextResponse.json(
        { error: 'Failed to send email notification' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      message: 'Contact form submitted successfully',
      data: data
    })

  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}