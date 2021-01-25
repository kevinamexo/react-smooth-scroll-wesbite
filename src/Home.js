import React from 'react'
import HeroSection from './HeroSection'
import {HomeObj1} from './HomeData'

function Home() {
    return (
        <>
            <HeroSection {...HomeObj1}/>       
        </>
    )
}

export default Home
