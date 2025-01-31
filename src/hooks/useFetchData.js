import { useDispatch } from "react-redux"
import { setLoading } from "../store/UiSlice"
import { addPopularMovie, addTopRatedMovie, addUpcomingMovie } from "../store/MovieSlice"
import { useEffect } from "react"



const useFetchData = (movieAPI,movieCategory) => {

    const dispatch = useDispatch()

    const fetchData = async() => {
        dispatch(setLoading(true))
        try {
            const res = await fetch(movieAPI)
            const data = await res.json() 

            //update react-store 

            switch(movieCategory){
                case "popular" :
                    dispatch(addPopularMovie())
                break;
                case "topRated" :
                    dispatch(addTopRatedMovie())
                break;
                case "upcoming":
                    dispatch(addUpcomingMovie())
                break;
                default:
                break;
            }


        } catch (error) {
            console.log(error?.message)
        }finally{
            dispatch(setLoading(false))
        }
    }

    useEffect(()=>{
        fetchData()
    },[movieAPI,movieCategory])

}

export default useFetchData