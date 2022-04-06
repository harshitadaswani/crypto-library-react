import React from 'react';
import { Card } from '../components';

export const Videos = () => {
    return (
        <div>
            <h2 className='p-l m-l'>Trending:</h2>
            <div className='flex flex-row flex-gap p-xs m-xs'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
