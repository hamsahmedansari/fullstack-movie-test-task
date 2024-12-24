import { ObjectId } from "bson";
import connectDB from "../database/mongodb";

export async function getUserByEmailAndPassword(
  email: string,
  password: string
) {
  try {
    const connection = await connectDB();
    const user = await connection.db().collection("users").findOne({
      email: email,
      password: password,
    });
    return user;
  } catch (error) {
    console.error("Error fetching user by email:", error);
    throw error;
  }
}

export async function getAllMovies() {
  try {
    const connection = await connectDB();
    const movies = await connection.db().collection("movies").find().toArray();
    movies.forEach((movie, index) => {
      movie.id = movie._id.toString();
    });
    return movies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
}

export async function deleteAllMovies() {
  try {
    const connection = await connectDB();
    await connection.db().collection("movies").deleteMany({});
  
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
}

export async function updateMovie(movieId: string, updatedData: any) {
  try {
    const connection = await connectDB();
    const movie = await connection.db().collection("movies").findOne({
      _id: new ObjectId(movieId),
    });

    if (!movie) {
      throw new Error("Movie not found");
    }

    await connection
      .db()
      .collection("movies")
      .updateOne({ _id: new ObjectId(movieId) }, { $set: updatedData });
  } catch (error) {
    console.error("Error updating movie:", error);
    throw error;
  }
}

export async function addNewMovie(movie: any) {
  try {
    const connection = await connectDB();
    await connection.db().collection("movies").insertOne(movie);
  } catch (error) {
    console.error("Error adding new movie:", error);
    throw error;
  }
}

export async function getMovieById(movieId: string) {
  try {
    console.log("🚀 ~ getMovieById ~ movieId:", movieId)
    const connection = await connectDB();
    const movie = await connection.db().collection("movies").findOne({
_id: new ObjectId(movieId),
    });

    if (!movie) {
      throw new Error("Movie not found");
    }

    return movie;
  } catch (error) {
    console.error("Error fetching movie by ID:", error);
    throw error;
  }
}
