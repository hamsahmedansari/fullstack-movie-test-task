import { NextResponse } from "next/server";
import { deleteAllMovies } from "@/app/service/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await deleteAllMovies();

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete movies.",
      },
      { status: 500 }
    );
  }
}
