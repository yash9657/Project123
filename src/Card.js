import React from 'react'
import './card.css'
const Card = (props) => {
  return (
    <>
      <div class="box">
        <h3>{props.userName}</h3>
        <p>{props.dateOfPost}</p>
        <img src={props.imageUrl} alt=""/>
          <h3>{props.productName}</h3>
          <h3>Price : <strong>{props.productPrice}</strong></h3>
          <p>{props.productDescription}</p>
          {/* <p>example@gmail.com</p>
          <p>963214587</p> */}
        </div>
    </>
  )
}

export default Card
