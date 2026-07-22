const nodemailer = require('nodemailer');

async function testEmail() {
  try {
    const host = process.env.EMAIL_HOST;
    const port = parseInt(process.env.EMAIL_PORT || '587', 10);
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    console.log("Config:", { host, port, user, passLength: pass ? pass.length : 0 });

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    console.log("Verifying connection...");
    await transporter.verify();
    console.log("Connection verified!");

    console.log("Sending test email...");
    const info = await transporter.sendMail({
      from: user,
      to: user,
      subject: "Test Email from Nodemailer",
      text: "Hello world?",
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Test email failed:", error);
  }
}

testEmail();
