import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
const submissions = new Map<string, number>();
const defaultRecipient = "ahmedameer7337@gmail.com";

function clientIp(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

export async function POST(request: Request) {
  const ip = clientIp(request);
  const now = Date.now();

  if ((submissions.get(ip) || 0) > now - 60_000) {
    return NextResponse.json({ error: "Please wait a minute before sending another message." }, { status: 429 });
  }

  try {
    const form = await request.formData();
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const subject = String(form.get("subject") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST?.trim();
    const smtpUser = process.env.SMTP_USER?.trim();
    const smtpPass = process.env.SMTP_PASS?.trim();
    const contactEmail = process.env.CONTACT_EMAIL?.trim() || defaultRecipient;
    const fromEmail = process.env.SMTP_FROM?.trim() || smtpUser || contactEmail;

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json(
        {
          error:
            "Contact email is not configured yet. Set SMTP_HOST, SMTP_USER, SMTP_PASS, and optionally CONTACT_EMAIL in your environment.",
        },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: fromEmail,
      to: contactEmail,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubmitted: ${new Date().toISOString()}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong><br />${message.replace(/\n/g, "<br />")}</p>`,
    });

    submissions.set(ip, now);
    return NextResponse.json({ success: true, recipient: contactEmail });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to send your message." }, { status: 500 });
  }
}
