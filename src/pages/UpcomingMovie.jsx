import React from 'react'
import useFetchData from '../hooks/useFetchData'
import { getUpcomingMovieAPI } from '../api/MovieAPI'
import MovieList from '../components/MovieList'
import Pagination from '../components/Pagination'

const UpcomingMovie = () => {
  
  const fetchMovie = useFetchData(getUpcomingMovieAPI,'upcoming')

  
  return (
    <div>
            <MovieList movieCategory="upcomingMovie"/>
            <Pagination/>
    </div>
  )
}

export default UpcomingMovie