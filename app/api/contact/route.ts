import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  // Replace this block later with MongoDB, email service, or backend API integration.
  console.log("Contact form submission:", body);

  return NextResponse.json({ success: true, message: "Message received." });
}
