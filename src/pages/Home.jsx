import React from 'react'
import { Card, Banner } from '../components';
import "./index.css"

const Home = () => {
    return (
        <>
            <Banner />
            <h2 className='h1-title'>Must Watch:</h2>
            <div className='flex flex-row flex-gap p-xs m-xs'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}

export { Home }
