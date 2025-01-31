
const Api_key = process.env.API_KEY 


export const getAllMovieAPI = `https://api.themoviedb.org/3/movie/popular?api_key=${Api_Key}&language=en-US&page=1`
export const getUpcomingMovieAPI = `https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1`
export const topRatedMovieAPI = `https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}&language=en-US&page=1`