import React, { memo } from "react";
import Spinner from "@/app/components/Spinner";
import Movie from "./Movie";

interface MovieItem {
  id: string;
  img: string;
  title: string;
  year: string;
}

interface MovieListProps {
  data: MovieItem[];
  onClick: (id: string) => void;
  loading: boolean;
}

const MovieGrid: React.FC<MovieListProps> = ({ data, onClick, loading }) => {
  if (loading)
    return (
      <div className="flex gap-[15px] flex-wrap justify-center mb-r-main w-full h-5 vw100">
        <Spinner />
      </div>
    );

  return (
    <div className="flex gap-[15px] flex-wrap justify-center mb-r-main">
      {data?.map((item) => (
        <Movie
          key={item.id}
          onClick={onClick}
          id={item.id}
          img={item.img}
          title={item.title}
          year={item.year}
        />
      ))}
    </div>
  );
};

export default memo(MovieGrid);
