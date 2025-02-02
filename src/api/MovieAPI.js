
export const Api_key = import.meta.env.VITE_API_KEY 

export const posterBaseDomain = 'https://image.tmdb.org/t/p/w500/'
export const getPopularMovieAPI = `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US`
export const getUpcomingMovieAPI = `https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US`
export const topRatedMovieAPI = `https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}&language=en-US` 


export const movieDetailBaseAPI = `https://api.themoviedb.org/3/movie/`