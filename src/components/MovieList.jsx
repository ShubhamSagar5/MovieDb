import React, { useState } from 'react';
import MovieCard from './MovieCard';
import { useSelector } from 'react-redux';

const MovieList = ({ movieCategory }) => {

  const popularMovie = useSelector((store)=>store?.movie[movieCategory])

  return (
    <div className="flex flex-wrap ">
      {popularMovie?.map((movie, index) => {
        return (
          <div key={index} className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 flex justify-center p-[2rem] mt-[1rem]">
            <MovieCard title={movie?.title} rating={movie?.vote_average} posterPath={movie?.poster_path}/>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
