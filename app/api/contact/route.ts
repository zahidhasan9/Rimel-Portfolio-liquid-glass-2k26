import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  budget?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Replace this with MongoDB, Nodemailer, Resend, or an Express backend integration.
    console.log("Contact form submission:", {
      name: body.name,
      email: body.email,
      budget: body.budget ?? "Not specified",
      message: body.message
    });

    return NextResponse.json({
      success: true,
      message: "Message received. I will respond shortly."
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request payload." },
      { status: 400 }
    );
  }
}
