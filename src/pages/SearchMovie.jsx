import React from 'react'
import useFetchSearchData from '../hooks/useFetchSearchData'
import MovieList from '../components/MovieList'
import { useSelector } from 'react-redux'
import NotFound from '../components/NotFound'

const SearchMovie = () => {
  
 
  const fetchMovie = useFetchSearchData()
  const movieData = useSelector((store)=>store?.movie?.searchMovie)  



  return (
    <div>

      
     
     {
      movieData?.length > 0 ?  <MovieList movieCategory="searchMovie"/> : <NotFound/>
     }

    </div>
  )
}

export default SearchMovie