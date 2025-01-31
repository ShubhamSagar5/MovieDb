import React from 'react'
import { posterBaseDomain } from '../api/MovieAPI'

const MovieCard = ({title,posterPath,rating}) => {
  return (
    <div className=' text-center w-10/12 flex flex-col rounded-t-lg items-center'>
    <div className=''>
       <img src={posterBaseDomain+posterPath} alt="" className='rounded-sm'  />
       <p>{title}</p>
       <p>{rating}</p>
    </div>
       
    </div>
  )
}

export default MovieCard