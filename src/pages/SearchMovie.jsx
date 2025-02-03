import React from 'react'
import useFetchSearchData from '../hooks/useFetchSearchData'
import MovieList from '../components/MovieList'
import Pagination from '../components/Pagination'

const SearchMovie = () => {
  

  const fetchMovie = useFetchSearchData()
  
  return (
    <div>

      <MovieList movieCategory="searchMovie"/>
      <Pagination/>

    </div>
  )
}

export default SearchMovie