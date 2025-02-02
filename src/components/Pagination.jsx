import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { nextPage, prevPage, setPage } from '../store/PaginationSlice'

const Pagination = () => {
  
  const {page,totalPage} = useSelector((store)=>store?.pagination)
  const dispatch = useDispatch()
  
  const handleNextPage = () => {
    dispatch(nextPage())
  }
  
  const handlePrevPage = () => {
    dispatch(prevPage())
  }
  
  const handlePage = (pageNum) => {
    dispatch(setPage(pageNum))
  }

  return (
    <div className='mt-[5rem] p-2 '>
    <div className=' w-6/12 mx-auto flex justify-center items-center gap-[2rem] p-2'>
       <button className='bg-[#272626] p-2 rounded-xl cursor-pointer mx-10 ' disabled={page === 1} onClick={handlePrevPage}><IoIosArrowBack size={25}/></button>
    {
      [1,2,3].map((pageNum)=>{
        return(
          <div key={pageNum}  className={`p-3 text-[1.4rem]  rounded-full h-8 w-8 flex justify-center items-center cursor-pointer ${pageNum === page ? 'bg-[#1e1d1d]' : ''}`} onClick={()=>handlePage(pageNum)}>{pageNum}</div>
        )
      })
    }
    <button className='bg-[#272626] p-2 rounded-xl cursor-pointer mx-10' disabled={page === totalPage} onClick={handleNextPage}><IoIosArrowForward size={25} /></button>
    </div>
   
  </div>
  )
}

export default Pagination