import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchMovieName } from '../store/MovieSlice'
import { useNavigate } from 'react-router-dom'

const Searchbar = () => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const searchText = useSelector((store)=>store?.movie?.searchMovieName)

  const [localSearchText,setLocalSearchText] = useState('')

  const handleSearch = () => {
    if(localSearchText?.length > 0){
      dispatch(setSearchMovieName(localSearchText))
      navigate("/search")
      setLocalSearchText('')
    }else{
      dispatch(setSearchMovieName(''))
      navigate("/")
    }
   
  }

  return (
    <div className='p-2'>
        <input className='border border-white py-[0.4rem] px-[0.2rem] rounded-sm bg-white text-black focus:outline-none' type="text" value={localSearchText} name="searchText" id="" onChange={(e)=>setLocalSearchText(e.target.value)} placeholder='Movie Name . . . .'/>
        <button className='ml-[1rem] bg-[#2E2E2E] py-[0.4rem] px-[0.8rem] rounded-sm cursor-pointer' onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Searchbar