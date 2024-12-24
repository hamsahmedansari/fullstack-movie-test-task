"use client"
import React, { useEffect, useState,  } from "react";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/navigation";

import Header from "../features/MovieList/Header";
import MovieGridList from "../features/MovieList/MovieGrid";
import isAuth from "../components/isAuth";
import EmptyList from "../features/MovieList/Empty";

import * as moviesServices from '@/app/service/movies';
import { MOVIE_ITEM_PER_PAGE } from "../config";


const MovieList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await moviesServices.getAll();
        const { success, movies } = response;
        if (success) {
          setData(movies);
        }
      } catch (err) {
        console.error("Error fetching movies:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const handleItemClick = (id: string) => {
    router.push(`/update/${id}`);
  };

  const indexOfLastItem = (currentPage + 1) * MOVIE_ITEM_PER_PAGE;
  const currentItems = data.slice(
    indexOfLastItem - MOVIE_ITEM_PER_PAGE,
    indexOfLastItem
  );
  const totalPages = Math.ceil(data.length / MOVIE_ITEM_PER_PAGE);

  if (data.length === 0 && !loading) {
    return <EmptyList />;
  }

  return (
    <div className="p-0 flex flex-col w-full movie-list">
      <Header />
      <MovieGridList
        data={currentItems}
        onClick={handleItemClick}
        loading={loading}
      />
      <div className="flex p-10 mb-20">
        {!!data.length && (
          <ReactPaginate
            pageCount={totalPages}
            pageRangeDisplayed={5}
            marginPagesDisplayed={3}
            previousLabel={"Prev"}
            nextLabel={"Next"}
            breakLabel={"..."}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        )}
      </div>
    </div>
  );
};

export default isAuth(MovieList);
