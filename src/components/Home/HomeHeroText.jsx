import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className="font-[font1] lg:pt-4 pt-2 text-center" >
      <div className="text-[9vw] flex items-center justify-center  uppercase leading-[8.4vw]">
        The spark for
      </div>
      <div className="text-[9vw] flex items-center justify-center  uppercase leading-[8.7vw]">
        all<div className=" h-[7.19vw] w-[16.08vw] ml-2 -mt-[21px]  overflow-hidden rounded-full " style={{ clipPath: 'inset(0 round 9999px)' }}><Video /></div>things
      </div>
      <div className="text-[9vw] flex items-center justify-center  uppercase leading-[8.85vw]">
        creative
      </div>
    </div>
  )
}

export default HomeHeroText
