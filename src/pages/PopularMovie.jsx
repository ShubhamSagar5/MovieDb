import React, { useState } from 'react'
import MovieList from '../components/MovieList'
import useFetchData from '../hooks/useFetchData'
import { getPopularMovieAPI } from '../api/MovieAPI'
import Pagination from '../components/Pagination';
import { useSelector } from 'react-redux';



const PopularMovie = () => {

  const fetchMovie = useFetchData(getPopularMovieAPI,'popular')

 

  return (
    <div className=''>
      <MovieList movieCategory="popularMovie"/>
      <Pagination/>
    </div>
  )
}

export default PopularMovie