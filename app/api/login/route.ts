import { getUserByEmailAndPassword } from "@/app/service/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Parse the JSON body from the request
    const { email, password } = await req.json();

    // Validate email and password existence
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password are required." },
        { status: 400 }
      );
    }

    const userInfo = await getUserByEmailAndPassword(email, password)

    // Simulate internal validation (or forward the request to an external API)
    if (email === userInfo?.email && password === userInfo?.password) {
      return NextResponse.json(
        { success: true, message: "Login successful!", data: userInfo },
        { status: 200 }
      );
    } else {
      // Uncomment and use if forwarding to an external API instead:
      // const response = await axios.post("http://localhost:8080/login", { email, password });
      // return NextResponse.json({ success: true, message: response.data.message }, { status: 200 });

      return NextResponse.json(
        { success: false, message: "Invalid email or password." },
        { status: 401 }
      );
    }
  } catch (error) {
    // Handle unexpected errors
    console.error("Error during login:", error);

    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
