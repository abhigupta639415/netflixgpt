import React from 'react'

const VideoTitle = ({ title , overview}) => {
  return (
    <div className='absolute pt-[25%] px-12  bg-gradient-to-t from-black/80 to-transparent w-screen aspect-video'>
        <h1 className='text-4xl font-bold mb-4'>{title}</h1>
        <p className='text-lg text-gray-300 w-1/2'>{overview}</p>
        <div className='mt-6'>
            <button className='bg-red-600 px-6 py-3 rounded text-white font-semibold mr-4 hover:bg-red-700 opacity-80'>▶️ Play</button>
            <button className='bg-gray-600 px-6 py-3 rounded text-white font-semibold hover:bg-gray-700 opacity-80'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle