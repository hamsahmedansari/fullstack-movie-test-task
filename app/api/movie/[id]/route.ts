import { NextRequest, NextResponse } from "next/server";
import { updateMovie, getMovieById } from "@/app/service/db";


export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "ID is required." },
        { status: 400 }
      );
    }

    const movie = await getMovieById(id);

    if (!movie) {
      return NextResponse.json(
        { success: false, message: "Movie not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: movie },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching movie:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch movie." },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const { title, year, img } = await req.json();

    // Validate the input data
    if (!id || !title || !year || !img) {
      return NextResponse.json(
        { success: false, message: "ID, title, year, and image are required." },
        { status: 400 }
      );
    }

    await updateMovie(id, { title, year, img });

    return NextResponse.json(
      { success: true, message: "Movie updated successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating movie:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update movie." },
      { status: 500 }
    );
  }
}
