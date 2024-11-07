import React from 'react'

function ImageGallery({carDetail}) {
  return (
    <div>
            <img src={carDetail?.images[0].imageUrl} className='w-[1000px] h-[600px] mx-10 rounded-3xl shadow-xl object-cover' alt="" />
    </div>
  )
}

export default ImageGallery