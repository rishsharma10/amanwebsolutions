import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const {
      name,
      companyName,
      email,
      phone,
      website,
      linkedin,
      partnershipType,
      companyType,
      details,
      projectVolume,
      timeline,
      budget,
      howHeard,
      // Conditional fields
      howGenerate,
      clientType,
      expectedReferrals,
      currentServices,
      typicalProjectSize,
      expectedVolume,
      clientComm,
      whatBuilding,
      productStage,
      usersCount,
      techTeam,
      whatTech,
      apiAvailability,
      integrationRequirements,
      partnershipObjective,
    } = data;

    if (!name || !email || !partnershipType || !details) {
      return NextResponse.json(
        { error: 'Name, email, partnership type, and details are required.' },
        { status: 400 }
      );
    }

    const host = process.env.EMAIL_HOST;
    const port = parseInt(process.env.EMAIL_PORT || '587', 10);
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const fromAddress = process.env.EMAIL_FROM_ADDRESS || user;
    const fromName = process.env.EMAIL_FROM_NAME || 'Vidhyonix Partnerships';

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
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const logoUrl = 'https://vidhyonix.com/favicon.png';

    // Build conditional info section for the internal email
    let conditionalInfoHtml = '';
    if (partnershipType === 'Referral Partnership') {
      conditionalInfoHtml = `
        <h3 style="color: #0f172a; margin-top: 24px; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px;">Referral Partnership Details</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 200px;">How they generate leads:</td>
            <td>${howGenerate || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Typical clients:</td>
            <td>${clientType || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Expected referrals/month:</td>
            <td>${expectedReferrals || 'N/A'}</td>
          </tr>
        </table>
      `;
    } else if (partnershipType === 'White-Label Development') {
      conditionalInfoHtml = `
        <h3 style="color: #0f172a; margin-top: 24px; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px;">White-Label Details</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 200px;">Current services offered:</td>
            <td>${currentServices || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Typical project size:</td>
            <td>${typicalProjectSize || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Expected monthly volume:</td>
            <td>${expectedVolume || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Do they manage client comms:</td>
            <td>${clientComm || 'N/A'}</td>
          </tr>
        </table>
      `;
    } else if (partnershipType === 'Product Partnership') {
      conditionalInfoHtml = `
        <h3 style="color: #0f172a; margin-top: 24px; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px;">Product Partnership Details</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 200px;">What they are building:</td>
            <td>${whatBuilding || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Current stage:</td>
            <td>${productStage || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Existing users:</td>
            <td>${usersCount || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Current technical team:</td>
            <td>${techTeam || 'N/A'}</td>
          </tr>
        </table>
      `;
    } else if (partnershipType === 'Technology Partnership') {
      conditionalInfoHtml = `
        <h3 style="color: #0f172a; margin-top: 24px; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px;">Technology Partnership Details</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 200px;">Technology/Product offered:</td>
            <td>${whatTech || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">API Availability:</td>
            <td>${apiAvailability || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Integration requirements:</td>
            <td>${integrationRequirements || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Partnership objective:</td>
            <td>${partnershipObjective || 'N/A'}</td>
          </tr>
        </table>
      `;
    }

    // HTML Template for Internal Notification
    const internalHtmlTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
        <h2 style="color: #0f172a; margin-top: 0; margin-bottom: 24px; border-bottom: 2px solid #22d3ee; padding-bottom: 12px; font-size: 20px;">New Vidhyonix Partnership Inquiry</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 160px; color: #334155;">Contact Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #0f172a;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #334155;">Company Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #0f172a;">${companyName || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #334155;">Work Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #0f172a;"><a href="mailto:${email}" style="color: #06b6d4; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #334155;">Phone / WhatsApp</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #0f172a;">${phone || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #334155;">Website</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #0f172a;">${website ? `<a href="${website}" target="_blank" style="color: #06b6d4; text-decoration: none;">${website}</a>` : 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #334155;">LinkedIn</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #0f172a;">${linkedin ? `<a href="${linkedin}" target="_blank" style="color: #06b6d4; text-decoration: none;">${linkedin}</a>` : 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #334155;">Partnership Type</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #7c3aed; font-weight: bold;">${partnershipType}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #334155;">Company Type</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #0f172a;">${companyType || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #334155;">Project Volume</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #0f172a;">${projectVolume || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #334155;">Timeline</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #0f172a;">${timeline || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #334155;">Budget Range</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #0f172a;">${budget || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #334155;">How they heard</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #0f172a;">${howHeard || 'N/A'}</td>
          </tr>
        </table>

        ${conditionalInfoHtml}

        <h3 style="color: #0f172a; margin-top: 24px; margin-bottom: 8px; font-size: 16px;">Collaboration & Proposal Details</h3>
        <p style="background-color: #f8fafc; padding: 16px; border-radius: 8px; line-height: 1.6; border-left: 4px solid #7c3aed; margin: 0; color: #334155; font-size: 14px;">${details}</p>
      </div>
    `;

    // HTML Template for User Auto-Responder
    const userHtmlTemplate = `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
        <div style="background-color: #0f172a; padding: 32px 24px; text-align: center;">
          <img src="${logoUrl}" alt="Vidhyonix Logo" style="height: 48px; margin-bottom: 16px;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.5px;">Partnership Request Received</h1>
        </div>
        
        <div style="padding: 32px 24px; color: #334155; line-height: 1.6;">
          <p style="font-size: 16px; margin-bottom: 20px;">Hi ${name},</p>
          <p style="font-size: 16px; margin-bottom: 20px;">Thank you for your interest in partnering with <strong>Vidhyonix</strong>. We have successfully received your inquiry for a <strong>${partnershipType}</strong>.</p>
          <p style="font-size: 16px; margin-bottom: 20px;">Our partnership management team will review your company background and opportunity details. We will reach out to schedule a discovery call shortly to discuss how we can work together.</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 24px; border-left: 4px solid #7c3aed;">
            <p style="margin: 0; font-size: 14px; font-weight: 600; color: #0f172a;">Your Collaboration Details Summary:</p>
            <p style="margin: 8px 0 0 0; font-size: 14px; color: #475569;">"${details}"</p>
          </div>
          
          <p style="font-size: 16px; margin-bottom: 32px;">If you have any pitch deck or supporting documents you'd like to share, you can reply directly to this email.</p>
          
          <p style="font-size: 16px; margin: 0;">Best regards,</p>
          <p style="font-size: 16px; font-weight: 600; color: #0f172a; margin: 4px 0 0 0;">Vidhyonix Partnerships Team</p>
        </div>
        
        <div style="background-color: #f8fafc; padding: 24px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="color: #64748b; font-size: 13px; margin: 0;">&copy; ${new Date().getFullYear()} Vidhyonix IT Solutions. All rights reserved.</p>
          <p style="color: #64748b; font-size: 13px; margin: 8px 0 0 0;">Mohali, Chandigarh, India</p>
        </div>
      </div>
    `;

    // 1. Send internal notification email
    await transporter.sendMail({
      from: `"${fromName}" <${fromAddress}>`,
      to: user,
      replyTo: email,
      subject: `New Partnership Inquiry: ${companyName || name} — ${partnershipType}`,
      html: internalHtmlTemplate,
    });

    // 2. Send confirmation auto-responder to the applicant
    await transporter.sendMail({
      from: `"${fromName}" <${fromAddress}>`,
      to: email,
      subject: `Partnership Inquiry Received — Vidhyonix`,
      html: userHtmlTemplate,
    });

    return NextResponse.json({ success: true, message: 'Partnership request submitted successfully.' });

  } catch (error: any) {
    console.error('Partnership API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process partnership request. Please try again later.' },
      { status: 500 }
    );
  }
}
