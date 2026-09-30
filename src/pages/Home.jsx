import React from 'react'
import Video from '../components/Home/Video'
import HomeHeroText from '../components/Home/HomeHeroText'
import HomeBottomText from '../components/Home/HomeBottomText'
import HomeHeroMid from '../components/Home/HomeHeroMid'

const Home = () => {
    return (
        <div className="text-white">
            <div className=" h-screen w-screen fixed">
                <Video />
            </div>

            <div className='h-screen w-screen overflow-hidden relative flex justify-between flex-col'>
                <HomeHeroText />
                <HomeHeroMid />
                <HomeBottomText />

            </div>  
        </div>
    )
}

export default Home
