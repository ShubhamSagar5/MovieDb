import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchMovieName } from '../store/MovieSlice'
import { useNavigate } from 'react-router-dom'

const Searchbar = () => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchText,setSearchText] = useState('')

  const handleSearch = () => {
    if(searchText?.length > 0){
      dispatch(setSearchMovieName(searchText))
      navigate("/search")
    }
   
  }

  return (
    <div >
        <input className='border border-white py-[0.4rem] px-[0.2rem] rounded-sm bg-white text-black focus:outline-none' type="text" value={searchText} name="searchText" id="" onChange={(e)=>setSearchText(e.target.value)} placeholder='Movie Name . . . .'/>
        <button className='ml-[1rem] bg-[#2E2E2E] py-[0.4rem] px-[0.8rem] rounded-sm cursor-pointer' onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Searchbar