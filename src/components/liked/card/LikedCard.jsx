import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { useVideos } from "../../../context/VideoContext";
import { Link } from "react-router-dom";
import { REMOVE_FROM_LIKE } from "../../../reducer/LikeReducer";
import { useLike } from "../../../context/LikeContext";

export const LikedCard = () => {
  const { loader } = useVideos();
  const { likedState, likedDispatch } = useLike();
  return (
    <div className="card-container">
      {loader && <div> Loading the products </div>}
      {likedState.liked.length !== 0 ? (
        likedState.liked.map((video) => {
          const { _id, title, videoImage, creator } = video;
          return (
            <div className="card-basic-btns card-img" key={_id}>
              <img className="img-basic-btns" src={videoImage} alt={title} />
              <AiFillHeart
                size={35}
                className="wishlist-btn color-red br-full txt-cursor"
                onClick={() =>
                  likedDispatch({ type: REMOVE_FROM_LIKE, payload: video })
                }
              ></AiFillHeart>
              <h3 className="title-basic-btns m-xs">{title}</h3>
              <h4 className="subtitle-basic-btns m-xs">{creator}</h4>
              <Link to={`/player/${_id}`}>
                <button className="bid-btn br-s p-s m-xs fw-semibold txt-s">
                  Watch Now
                </button>
              </Link>
            </div>
          );
        })
      ) : (
        <div> Like some Videos from Explore Section</div>
      )}
    </div>
  );
};
