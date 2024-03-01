import React from 'react'
import deleteIcon from "../../assets/svg/delete.svg"

function ItemProduct({item}) {
  return (
    <div className="product-item">
      <div className="product-image">
        <img className="main-image" src={item.images[2]} alt="image" />
        <div className="discount">{item.discount}</div>
        <div className="icons">
          <div className="icon">
            <img src={deleteIcon} alt="text" />
          </div>
        </div>
        <button className="product-btn">Add To Cart</button>
      </div>
      <div className="product-detail">
        <p className="product-title">{item.title}</p>
        <div className="prices">
          <p className="discount-price">{item.price}</p>
          <p className="price">{item.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemProduct