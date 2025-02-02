import React from 'react'
import useFetchData from '../hooks/useFetchData'
import { topRatedMovieAPI } from '../api/MovieAPI'
import MovieList from '../components/MovieList'
import Pagination from '../components/Pagination'

const TopRatedMovie = () => {
  
  const fetchMovie = useFetchData(topRatedMovieAPI,'topRated')


  return (
    <div>
                  <MovieList movieCategory="topRatedMovie"/>
                  <Pagination/>

    </div>
  )
}

export default TopRatedMovie