import React, { useEffect, useState } from 'react'
import FakeData from '@/Shared/FakeData'
import CarItem from './CarItem';
import Service from '@/Shared/Service'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

  import { CarListing,CarImages } from './../../configs/schema'
import { desc,eq } from 'drizzle-orm'
import {db} from './../../configs'

function MostSearch() {

    // console.log(FakeData.carList); 

    const [carList,setCarList]=useState([]);

    useEffect(()=>{
        GetPopularCarList();
    },[])


    const GetPopularCarList= async()=>{

      const result =await db.select().from(CarListing)
      .leftJoin(CarImages,eq(CarListing.id,CarImages.CarListingId))
      .orderBy(desc(CarListing.id))
      .limit(10)
      const resp = Service.FormatResult(result);
      console.log(resp);
      setCarList(resp);
    }
  return (
    <div className='absolute top-[1100px] w-full bg-white h-[550px] '>
        <h2 className='font-bold text-3xl text-center my-16 mt-10'>Most Searched Cars</h2>

        <div className='mx-24 cursor-pointer'>
        <Carousel>
            <CarouselContent>
                {carList.map((car,index)=>(
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