import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Separator } from "@/components/ui/separator"
  import { RiSearch2Line } from "react-icons/ri";
  
  import Data from "@/Shared/Data";



  function Search() {
  return (
    <div className='p-3 md:p-5 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-8 px-5 items-center w-[45%] realtive z-20' >
         <Select>
            <SelectTrigger className="outline-none md:border-none w-[200px] shadow-none text-lg">
                <SelectValue placeholder="Cars" />
             </SelectTrigger>
            <SelectContent>
                <SelectItem value="New">Old</SelectItem>
                <SelectItem value="Old">New</SelectItem>
               
            </SelectContent>
        </Select>
        <Separator orientation="vertical" className="w-[2px]"/>

         <Select>
            <SelectTrigger className="outline-none md:border-none w-[200px] shadow-none text-lg">
                <SelectValue placeholder="Brand" />
             </SelectTrigger>
           
            <SelectContent>
                {Data.CarList.map((maker,index)=>(<SelectItem key={maker.id} value={maker.name}>{maker.name}</SelectItem>))}
 

            </SelectContent>
        
        </Select>
        <Separator orientation="vertical" className="w-[2px]"/>

         <Select>
            <SelectTrigger className="outline-none md:border-none shadow-none text-lg w-[200px]">
                <SelectValue placeholder="Pricing" />
             </SelectTrigger>
             <SelectContent>
                {Data.CarPricing.map((amount,index)=>(<SelectItem key={amount.id} value={amount.Price}>{amount.Price}</SelectItem>))}
 
            </SelectContent>
        </Select>

        <div className='w-[40px] h-[40px] rounded-full bg-black p-2 hover:scale-105 transition-all cursor-pointer flex items-center'>
        <RiSearch2Line className='w-[100%] h-[100%]  text-white '/>

        </div>
     
    </div>
  )
}

export default Search