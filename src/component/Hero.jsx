import { Typography } from '@mui/material'
import React from 'react'

const Hero = () => {
  return (
    <div className='hero h-screen w-full text-white  flex  lg:pt-28 lg:pl-28'>
        <div className='lg:w-1/3 md:w-1/3 sm:w-9/12 mx-9  my-9 font-bold '>
        <Typography variant="h4"  className=' capitalize font-bold '>the best place to find the cheapest airfares </Typography>
        <div className=' text-center my-4 text-2xl font-bold capitalize'>
        <span >-- Mahatma gandhi</span>
        </div>
        </div>
    </div>
  )
}

export default Hero