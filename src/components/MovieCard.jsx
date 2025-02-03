import React from 'react'
import { posterBaseDomain } from '../api/MovieAPI'

const MovieCard = ({title,posterPath,rating}) => {
  return (
    <div className=' text-center w-10/12 flex flex-col rounded-t-lg items-center '>
    <div className=''>
       <img src={posterPath ? posterBaseDomain+posterPath : "/image/imagePlaceholder.jpg"} alt="img Not " className='rounded-sm'  />
       <p className='text-lg mt-2'>{title}</p>
       <p>Rating : {Math.floor(rating*10)/10}</p>
    </div>
       
    </div>
  )
}

export default MovieCard