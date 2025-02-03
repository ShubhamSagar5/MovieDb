import React from 'react'
import { posterBaseDomain } from '../api/MovieAPI'

const CastCard = ({name,profile,character}) => {
  return (
    <div className=''>
      <img src={profile ?  posterBaseDomain+profile : '/image/imagePlaceholder.jpg'} alt="profilePhoto"/>
        <p>{name}</p>
        <p>Character : {character}</p>
   </div>
  )
}

export default CastCard