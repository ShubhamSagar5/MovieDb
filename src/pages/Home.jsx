import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='text-white'>
        <Navbar/>
        <div className='bg-[#2E2E2E]'>
        <Outlet/>
    </div>
    </div>
  )
}

export default Home