import React from 'react'
import { useSelector } from 'react-redux'
import { posterBaseDomain } from '../api/MovieAPI'
import CastDetail from './CastDetail'

const MovieDetail = () => {
  
    const movieData = useSelector((store)=>store?.detailMovie?.movieData)
  
    return (
    <div>
        <div className='flex bg-[#060212] rounded-lg justify-between'>
            {/* Detail */}
            <div className='p-3 w-full md:w-6/12'>
              <div className='flex flex-col md:flex-row gap-2'>
                              <img src={posterBaseDomain + movieData?.poster_path } alt="poster" className=' w-full h-[27rem] md:w-[8rem] md:h-[12rem]' />
                      <div className='flex flex-col'>
                        <h2 className='text-[1.5rem] font-semibold'>{movieData?.title}</h2>
                        <p className='text-lg text-[#065e9d]'>Rating : {Math.floor(movieData?.vote_average*10)/10}</p>
                        <div className='flex md:flex-col md:items-start  lg:flex-row gap-2 items-center mt-3'>
                          <div className='border border-white p-1 rounded-sm text-xs'>{movieData?.runtime} min</div>
                          <ul className='flex'>{movieData?.genres?.map((tag)=>{
                            return (
                              <li key={tag.id} className='text-sm md:text-xs lg:text-sm text-[#065e9d]'>{tag.name},</li>
                            )
                          })}</ul>
                        </div>
                        <p className='text-lg md:text-xs mt-2'>Release Date : {movieData?.release_date}</p>
                      </div>
              </div>
              <div className='mt-2'>
                <p className='text-xl font-semibold'>Overview</p>
                <p className='text-sm'>{movieData?.overview}</p>
              </div>

            </div>
            <div className='hidden md:block'>
              <img src={posterBaseDomain + movieData?.backdrop_path} alt="banner" className='rounded-tr-lg rounded-br-lg h-full' />
            </div>
        </div>
        <div className='mt-[1rem]'>
          {/* cast */}
          <div>
              <p className='text-2xl font-semibold'>Cast</p>
              <CastDetail/>
          </div>
        </div>
    </div>
  )
}

export default MovieDetail