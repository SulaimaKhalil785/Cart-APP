import React from 'react'

const Card = ({title , price , img}) => {
  return (
    <div className="border-2 text-center">
      <img src={img} alt={title} />
      <h2>Product Title:{title}</h2>
      <p>Price:${price}</p>
    </div>
  )
}

export default Card;