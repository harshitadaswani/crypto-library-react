import React from 'react';
import { Card } from '../components';

export const Videos = () => {
    return (
        <>
            <h2 className='h1-title'>Trending:</h2>
            <div className='flex flex-row flex-gap p-xs m-xs'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}
