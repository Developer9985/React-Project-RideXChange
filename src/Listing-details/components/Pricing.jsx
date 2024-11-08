import { Button } from '@nextui-org/react';
import React from 'react'
import { FaDollarSign } from "react-icons/fa6";
import { FaTag } from "react-icons/fa";
function Pricing({carDetail}) {
  return (
    <div className='bg-[#dfecf594] rounded-3xl absolute w-[500px] h-[300px] shadow-lg'>
        <h2 className='font-bold text-4xl p-3 mx-14 mt-10'>Our Price</h2>
       <h2 className='font-bold text-3xl mx-[70px] mt-3'>${carDetail?.sellingPrice}</h2>

       <Button className='bg-[#7288f3] text-white p-6 w-[300px] mx-[100px] my-[60px]'><FaTag /> Make an Offer Price</Button>
    </div>
  )
}

export default Pricing