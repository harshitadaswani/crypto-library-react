import React from 'react';
import { AiFillHeart } from "react-icons/ai"

export const LikedCard = () => {
    return (
        <div className="card-basic-btns card-img">
            <img
                className="img-basic-btns"
                src="https://picsum.photos/300/200"
                alt="card image"
            />
            <AiFillHeart size={35} className="wishlist-btn br-full color-red"></AiFillHeart>
            <h3 className="title-basic-btns m-xs">Our Changing Planet</h3>
            <h4 className="subtitle-basic-btns m-xs">By Kurt Wanger</h4>
            <button className="bid-btn br-s p-s m-xs fw-semibold txt-s">
                Watch Now
            </button>
        </div>
    )
}
