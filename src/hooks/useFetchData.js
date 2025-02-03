import { useDispatch, useSelector } from "react-redux"
import { setLoading } from "../store/UiSlice"
import { addPopularMovie, addTopRatedMovie, addUpcomingMovie } from "../store/MovieSlice"
import { useEffect } from "react"



const useFetchData = (movieAPI,movieCategory) => {

    const dispatch = useDispatch()
      const {page} = useSelector((store)=>store?.pagination)
    

    const fetchData = async() => {
        dispatch(setLoading(true))
        try {
            const res = await fetch(movieAPI+`&page=${page}`)
            const data = await res.json() 

            //update react-store 
            if(data?.results){
              switch(movieCategory){
                case "popular" :
                    dispatch(addPopularMovie(data?.results))
                break;
                case "topRated" :
                    dispatch(addTopRatedMovie(data?.results))
                break;
                case "upcoming":
                    dispatch(addUpcomingMovie(data?.results))
                break;
                default:
                break;
            }  
            }else{
                console.log('No Data found')
            }
            


        } catch (error) {
            console.log(error?.message)
        }finally{
            dispatch(setLoading(false))
        }
    }

    useEffect(()=>{
        fetchData()
    },[movieAPI,movieCategory,page])

}

export default useFetchData