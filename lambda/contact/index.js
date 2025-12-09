const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');

const ses = new SESClient({ region: process.env.AWS_REGION || 'ap-southeast-2' });

const RECIPIENT_EMAIL = 'ceejay@cosmicrenewableenergy.com.au';
const SENDER_EMAIL = process.env.SENDER_EMAIL || 'noreply@cosmicrenewableenergy.com.au';

exports.handler = async (event) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    const data = JSON.parse(event.body);

    const { name, email, phone, suburb, serviceInterest, message } = data;

    if (!name || !email) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Name and email are required' }),
      };
    }

    const emailContent = `
New contact form submission received:

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Suburb: ${suburb || 'Not provided'}
Service Interest: ${serviceInterest || 'Not specified'}
Message: ${message || 'No message provided'}

This email was sent from the Cosmic Renewable Energy website contact form.
`;

    const htmlContent = emailContent.replace(/\n/g, '<br>');

    const command = new SendEmailCommand({
      Source: SENDER_EMAIL,
      Destination: {
        ToAddresses: [RECIPIENT_EMAIL],
      },
      Message: {
        Subject: {
          Data: `New Contact Form Submission from ${name}`,
          Charset: 'UTF-8',
        },
        Body: {
          Text: { Data: emailContent, Charset: 'UTF-8' },
          Html: { Data: htmlContent, Charset: 'UTF-8' },
        },
      },
    });

    await ses.send(command);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Contact form submitted successfully' }),
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to submit contact form' }),
    };
  }
};
