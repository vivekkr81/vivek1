import React, { useRef } from 'react'
import './Card.css'

const Card = (props) => {
   
    
  return (
    <div className='card'>
      <h1>{props.title}</h1>
      <p>{props.id}</p>
      <p>{props.body}</p>

    </div>
  )
}

export default Card
