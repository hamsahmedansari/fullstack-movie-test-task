import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { addNewMovie } from "@/app/service/db";

export async function POST(req: NextRequest) {
  try {
    const { title, year, img } = await req.json();

    if (!title || !year || !img) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    const data = {
      title,
      year,
      img,
    };

    await addNewMovie(data);

    return NextResponse.json(
      { success: true, message: "Movie added successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding movie:", error);

    if (axios.isAxiosError(error) && error.response) {
      return NextResponse.json(
        { message: error.response.data.message || "Failed to add movie." },
        { status: error.response.status }
      );
    }

    return NextResponse.json(
      { message: "Failed to add movie." },
      { status: 500 }
    );
  }
}
