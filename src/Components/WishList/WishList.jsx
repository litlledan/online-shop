import React from 'react'
import "./WishList.css"
import { useSelector } from 'react-redux'
import ItemProduct from './ItemProduct'

function WishList() {
    const wishlist = useSelector((state) => state.wishlistItem.items)
  return (
    <div className='container'>
        <div className='wishlist'>
            <div className='top-wishlist'>
                <p>Wishlist ({wishlist.length})</p>
                <button className='w-btn'>Move All To Bag</button>
            </div>
            <div className='main-wishlist'>
                <div className='cart'>
                    <div className='cart-top'>
                        {
                            wishlist.map((data) => (
                                <ItemProduct key={data.id} item={data} />
                            ))
                        }
                    </div>
                    <div className='cart-bottom'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WishList