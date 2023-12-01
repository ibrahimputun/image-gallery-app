import React from 'react'

const Picture = ({ card }) => {

  return (
    <div className='picture'>
      <div className='imageContainer'>
        <img src={card.src.large} alt={card.photographer} />
      </div>
      <p>{card.photographer}</p>
    </div>
  )
}

export default Picture