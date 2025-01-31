import React, { useState } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movieData }) => {
  const [cardData, setCardData] = useState(movieData);

  return (
    <div className="flex flex-wrap ">
      {cardData?.map((movie, index) => {
        return (
          <div key={index} className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 flex justify-center p-[2rem] mt-[1rem]">
            <MovieCard poster={movie?.poster} name={movie?.name} rating={movie?.rating} />
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
