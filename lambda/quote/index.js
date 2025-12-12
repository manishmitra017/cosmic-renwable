const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');

const ses = new SESClient({ region: process.env.AWS_REGION || 'ap-southeast-2' });

const RECIPIENT_EMAIL = 'ceejay@cosmicrenewableenergy.com.au';
const CC_EMAIL = 'manish.bvc@gmail.com';
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

    const { name, email, phone, address, property_type, roof_type, energy_usage, budget_range, message } = data;

    if (!name || !email || !phone || !address) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Name, email, phone, and address are required' }),
      };
    }

    const emailContent = `
New quote request received:

Name: ${name}
Email: ${email}
Phone: ${phone}
Property Address: ${address}
Property Type: ${property_type || 'Not specified'}
Roof Type: ${roof_type || 'Not specified'}
Energy Usage: ${energy_usage || 'Not provided'}
Budget Range: ${budget_range || 'Not provided'}
Message: ${message || 'No additional message'}

This email was sent from the Cosmic Renewable Energy website quote form.
`;

    const htmlContent = emailContent.replace(/\n/g, '<br>');

    const command = new SendEmailCommand({
      Source: SENDER_EMAIL,
      Destination: {
        ToAddresses: [RECIPIENT_EMAIL],
        CcAddresses: [CC_EMAIL],
      },
      Message: {
        Subject: {
          Data: `New Quote Request from ${name}`,
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
      body: JSON.stringify({ message: 'Quote request submitted successfully' }),
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to submit quote request' }),
    };
  }
};
