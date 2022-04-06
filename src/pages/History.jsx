import React from 'react'
import { IconCard } from '../components'

export const History = () => {
    return (
        <div>
            <h2 className='p-l m-l'>History:</h2>
            <div className='flex flex-row flex-gap p-xs m-xs'>
                <IconCard />
                <IconCard />
                <IconCard />
                <IconCard />
            </div>
        </div>
    )
}
