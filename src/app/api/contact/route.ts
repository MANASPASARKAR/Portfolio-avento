import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate payload
    const { name, email, message } = body;
    
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    
    // Simulate network delay for testing loading states (1.5 seconds)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Server-side logging of payload (as requested in Step 6)
    console.log("--- CONTACT FORM SUBMISSION [TEST MODE] ---");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log("-------------------------------------------");
    
    // Return successful response
    return NextResponse.json(
      { success: true, message: "Message received successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
