import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, solution, message } = await req.json();

    const data = await resend.emails.send({
      from: "ClaudBricks <onboarding@resend.dev>",
      to: "hello@claudbricks.com",
      subject: `New Project Inquiry: ${solution}`,
      html: `<p><strong>Name:</strong> ${name}</p>
      <br/<p><strong>Message:</strong> ${message}</p><br/>
      <p><strong>Email:${email}</strong>`,
    });

    // Handle Resend-specific errors (like limit reached)
    if (data.error) {
      console.error("Resend Error:", data.error);
      return NextResponse.json(
        { error: "System capacity reached. Please email directly." },
        { status: 429 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Infrastructure Offline" },
      { status: 500 }
    );
  }
}
