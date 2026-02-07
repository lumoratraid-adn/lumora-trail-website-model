import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const BREVO_API_KEY = process.env.BREVO_API_KEY;

    try {
        const body = await req.json();
        const { name, email, phone, company, service, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        if (!BREVO_API_KEY) {
            console.error('CRITICAL: BREVO_API_KEY is not defined in process.env');
            return NextResponse.json({ error: 'Mail server configuration missing' }, { status: 500 });
        }

        const SENDER_EMAIL = process.env.ADMIN_EMAIL || 'lumoratriad@gmail.com';

        // 1. Send Notification Email to Admin (Lumora Triad)
        const adminResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'api-key': BREVO_API_KEY as string,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                sender: { name: 'Lumora Website', email: SENDER_EMAIL },
                to: [{ email: SENDER_EMAIL, name: 'Lumora Triad' }],
                subject: `🚀 New Project Inquiry: ${name}`,
                htmlContent: `
                <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f9f9f9; padding: 40px; color: #333;">
                    <div style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                        <div style="background: #0E0F13; padding: 30px; text-align: center;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 2px;">LUMORA TRIAD</h1>
                            <p style="color: #888; margin: 10px 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">New Website Lead</p>
                        </div>
                        <div style="padding: 40px;">
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">Name:</td>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${name}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #6366f1; text-decoration: none;">${email}</a></td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${phone || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold;">Interest:</td>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${service}</td>
                                </tr>
                            </table>
                            <div style="margin-top: 30px; padding: 20px; background: #f4f4f5; border-radius: 8px;">
                                <p style="margin: 0 0 10px; font-weight: bold;">Message Brief:</p>
                                <p style="margin: 0; line-height: 1.6; color: #555;">${message}</p>
                            </div>
                        </div>
                    </div>
                </div>
                `
            })
        });

        const adminData = await adminResponse.json();
        if (!adminResponse.ok) {
            console.error('Brevo Admin Email Error:', adminData);
            throw new Error(`Admin email failed: ${JSON.stringify(adminData)}`);
        }

        // 2. Send Auto-Reply to User
        const userResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'api-key': BREVO_API_KEY as string,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                sender: { name: 'Lumora Triad', email: SENDER_EMAIL },
                to: [{ email: email, name: name }],
                subject: 'Message Received | Lumora Triad Digital Studio',
                htmlContent: `
                <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px; color: #333; line-height: 1.6;">
                    <div style="max-width: 600px; margin: 0 auto;">
                        <div style="margin-bottom: 40px;">
                            <h2 style="font-size: 28px; margin: 0 0 20px; color: #000;">Hello ${name},</h2>
                            <p style="font-size: 16px; color: #555;">Thank you for reaching out to <strong>Lumora Triad</strong>. We have received your inquiry regarding <strong>${service}</strong>.</p>
                        </div>
                        
                        <div style="padding: 30px; border-left: 4px solid #6366f1; background: #f8fafc; margin-bottom: 40px;">
                            <p style="margin: 0; font-weight: bold; color: #6366f1; text-transform: uppercase; font-size: 12px; letter-spacing: 1px;">Update</p>
                            <p style="margin: 10px 0 0; font-size: 18px; color: #0f172a;">A member of our team will review your project brief and get back to you within <strong>24 hours</strong>.</p>
                        </div>

                        <p style="font-size: 16px; color: #555;">In the meantime, feel free to visit our portfolio to see some of our latest architectural designs and software builds.</p>
                        
                        <div style="margin-top: 60px; padding-top: 30px; border-top: 1px solid #eee;">
                            <p style="margin: 0; font-size: 14px; font-weight: bold; color: #000;">LUMORA TRIAD</p>
                            <p style="margin: 4px 0 0; font-size: 12px; color: #888;">Modern Digital Studio | Engineering Excellence</p>
                            <a href="https://www.lumoratriad.in" style="display: inline-block; margin-top: 15px; color: #6366f1; text-decoration: none; font-size: 14px; font-weight: bold;">Visit Website →</a>
                        </div>
                    </div>
                </div>
                `
            })
        });

        const userData = await userResponse.json();
        if (!userResponse.ok) {
            console.error('Brevo User Email Error:', userData);
            // Note: we don't throw here so at least the admin email went through
        }

        return NextResponse.json({ success: true, message: 'Emails processed' });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
