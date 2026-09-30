import React from 'react'
import video from '../../assets/animation-app-video.mp4'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video className='h-full w-full object-cover' src={video} autoPlay muted loop />
    </div>
  )
}

export default Video
