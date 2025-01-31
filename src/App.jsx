import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import PopularMovie from './pages/PopularMovie'
import TopRatedMovie from './pages/TopRatedMovie'
import UpcomingMovie from './pages/UpcomingMovie'
import SingleMovie from './pages/SingleMovie'
import SearchMovie from './pages/SearchMovie'



const appRouter = createBrowserRouter([{
  path:"/",
  element:<Home/>,
  children:[
    {
      path:"/",
      element:<PopularMovie/>
    },
    {
      path:"/topRated",
      element:<TopRatedMovie/>
    },
    {
      path:"/upcoming",
      element:<UpcomingMovie/>
    },
    {
      path:"/detail/:movieId",
      element:<SingleMovie/>
    },
    {
      path:"/search",
      element:<SearchMovie/>
    }
  ]
}])

const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App