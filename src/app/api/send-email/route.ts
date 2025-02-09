import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";

export const POST = async (req: Request) => {
  const data = (await req.json()) as {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

  const transporter = createTransport({
    service: "gmail" as const ,
    auth: {
      user: process.env.HOST_EMAIL,
      pass: process.env.HOST_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `${data.name} <${data.email}>`,
      subject: data.subject,
      to: process.env.HOST_EMAIL,
      text: data.message,
    });
    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
};
