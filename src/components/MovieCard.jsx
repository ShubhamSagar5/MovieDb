import React from 'react'

const MovieCard = ({name,poster,rating}) => {
  return (
    <div className=' text-center w-10/12 flex flex-col rounded-t-lg items-center'>
    <div className=''>
       <img src={poster} alt="" className='rounded-sm'  />
       <p>{name}</p>
       <p>{rating}</p>
    </div>
       
    </div>
  )
}

export default MovieCard