import { useDispatch, useSelector } from "react-redux"
import { getSearchResultAPI } from "../api/MovieAPI"
import { setLoading } from "../store/UiSlice"
import { addsearchMovie } from "../store/MovieSlice"
import { useEffect } from "react"


const useFetchSearchData = () => {
    
    const  dispatch  = useDispatch() 
    const {page} = useSelector((store)=>store?.pagination)
    const searchText  = useSelector((store)=>store?.movie?.searchMovieName)

    const fetchData = async() => {
        dispatch(setLoading(true))
        try {
            const res = await fetch(getSearchResultAPI + `&query=${searchText}&page=${page}`)
            const data = await res.json() 

            if(data?.results){
                dispatch(addsearchMovie(data?.results))
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
    },[searchText,page])
}

export default useFetchSearchData