import React from 'react'
import { useSelector } from 'react-redux'
import { posterBaseDomain } from '../api/MovieAPI'

const MovieDetailCard = () => {
  
    const {movieData,castData} = useSelector((store)=>store?.detailMovie)
  
    return (
    <div>
        <div className='flex bg-[#060212] rounded-lg justify-between'>
            {/* Detail */}
            <div className='p-3 w-6/12'>
              <div className='flex gap-2'>
                              <img src={posterBaseDomain + movieData?.poster_path } alt="poster" className='h-[12rem] w-[8rem]' />
                      <div className='flex flex-col'>
                        <h2 className='text-[1.5rem] font-semibold'>{movieData?.title}</h2>
                        <p className='text-lg text-[#065e9d]'>Rating : {movieData?.vote_average}</p>
                        <div className='flex gap-2 items-center mt-3'>
                          <div className='border border-white p-1 rounded-sm text-xs'>{movieData?.runtime} min</div>
                          <ul className='flex'>{movieData?.genres?.map((tag,index)=>{
                            return (
                              <li key={tag.id} className='text-sm text-[#065e9d]'>{tag.name},</li>
                            )
                          })}</ul>
                        </div>
                        <p className='text-sm mt-2'>Release Date : {movieData?.release_date}</p>
                      </div>
              </div>
              <div className='mt-2'>
                <p className='text-xl font-semibold'>Overview</p>
                <p className='text-sm'>{movieData?.overview}</p>
              </div>

            </div>
            <div className=''>
              <img src={posterBaseDomain + movieData?.backdrop_path} alt="banner" className='rounded-tr-lg rounded-br-lg h-[24rem]' />
            </div>
        </div>
        <div>
          {/* cast */}
        </div>
    </div>
  )
}

export default MovieDetailCard