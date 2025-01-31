import React from 'react'
import MovieList from '../components/MovieList'
import useFetchData from '../hooks/useFetchData'
import { getPopularMovieAPI } from '../api/MovieAPI'

const PopularMovie = () => {

  const fetchMovie = useFetchData(getPopularMovieAPI,'popular')


  return (
    <div className=''>
      <MovieList movieCategory="popularMovie"/>
    </div>
  )
}

export default PopularMovie