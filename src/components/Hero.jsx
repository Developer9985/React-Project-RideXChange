import React from 'react'
import Search from './Search'
function Hero() {
  return (
    <div>

        <div className='absolute top-[81px] flex flex-col items-center p-10 py-20 gap-5 h-[600px] w-full bg-[#ddd7f8]'>
            <h2 className='text-[25px]'>Find cars for sale and for rent near you</h2>
            <h1 className='font-bold'>Unlock you dream car today</h1>
            <Search/>

            <img src="/bmw.png" alt="" className='absolute top-[30%] w-[1200px]' />
        </div>

        

    </div>
    
  )
}

export default Hero