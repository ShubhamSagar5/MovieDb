import React from 'react'
import { posterBaseDomain } from '../api/MovieAPI'

const CastCard = ({name,profile,character}) => {
  return (
    <div className='sm:w-6/12 md:w-8/12 lg:w-12/12'>
      <img src={posterBaseDomain+profile} alt="profilePhoto"/>
        <p>{name}</p>
        <p>Character : {character}</p>
   </div>
  )
}

export default CastCard