import React, { useState } from 'react'
import MovieList from '../components/MovieList'

const PopularMovie = () => {
  
  const [movieData,setMovieData] = useState([])

  const data = [
    {
      "name": "Inception",
      "poster": "https://blog.richmond.edu/heroes/files/2012/12/rise-of-the-guardians-2012-hollywood-movie-poster-700x1024.jpg",
      "rating": 8.8
    },
    {
      "name": "The Dark Knight",
      "poster": "https://blog.richmond.edu/heroes/files/2012/12/rise-of-the-guardians-2012-hollywood-movie-poster-700x1024.jpg",
      "rating": 9.0
    },
    {
      "name": "Interstellar",
      "poster": "https://blog.richmond.edu/heroes/files/2012/12/rise-of-the-guardians-2012-hollywood-movie-poster-700x1024.jpg",
      "rating": 8.7
    },
    {
      "name": "The Matrix",
      "poster": "https://blog.richmond.edu/heroes/files/2012/12/rise-of-the-guardians-2012-hollywood-movie-poster-700x1024.jpg",
      "rating": 8.7
    },
    {
      "name": "Avengers: Endgame",
      "poster": "https://blog.richmond.edu/heroes/files/2012/12/rise-of-the-guardians-2012-hollywood-movie-poster-700x1024.jpg",
      "rating": 8.4
    },
    {
      "name": "Fight Club",
      "poster": "https://blog.richmond.edu/heroes/files/2012/12/rise-of-the-guardians-2012-hollywood-movie-poster-700x1024.jpg",
      "rating": 8.8
    },
    {
      "name": "Forrest Gump",
      "poster": "https://blog.richmond.edu/heroes/files/2012/12/rise-of-the-guardians-2012-hollywood-movie-poster-700x1024.jpg",
      "rating": 8.8
    },
    {
      "name": "The Shawshank Redemption",
      "poster": "https://blog.richmond.edu/heroes/files/2012/12/rise-of-the-guardians-2012-hollywood-movie-poster-700x1024.jpg",
      "rating": 9.3
    },
    {
      "name": "The Godfather",
      "poster": "https://blog.richmond.edu/heroes/files/2012/12/rise-of-the-guardians-2012-hollywood-movie-poster-700x1024.jpg",
      "rating": 9.2
    },
    {
      "name": "The Wolf of Wall Street",
      "poster": "https://blog.richmond.edu/heroes/files/2012/12/rise-of-the-guardians-2012-hollywood-movie-poster-700x1024.jpg",
      "rating": 8.2
    }
  ]
  
  const fetchMovieData = async() => {
      const res = await fetch()
  }

  
  return (
    <div className=''>
      <MovieList movieData={data}/>
    </div>
  )
}

export default PopularMovie