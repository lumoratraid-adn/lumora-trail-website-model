const fs = require('fs');
const path = require('path');

// Manually parse .env.local
const envPath = path.join(__dirname, '..', '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');

const BREVO_API_KEY = envContent.match(/BREVO_API_KEY=(.*)/)?.[1]?.trim();
const ADMIN_EMAIL = envContent.match(/ADMIN_EMAIL=(.*)/)?.[1]?.trim();

async function debugEmail() {
    console.log('--- DEBUG INFO ---');
    console.log('Email to use:', ADMIN_EMAIL);
    console.log('API Key starts with:', BREVO_API_KEY?.substring(0, 10));

    if (!BREVO_API_KEY || !ADMIN_EMAIL) {
        console.error('Missing env variables');
        return;
    }

    const payload = {
        sender: { name: 'Lumora Lab', email: ADMIN_EMAIL },
        to: [{ email: 'akash629k@gmail.com', name: 'Recipient' }],
        subject: 'Debug Test',
        htmlContent: '<h1>Working!</h1>'
    };

    console.log('Sending payload:', JSON.stringify(payload, null, 2));

    try {
        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'api-key': BREVO_API_KEY,
                'content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        console.log('Status Code:', response.status);
        console.log('Full Response:', JSON.stringify(data, null, 2));
    } catch (err) {
        console.error('Fetch error:', err);
    }
}

debugEmail();
