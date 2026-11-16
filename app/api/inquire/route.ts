import { NextResponse } from 'next/server';
import { sendInquiryEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const rawName = body.fullName || body.name;
    const rawEmail = body.email;
    const phone = body.phone;
    const country = body.country;
    const packagePreference = body.packagePreference || body.tourInterestedIn || body.tour;
    const travellers = body.travellers || body.travelersCount || body.travelers;
    const travelDate = body.travelDate || body.preferredDate;
    const message = body.message;

    // 1. Required validation
    if (!rawName || typeof rawName !== 'string' || !rawName.trim()) {
      return NextResponse.json(
        { error: 'Full Name is required. Please provide your name.' },
        { status: 400 }
      );
    }

    if (!rawEmail || typeof rawEmail !== 'string' || !rawEmail.trim()) {
      return NextResponse.json(
        { error: 'Email Address is required. Please provide your email.' },
        { status: 400 }
      );
    }

    // 2. Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(rawEmail.trim())) {
      return NextResponse.json(
        { error: 'Please provide a valid email address (e.g., name@example.com).' },
        { status: 400 }
      );
    }

    const cleanName = rawName.trim();
    const cleanEmail = rawEmail.trim();
    const cleanPhone = (phone || '').trim();
    const cleanCountry = (country || 'Not specified').trim();
    const cleanPackage = (packagePreference || 'General Nepal Trek / Tour Inquiry').trim();
    const cleanTravellers = (travellers || '1').toString().trim();
    const cleanDate = (travelDate || 'Flexible').trim();
    const cleanMessage = (message || 'No special requirements specified.').trim();

    const timestamp = new Date().toISOString();
    const inquiryId = 'TWA-' + Date.now().toString(36).toUpperCase();

    // 3. Formatted HTML Email
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; background-color: #f8fafc; padding: 24px; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
          .header { background: #1b4332; color: #ffffff; padding: 24px 32px; text-align: left; }
          .header h1 { margin: 0; font-size: 22px; font-weight: 700; }
          .header p { margin: 4px 0 0; font-size: 14px; opacity: 0.9; }
          .body { padding: 32px; }
          .badge { display: inline-block; background: #ea580c; color: white; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 600; text-transform: uppercase; margin-bottom: 20px; }
          .table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
          .table th { text-align: left; padding: 10px 12px; background: #f1f5f9; border-bottom: 1px solid #e2e8f0; font-size: 13px; color: #475569; width: 35%; }
          .table td { padding: 10px 12px; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #0f172a; }
          .message-box { background: #f8fafc; border-left: 4px solid #1b4332; padding: 16px; border-radius: 4px; font-style: italic; color: #334155; margin-top: 12px; }
          .footer { padding: 20px 32px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🏔️ TrekWithAmrit – New Trip Inquiry</h1>
            <p>A traveler has requested information about exploring Nepal</p>
          </div>
          <div class="body">
            <div class="badge">Inquiry ID: ${inquiryId}</div>
            <table class="table">
              <tr><th>Full Name</th><td><strong>${cleanName}</strong></td></tr>
              <tr><th>Email Address</th><td><a href="mailto:${cleanEmail}">${cleanEmail}</a></td></tr>
              <tr><th>WhatsApp / Phone</th><td>${cleanPhone ? '<a href="https://wa.me/' + cleanPhone.replace(/[^0-9]/g, '') + '">' + cleanPhone + '</a>' : 'Not provided'}</td></tr>
              <tr><th>Country of Residence</th><td>${cleanCountry}</td></tr>
              <tr><th>Selected Package</th><td><strong>${cleanPackage}</strong></td></tr>
              <tr><th>Number of Travellers</th><td>${cleanTravellers}</td></tr>
              <tr><th>Preferred Travel Date</th><td>${cleanDate}</td></tr>
            </table>

            <h3>Personal Message / Special Requirements:</h3>
            <div class="message-box">${cleanMessage.split('\n').join('<br/>')}</div>
          </div>
          <div class="footer">
            TrekWithAmrit • Official Inquiry Delivery to guideamrit2057@gmail.com • Received: ${timestamp}
          </div>
        </div>
      </body>
      </html>
    `;

    const text = `
New TrekWithAmrit Inquiry (${inquiryId})
========================================
Full Name: ${cleanName}
Email: ${cleanEmail}
WhatsApp/Phone: ${cleanPhone || 'Not provided'}
Country: ${cleanCountry}
Selected Package: ${cleanPackage}
Number of Travellers: ${cleanTravellers}
Preferred Travel Date: ${cleanDate}

Message / Requirements:
${cleanMessage}

Timestamp: ${timestamp}
    `.trim();

    // 4. Send email to guideamrit2057@gmail.com
    await sendInquiryEmail({
      to: 'guideamrit2057@gmail.com',
      replyTo: cleanEmail,
      subject: `[TrekWithAmrit Inquiry] ${cleanPackage} – from ${cleanName}`,
      html,
      text,
    });

    return NextResponse.json({
      success: true,
      inquiryId,
      message: `Thank you ${cleanName}! Your inquiry for '${cleanPackage}' has been received. Amrit will review your details and contact you via email (${cleanEmail}) or WhatsApp within 24 hours.`,
    });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : 'An unexpected error occurred.';
    console.error('[Inquiry API Error]', errMsg);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your inquiry. Please try again or reach out directly via WhatsApp.' },
      { status: 500 }
    );
  }
}
