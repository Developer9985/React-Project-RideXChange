import React from 'react'
import { IoCalendar } from "react-icons/io5";
import { TbBrandSpeedtest } from "react-icons/tb";
import { TbManualGearboxFilled } from "react-icons/tb";
import { BsFillFuelPumpFill } from "react-icons/bs";
function HeaderDetail({carDetail}) {
  return (
    <div className='w-full'>

                <div>

                <h2 className='font-bold text-[60px]'>{carDetail?.listingTitle}</h2>
                <p className='text-md font-semibold my-1 mx-1'>{carDetail?.tagline}</p>

                <div className='flex gap-3 mt-3 '>

                <div className='flex gap-2 items-center bg-[#9ec6ec69] p-3 rounded-full w-24'>
                <IoCalendar className='size-5'/> <h2 className='font-medium '>{carDetail?.year}</h2>
                </div>
                <div className='flex gap-2 items-center bg-[#9ec6ec69] p-3 rounded-full w-24'>
                <TbBrandSpeedtest className='size-6'/> <h2 className='font-medium '>{carDetail?.mileage}</h2>
                </div>

                <div className='flex gap-2 items-center bg-[#9ec6ec69] p-3 rounded-full w-26'>
                <TbManualGearboxFilled className='size-5'/> <h2 className='font-medium '>{carDetail?.transmission}</h2>
                </div>
                <div className='flex gap-2 items-center bg-[#9ec6ec69] p-3 rounded-full w-24'>
                <BsFillFuelPumpFill className='size-5'/> <h2 className='font-medium '>{carDetail?.year}</h2>
                </div>
            </div>
        </div>

        



    </div>

  )
}

export default HeaderDetail