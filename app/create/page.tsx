"use client";
import React from "react";
import MovieCreateForm from "../features/MovieCreate/Form";
import isAuth from "../components/isAuth";

const NewMovie = () => {
  return (
    <div className="p-[120px] mb-createmovie-main">
      <h2 className="mb-createmovie-heading text-white w-[491px] h-[56px] font-primary font-[600] text-[48px] leading-[56px] text-center">
        Create a new movie
      </h2>

      <MovieCreateForm />
    </div>
  );
};

export default isAuth(NewMovie);
