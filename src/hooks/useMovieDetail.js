import { useDispatch, useSelector } from "react-redux"
import { setLoading } from "../store/UiSlice"
import { Api_key, movieDetailBaseAPI } from "../api/MovieAPI"
import { useEffect } from "react"
import { addCastData, addMovieDetailData } from "../store/DetailMovieSlice"




const useMovieDetail = (movieId) => {

    const loading = useSelector((store)=>store?.ui?.loading)
    const dispatch = useDispatch()


    const fetchData = async() => {
        dispatch(setLoading(true))
        try {
            const resMovie = await fetch(movieDetailBaseAPI+`${movieId}?api_key=${Api_key}&language=en-US`)
            const dataMovie = await resMovie.json()
            
            const resCast = await fetch(movieDetailBaseAPI+`${movieId}/credits?api_key=${Api_key}&language=en-US`)
            const dataCast = await resCast.json() 

            dispatch(addMovieDetailData(dataMovie))
            dispatch(addCastData(dataCast))
        } catch (error) {
            console.log(error.message)
        }finally{
            dispatch(setLoading(false))
        }
    }
useEffect(()=>{
    fetchData()
},[movieId])

}

export default useMovieDetail