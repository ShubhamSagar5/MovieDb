import React from 'react'
import MovieDetailCard from '../components/MovieDetailCard'
import { useParams } from 'react-router-dom'
import useMovieDetail from '../hooks/useMovieDetail'

const SingleMovieDetail = () => {
  
  const {movieId} = useParams()
  const fetchMovieDetailData = useMovieDetail(movieId)
  
  return (
    <div className='p-[1.5rem]'>
      <MovieDetailCard movieId={movieId}/>
     
    </div>
  )
}

export default SingleMovieDetail