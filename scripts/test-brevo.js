const fs = require('fs');

async function loadEnv(filePath = '.env.local') {
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
  const ok = await loadEnv('.env.local');
  if (!ok) process.exit(2);

  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  if (!BREVO_API_KEY) {
    console.error('BREVO_API_KEY not set in environment');
    process.exit(2);
  }

  const payload = {
    sender: { name: 'Lumora Triad', email: 'lumoratraid@gmail.com' },
    to: [{ email: 'lumoratraid@gmail.com', name: 'Lumora Triad' }],
    subject: 'Brevo test — Lumora Triad',
    htmlContent: '<p>This is a test email sent via Brevo API from the local test script.</p>'
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

    const text = await res.text();
    let json;
    try { json = JSON.parse(text); } catch (e) { json = { raw: text }; }

    console.log('HTTP', res.status, res.statusText);
    console.log('Response body:', JSON.stringify(json, null, 2));

    if (!res.ok) process.exit(3);
    process.exit(0);
  } catch (err) {
    console.error('Request error:', err.message || err);
    process.exit(4);
  }
}

main();
