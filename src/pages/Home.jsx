import React from 'react'
import { Card, Banner } from '../components';
import "./index.css"

const Home = () => {
    return (
        <div>
            <Banner />
            <h2 className='p-l m-l'>Must Watch:</h2>
            <div className='flex flex-row flex-gap p-xs m-xs'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export { Home }