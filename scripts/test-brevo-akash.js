const fs = require('fs');

function loadEnv(filePath = '.env.local') {
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    raw.split(/\r?\n/).forEach(line => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return;
      const idx = trimmed.indexOf('=');
      if (idx === -1) return;
      const key = trimmed.slice(0, idx).trim();
      const val = trimmed.slice(idx + 1).trim();
      process.env[key] = val;
    });
    return true;
  } catch (err) {
    console.error('Could not read .env.local:', err.message);
    return false;
  }
}

async function main() {
  if (!loadEnv('.env.local')) process.exit(2);
  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  if (!BREVO_API_KEY) {
    console.error('BREVO_API_KEY not set');
    process.exit(2);
  }

  const payload = {
    sender: { name: 'Lumora Triad', email: 'lumoratraid@gmail.com' },
    to: [{ email: 'akash629k@gmail.com', name: 'akash' }],
    subject: 'Contact form test — Lumora Triad',
    htmlContent: `
      <h3>Contact Form Test</h3>
      <p><strong>Name:</strong> akash</p>
      <p><strong>Email:</strong> akash629k@gmail.com</p>
      <p><strong>Service:</strong> web</p>
      <p><strong>Message:</strong> text</p>
    `
  };

  try {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const txt = await res.text();
    let json;
    try { json = JSON.parse(txt); } catch (e) { json = { raw: txt }; }
    console.log('HTTP', res.status, res.statusText);
    console.log('Response:', JSON.stringify(json, null, 2));
    process.exit(res.ok ? 0 : 3);
  } catch (err) {
    console.error('Request error:', err.message || err);
    process.exit(4);
  }
}

main();
