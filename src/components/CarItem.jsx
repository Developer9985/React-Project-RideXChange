import { Separator } from '@radix-ui/react-select'
import React from 'react'
import { BsFillFuelPumpFill } from "react-icons/bs";
import { RiSpeedUpFill } from "react-icons/ri";
import { TbManualGearbox } from "react-icons/tb";
import { IoMdOpen } from "react-icons/io";
import { Link } from 'react-router-dom';
function CarItem({car}) {



  return (

    <Link to={'/listing-details/'+car?.id}>
    <div className='rounded-xl bg-white border hover:shadow-md cursor-pointer w-[300px]'>
        <img src={car?.images[0]?.imageUrl} width={'100%'} height={250} alt="" className='rounded-t-xl'/>
        <div className='p-4'>
            <h2 className='font-bold text-black text-lg mb-2 '>{car?.listingTitle}</h2>
            <Separator className='bg-gray-500 h-[1px] w-[270px] my-3'/>
            <div className='relative right-30 grid grid-cols-3 mt-5 '>
                <div className="flex flex-col items-center">
                    <BsFillFuelPumpFill size={20} />
                    <h2 className="text-sm mt-2">{car?.mileage}Miles</h2>
                </div>
                <div className="flex flex-col items-center">
                    <RiSpeedUpFill size={20}/>
                    <h2 className="text-sm mt-2">{car?.fuelType}</h2>
                </div>
                <div className="flex flex-col items-center">
                    <TbManualGearbox size={20}/>
                    <h2 className="text-sm mt-2">{car?.transmission}</h2>
                </div>
            </div>
            <Separator className='bg-gray-500 h-[1px] w-[270px] my-3'/>
            <div className='flex flex-row'>
              <h2 className='font-bold text-xl'>${car?.sellingPrice}</h2>
              <h2 className='relative left-16 flex gap-10 items-center'><IoMdOpen className=' relative left-10'/> View Details</h2>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default CarItem