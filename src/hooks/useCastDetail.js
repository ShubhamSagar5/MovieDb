import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { setPage, setTotalPage } from '../store/PaginationSlice'
import { setLoading } from '../store/UiSlice'



const useCastDetail = () => {
 
   const dispatch = useDispatch()
 
   dispatch(setLoading(true))
    const castCardData = useSelector((store)=>store?.detailMovie?.castData?.cast)
    const {page,totalPage} = useSelector((store)=>store?.pagination)
  
  const [itemPerPage,setItemPerPage] = useState(6)

  const finalTotalPage = Number(Math.ceil(castCardData?.length/itemPerPage))
  const lastIndex = page * itemPerPage 
  const firstIndex = lastIndex - itemPerPage
   const finalData = castCardData?.slice(firstIndex,lastIndex)

   dispatch(setTotalPage(finalTotalPage))
  dispatch(setLoading(false))

   return {finalData,finalTotalPage}

}

export default useCastDetail