import React from 'react'
import { WatchlistCard } from '../components'

export const Watchlist = () => {
    return (
        <div>
            <h2 className='p-l m-l'>Watch Later:</h2>
            <div className='flex flex-row flex-gap p-xs m-xs'>
                <WatchlistCard />
                <WatchlistCard />
                <WatchlistCard />
                <WatchlistCard />
            </div>
        </div>
    )
}
