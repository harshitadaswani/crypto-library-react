import React from 'react';
import ReactPlayer from 'react-player';
import { AiFillLike } from "react-icons/ai";
import { MdWatchLater, MdPlaylistAdd, MdPlaylistAddCheck } from "react-icons/md";
import "./index.css";

export const Player = () => {
    return (
        <>
            <ReactPlayer url={"https://www.youtube.com/watch?v=pX-oB8PE3Hg"} width="100%" height="100%" className="player-wrapper p-xs m-xs" />
            <div className='flex flex-align-center flex-gap'>
                <div className='p-m m-m flex flex-align-center'>
                    <AiFillLike size={30} />
                    <p> Like </p>
                </div>
                <div className='p-m m-m flex flex-align-center'>
                    <MdWatchLater size={30} />
                    <p> Watch Later </p>
                </div>
                <div className='p-m m-m flex flex-align-center'>
                    <MdPlaylistAdd size={30} />
                    <p> Add to Playlist </p>
                </div>
            </div>
            <h1 className='player-title p-xs'>Title</h1>
            <div className='p-m m-m'>
                Description
            </div>
        </>
    )
}
