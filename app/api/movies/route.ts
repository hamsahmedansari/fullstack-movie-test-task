import { NextResponse } from "next/server";
import { getAllMovies } from "@/app/service/db";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const movies = await getAllMovies();
    console.log("🚀 ~ GET ~ movies:", movies)

    return NextResponse.json({
      success: true,
      movies,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch movies.",
      },
      { status: 500 }
    );
  }
}
