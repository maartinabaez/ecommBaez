import React from 'react'

const Item = ({product}) => {
  return (
    <>
    <div>{product.name}</div>
    <div>{product.cost}</div>

    <div>{product.detail}</div>
    <div>{product.img}</div>

    </>
  )
}

export default Item