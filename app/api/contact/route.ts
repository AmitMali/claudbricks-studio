import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, solution, message } = await req.json();

    const data = await resend.emails.send({
      from: "ClaudBricks Website Inquiry <inquiry@claudbricks.com>",
      to: "hello@claudbricks.com",
      subject: `New Project Inquiry: ${solution}`,
      html: `<div style="font-family: 'Courier New', Courier, monospace; background-color: #000; color: #fff; padding: 40px; border: 1px solid #00FFAB;">
      <h2 style="color: #09090B; text-transform: uppercase;">Incoming_Lead_Detected</h2>
      <p style="color: #666;">TIMESTAMP: ${new Date().toISOString()}</p>
      <hr style="border: 0; border-top: 1px solid #333; margin: 20px 0;" />
      
      <p><strong style="color: #09090B;">SENDER:</strong> ${name}</p>
      <p><strong style="color: #09090B;">CONTACT:</strong> ${email}</p>
      <p><strong style="color: #09090B;">SOLUTION:</strong> ${solution}</p>
      
      <div style="margin-top: 20px; padding: 20px; background: #111; border-radius: 8px;">
        <p style="color: #09090B; margin-bottom: 10px;">MESSAGE_BODY:</p>
        <p style="line-height: 1.6;">${message}</p>
      </div>
    </div>`,
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
