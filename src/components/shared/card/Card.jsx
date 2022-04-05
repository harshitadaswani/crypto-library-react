import React from 'react';
import "./card.css";

export const Card = () => {
    return (
        <>
            <div className="card-basic-btns card-img">
                <img
                    className="img-basic-btns"
                    src="https://picsum.photos/300/200"
                    alt="card image"
                />
                <h3 className="title-basic-btns m-xs">Our Changing Planet</h3>
                <p className="subtitle-basic-btns m-xs">6K Views | 4 hours ago</p>
                <button className="bid-btn br-s p-s m-xs fw-semibold txt-s">
                    Watch Now
                </button>
            </div>
        </>
    )
}
