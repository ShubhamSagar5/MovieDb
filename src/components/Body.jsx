import React from 'react'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='bg-[#2E2E2E]'>
        <Outlet/>
    </div>
  )
}

export default Body