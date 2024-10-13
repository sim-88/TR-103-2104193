import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.img} alt="" style={{width:"100%",height:"50%"}} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
