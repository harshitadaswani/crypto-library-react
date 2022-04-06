import React from 'react'
import { IconCard } from '../components'

export const PlaylistListing = () => {
    return (
        <div>
            <h2 className='p-l m-l'>My Playlist:</h2>
            <div className='flex flex-row flex-gap p-xs m-xs'>
                <IconCard />
                <IconCard />
                <IconCard />
                <IconCard />
            </div>
        </div>
    )
}
