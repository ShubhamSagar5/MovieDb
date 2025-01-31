import React from 'react'
import Searchbar from './Searchbar'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-[#121212] py-[1rem]'>
      <div className='flex mx-[2rem] justify-between items-center'>
        <div>
        <h2 className='text-2xl font-semibold'>MovieDb</h2>
      </div>
      <div className='flex items-center gap-[1rem]'>
          <ul className='flex text-[1rem]  justify-center gap-[1.5rem]'>
            <li className='cursor-pointer'><Link to={"/"}>Popular</Link></li>
            <li className='cursor-pointer'><Link to={"/topRated"}>TopRated</Link></li>
            <li className='cursor-pointer'><Link to={"/upcoming"}>Upcoming</Link></li>
          </ul>
          <Searchbar/>
      </div>
      </div>
      
    </div>
  )
}

export default Navbar