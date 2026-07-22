import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { name, company, email, service, details } = await req.json();

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
      console.error("Missing SMTP credentials.");
      return NextResponse.json(
        { error: 'Internal Server Error: SMTP credentials missing.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for other ports
      auth: {
        user,
        pass,
      },
    });

    const logoUrl = 'https://vidhyonix.com/favicon.png'; // Fallback to favicon if no other logo is available

    // HTML Template for Internal Notification (To Site Owner)
    const internalHtmlTemplate = `
      <div style="font-family: Arial, sans-serif; max-w-2xl mx-auto p-6 border border-[#e5e7eb] rounded-lg">
        <h2 style="color: #0f172a; margin-bottom: 24px;">New Contact Request Received</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 120px;">Name</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Email</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Company</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${company || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Service</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${service || 'General Inquiry'}</td>
          </tr>
        </table>
        <h3 style="color: #0f172a; margin-top: 24px;">Project Details</h3>
        <p style="background-color: #f8fafc; padding: 16px; border-radius: 8px; line-height: 1.6;">${details}</p>
      </div>
    `;

    // HTML Template for User Auto-Responder (To the User)
    const userHtmlTemplate = `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
        <!-- Header -->
        <div style="background-color: #0f172a; padding: 32px 24px; text-align: center;">
          <img src="${logoUrl}" alt="Vidhyonix Logo" style="height: 48px; margin-bottom: 16px;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">Query Received</h1>
        </div>
        
        <!-- Body -->
        <div style="padding: 32px 24px; color: #334155; line-height: 1.6;">
          <p style="font-size: 16px; margin-bottom: 24px;">Hi ${name},</p>
          <p style="font-size: 16px; margin-bottom: 24px;">Thank you for reaching out to <strong>Vidhyonix</strong>. We have successfully received your inquiry regarding <strong>${service || 'your project'}</strong>.</p>
          <p style="font-size: 16px; margin-bottom: 24px;">Our engineering and strategy team will review your requirements and get back to you within <strong>one business day</strong> with the next steps.</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 24px; border-left: 4px solid #22d3ee;">
            <p style="margin: 0; font-size: 14px; font-weight: 600; color: #0f172a;">Your Message Summary:</p>
            <p style="margin: 8px 0 0 0; font-size: 14px; color: #475569;">"${details}"</p>
          </div>
          
          <p style="font-size: 16px; margin-bottom: 32px;">If you have any immediate questions or need to add further details, simply reply to this email.</p>
          
          <p style="font-size: 16px; margin: 0;">Best regards,</p>
          <p style="font-size: 16px; font-weight: 600; color: #0f172a; margin: 4px 0 0 0;">The Vidhyonix Team</p>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f8fafc; padding: 24px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="color: #64748b; font-size: 13px; margin: 0;">&copy; ${new Date().getFullYear()} Vidhyonix IT Solutions. All rights reserved.</p>
          <p style="color: #64748b; font-size: 13px; margin: 8px 0 0 0;">Mohali, Chandigarh, India</p>
        </div>
      </div>
    `;

    // 1. Send internal notification
    await transporter.sendMail({
      from: `"${fromName}" <${fromAddress}>`,
      to: user, // Send to the configured admin email (vidhyonixitsolutions@gmail.com)
      replyTo: email,
      subject: `New Inquiry: ${name} — ${service || 'General'}`,
      html: internalHtmlTemplate,
    });

    // 2. Send auto-responder to the user
    await transporter.sendMail({
      from: `"${fromName}" <${fromAddress}>`,
      to: email, // Send to the user who filled the form
      subject: `We've received your inquiry - Vidhyonix`,
      html: userHtmlTemplate,
    });

    return NextResponse.json({ success: true, message: 'Emails sent successfully.' });

  } catch (error: any) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
