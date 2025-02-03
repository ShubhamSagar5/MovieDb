import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='text-white'>
        <div className='sticky top-0'>
          <Navbar/>
        </div>
        
        <div className='bg-[#2E2E2E] min-h-[100vh]'>
        <Outlet/>
    </div>
    </div>
  )
}

export default Home