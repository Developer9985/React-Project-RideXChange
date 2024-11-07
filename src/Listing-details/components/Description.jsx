import React from 'react'

function Description({carDetail}) {
  return (
    <div className='p-5 rounded-3xl bg-[#dfecf594] w-[1000px] mx-10 my-10 shadow-md'>
        
        <h2 className='font-bold text-2xl'>Description</h2>
        <p className='font-semibold text-md mt-3'>{carDetail?.listingDescription}</p>


    </div>
  )
}

export default Description