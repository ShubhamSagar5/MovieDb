import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useCastDetail from '../hooks/useCastDetail'
import CastCard from './CastCard'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { nextPage, prevPage } from '../store/PaginationSlice'

const CastDetail = () => {
  
  const dispatch = useDispatch()
 
 const {page} = useSelector((store)=>store?.pagination)
  const {finalData,finalTotalPage} = useCastDetail()

 const handleNextPage = () => {
   dispatch(nextPage())
 }
 
 const handlePrevPage = () => {
   dispatch(prevPage())
 }
 

 return (
  <div >
  <div className='flex flex-wrap'>
     {finalData?.map((actor) => {
    return (
      <div key={actor?.id} className="w-6/12 sm:w-6/12 md:w-4/12 lg:w-2/12 p-2 mt-[2rem]">
        <CastCard name={actor?.name} profile={actor?.profile_path} character={actor?.character}/>
      </div>
    );
  })}
  </div>
 
  <div className='mt-10 flex  items-center justify-center'>
       <button className='bg-[#272626] p-2 rounded-xl cursor-pointer mx-10 ' disabled={page === 1} onClick={handlePrevPage}><IoIosArrowBack size={25}/></button>
    <div>{`${page} of ${finalTotalPage}`}</div>
    <button className='bg-[#272626] p-2 rounded-xl cursor-pointer mx-10' disabled={page === finalTotalPage} onClick={handleNextPage}><IoIosArrowForward size={25} /></button>
  </div>
</div>
  )
}

export default CastDetail