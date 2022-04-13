import React from 'react'
import { HistoryCard } from '../components'

export const PlaylistListing = () => {
    return (
        <>
            <h2 className='h1-title'>My Playlist:</h2>
            <div className='flex flex-row flex-gap p-xs m-xs'>
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
            </div>
        </>
    )
}
