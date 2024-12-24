"use client";
import React, { useEffect } from "react";
import MovieCreateForm from "../../features/MovieCreate/Form";
import { getById } from "@/app/service/movies";
import { useRouter } from "next/navigation";
import Spinner from "@/app/components/Spinner";
import isAuth from "@/app/components/isAuth";

interface UpdateMovieProps {
  params: {
    id: string;
  };
}

const UpdateMovie: React.FC<UpdateMovieProps> = ({ params }) => {
  const { id } = params;
  const [movie, setMovie] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const router = useRouter();
  const fetchMovie = async () => {
    try {
      setLoading(true);
      const data = await getById(id);
      setMovie(data?.data);
    } catch (error) {
      router.push("/404");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="p-[120px] mb-create-movie-main">
      <h2 className="mb-create-movie-heading text-white w-[491px] h-[56px] font-primary font-[600] text-[48px] leading-[56px] text-center">
        Update &quot;{movie?.title}&quot; movie
      </h2>
      <MovieCreateForm
        id={id}
        img={movie?.img}
        title={movie?.title}
        year={movie?.year}
      />
    </div>
  );
};

export default isAuth(UpdateMovie);
