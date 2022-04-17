import React from "react";
import { ImBin } from "react-icons/im";
import { useVideos } from "../../../context/VideoContext";
import { useHistory } from "../../../context/HistoryContext";
import { REMOVE_FROM_HISTORY } from "../../../reducer/HistoryReducer";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { removeHistoryToastFunction } from "../../../utils/ToastUtils";

export const HistoryCard = () => {
  const { loader } = useVideos();
  const { historyState, historyDispatch } = useHistory();

  return (
    <>
      <Toaster position="top-right" />
      <div className="card-container">
        {loader && <div> Loading the products </div>}
        {historyState.history.length !== 0 ? (
          historyState.history.map((video) => {
            const { _id, title, videoImage, creator } = video;
            return (
              <div className="card-basic-btns card-img" key={_id}>
                <img className="img-basic-btns" src={videoImage} alt={title} />
                <ImBin
                  size={35}
                  className="wishlist-btn br-full color-red txt-cursor"
                  onClick={() => {
                    historyDispatch({
                      type: REMOVE_FROM_HISTORY,
                      payload: video,
                    });
                    removeHistoryToastFunction();
                  }}
                ></ImBin>
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
          <div>Watch some Videos to add up videos in history!</div>
        )}
      </div>
    </>
  );
};
