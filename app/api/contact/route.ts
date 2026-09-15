import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      company,
      email,
      phone,
      service,
      stage,
      budget,
      timeline,
      details,
    } = body;

    // Validation
    if (!name || !email || !details) {
      return NextResponse.json(
        { error: 'Name, email, and project details are required.' },
        { status: 400 }
      );
    }

    const host = process.env.EMAIL_HOST;
    const port = parseInt(process.env.EMAIL_PORT || '587', 10);
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const fromAddress = process.env.EMAIL_FROM_ADDRESS || user;
    const fromName = process.env.EMAIL_FROM_NAME || 'Vidhyonix IT Solutions';

    if (!host || !user || !pass) {
      console.warn('[Notice: SMTP Unconfigured - Lead Saved to Server Logs]:', JSON.stringify(body, null, 2));
      return NextResponse.json({
        success: true,
        message: 'Your inquiry has been received. A senior architect will reach out within 1 business day.'
      });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const logoUrl = 'https://vidhyonix.com/favicon.png';

    // HTML Template for Internal Notification (To Site Owner)
    const internalHtmlTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <h2 style="color: #0f172a; margin-bottom: 20px; font-size: 20px; border-bottom: 2px solid #22d3ee; padding-bottom: 10px;">
          New Qualified Project Inquiry
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; width: 140px; color: #475569;">Prospect Name</td>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Work Email</td>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}" style="color: #0284c7;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Phone / WhatsApp</td>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${phone || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Company</td>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${company || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Project Category</td>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600;">${service || 'General'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Current Stage</td>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${stage || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Estimated Budget</td>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${budget || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Target Timeline</td>
            <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${timeline || 'Not specified'}</td>
          </tr>
        </table>
        <h3 style="color: #0f172a; font-size: 16px; margin-bottom: 8px;">Project Scope Description:</h3>
        <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; color: #334155; line-height: 1.6; font-size: 14px; border-left: 3px solid #22d3ee;">
          ${details}
        </div>
      </div>
    `;

    // HTML Template for User Auto-Responder
    const userHtmlTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
        <div style="background-color: #0f172a; padding: 32px 24px; text-align: center;">
          <img src="${logoUrl}" alt="Vidhyonix Logo" style="height: 44px; margin-bottom: 12px;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">Project Inquiry Received</h1>
        </div>
        <div style="padding: 32px 24px; color: #334155; line-height: 1.6;">
          <p style="font-size: 16px; margin-bottom: 16px;">Hi ${name},</p>
          <p style="font-size: 15px; margin-bottom: 16px;">
            Thank you for reaching out to <strong>Vidhyonix IT Solutions</strong>. We have received your project assessment request regarding <strong>${service || 'your upcoming project'}</strong>.
          </p>
          <p style="font-size: 15px; margin-bottom: 24px;">
            A senior engineering architect will review your technical requirements and respond within <strong>one business day</strong> to discuss architecture, feasibility, and next steps.
          </p>
          <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; margin-bottom: 24px; border-left: 3px solid #22d3ee;">
            <p style="margin: 0; font-size: 13px; font-weight: 600; color: #0f172a;">Your Message Summary:</p>
            <p style="margin: 6px 0 0 0; font-size: 13px; color: #64748b;">"${details}"</p>
          </div>
          <p style="font-size: 14px; color: #64748b; margin-bottom: 0;">
            Warm regards,<br>
            <strong style="color: #0f172a;">Vidhyonix Engineering Team</strong><br>
            Mohali, Chandigarh, India | +91 8770283188
          </p>
        </div>
      </div>
    `;

    // 1. Send internal notification to site admin
    await transporter.sendMail({
      from: `"${fromName}" <${fromAddress}>`,
      to: user,
      replyTo: email,
      subject: `New Lead: ${name} (${company || 'Individual'}) — ${service || 'General'}`,
      html: internalHtmlTemplate,
    });

    // 2. Send auto-responder to the prospect
    await transporter.sendMail({
      from: `"${fromName}" <${fromAddress}>`,
      to: email,
      subject: `We've received your inquiry - Vidhyonix IT Solutions`,
      html: userHtmlTemplate,
    });

    return NextResponse.json({ success: true, message: 'Inquiry processed successfully.' });
  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Failed to dispatch notification email. Please try again later.' },
      { status: 500 }
    );
  }
}
