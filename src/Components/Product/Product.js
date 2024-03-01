import React from "react";
import view from "../../assets/svg/view.svg";
import like from "../../assets/svg/02.svg";
import mainImage from "../../assets/Image/02.png";
import "./Product.css";
import Star from "../../assets/svg/star";
import { addItem } from "../../redux/WishList/wishListSlice";
import { useDispatch } from "react-redux";

function Product({ item }) {
  const dispatch = useDispatch();

  const addWishList = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-item">
      <div className="product-image">
        <img className="main-image" src={item.images[2]} alt="image" />
        <div className="discount">{item.discount}</div>
        <div className="icons">
          <div onClick={() => addWishList(item)} className="icon">
            <img src={like} alt="text" />
          </div>
          <div className="icon">
            <img src={view} alt="text" />
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
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star, index) => (
            <Star key={index} fill={star <= 4 ? "#FFAD33" : "gray"} />
          ))}
          <p>({item.wishlists})</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
