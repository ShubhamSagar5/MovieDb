import React from 'react'

const Searchbar = () => {
  return (
    <div >
        <input className='border border-white py-[0.4rem] px-[0.2rem] rounded-sm bg-white text-black focus:outline-none' type="text" name="searchText" id="" placeholder='Movie Name . . . .'/>
        <button className='ml-[1rem] bg-[#2E2E2E] py-[0.4rem] px-[0.8rem] rounded-sm cursor-pointer'>Search</button>
    </div>
  )
}

export default Searchbar