import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      name,
      phone,
      email,
      dob,
      tob,
      pob,
      location,
      chamber,
      service,
      message,
    } = data;

    if (!name || !phone || !dob || !service) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Booking Form <onboarding@resend.dev>",
      to: process.env.BOOKING_EMAIL!,
      replyTo: email || undefined,
      subject: `New Appointment Booking — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Appointment Booking</h2>

          <p><strong>নাম:</strong> ${name}</p>
          <p><strong>ফোন:</strong> ${phone}</p>
          <p><strong>ইমেল:</strong> ${email || "দেওয়া হয়নি"}</p>
          <p><strong>জন্মতারিখ:</strong> ${dob}</p>
          <p><strong>জন্ম সময়:</strong> ${tob || "দেওয়া হয়নি"}</p>
          <p><strong>জন্মস্থান:</strong> ${pob || "দেওয়া হয়নি"}</p>
          <p><strong>পরিষেবা:</strong> ${service}</p>
          <p><strong>বর্তমানে কোথায় থাকেন?:</strong> ${location || "দেওয়া হয়নি"}</p>
          <p><strong>সুবিধাজনক চেম্বার:</strong> ${chamber || "দেওয়া হয়নি"}</p>
          

          <hr />

          <p><strong>বার্তা:</strong></p>
          <p>${message || "কোনো বার্তা দেওয়া হয়নি।"}</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Booking submitted successfully.",
    });
  } catch (error) {
    console.error("Booking email error:", error);

    return NextResponse.json(
      { error: "Failed to send booking." },
      { status: 500 }
    );
  }
}