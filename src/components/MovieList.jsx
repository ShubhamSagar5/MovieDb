import React, { useState } from 'react';
import MovieCard from './MovieCard';
import { useSelector } from 'react-redux';
import ShimmerUI from './ShimmerUI';
import { Link } from 'react-router-dom';

const MovieList = ({ movieCategory }) => {

  const movieData = useSelector((store)=>store?.movie[movieCategory])
  const loading = useSelector((store)=>store?.ui?.loading)

  return (
    <div className="flex flex-wrap ">
      {!loading ? movieData?.map((movie) => {
        return (
          <div key={movie?.id} className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 flex justify-center p-[2rem] mt-[1rem]">
           <Link to={`/detail/${movie?.id}`} className='flex flex-col items-center'>
              <MovieCard title={movie?.title} rating={movie?.vote_average} posterPath={movie?.poster_path}/>  
           </Link> 
          </div>
        );
      }) : <ShimmerUI></ShimmerUI>}
    </div>
  );
};

export default MovieList;
