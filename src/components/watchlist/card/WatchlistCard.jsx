import React from 'react';
import { MdWatchLater } from "react-icons/md"

export const WatchlistCard = () => {
    return (
        <div className="card-basic-btns card-img">
            <img
                className="img-basic-btns"
                src="https://picsum.photos/300/200"
                alt="card image"
            />
            <MdWatchLater size={35} className="wishlist-btn br-full color-red"></MdWatchLater>
            <h3 className="title-basic-btns m-xs">Our Changing Planet</h3>
            <h4 className="subtitle-basic-btns m-xs">By Kurt Wanger</h4>
            <button className="bid-btn br-s p-s m-xs fw-semibold txt-s">
                Watch Now
            </button>
        </div>
    )
}
