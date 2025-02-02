import React from 'react'
import MovieDetail from '../components/MovieDetail'
import { useParams } from 'react-router-dom'
import useMovieDetail from '../hooks/useMovieDetail'

const SingleMovieDetail = () => {
  
  const {movieId} = useParams()
  const fetchMovieDetailData = useMovieDetail(movieId)
  
  return (
    <div className='p-[1.5rem]'>
      <MovieDetail movieId={movieId}/>
     
    </div>
  )
}

export default SingleMovieDetail