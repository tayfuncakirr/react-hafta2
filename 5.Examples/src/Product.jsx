import React from 'react'
import "./css/product.css"

function Product({product}) {
  const {id, title, description, ticket, image} = product
  return (
    <div className='product'>
      <img src={image} />
      <h2>{title}</h2>
      <p>{description}</p>
      <h4>{ticket} ₺</h4>
    
    </div>
  )
}

export default Product