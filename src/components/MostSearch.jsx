import React from 'react'
import FakeData from '@/Shared/FakeData'
import CarItem from './CarItem';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
function MostSearch() {

    console.log(FakeData.carList); 
  return (
    <div className='absolute top-[1100px] w-full bg-white h-[550px] '>
        <h2 className='font-bold text-3xl text-center my-16 mt-10'>Most Searched Cars</h2>

        <div className='mx-24 cursor-pointer'>
        <Carousel>
            <CarouselContent>
                {FakeData.carList.map((car,index)=>(
                    <CarouselItem className="basis-1/4">
                        <CarItem car={car} />
                    </CarouselItem>
            
                 ))}
    
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

        </div>
        
    </div>
  )
}

export default MostSearch