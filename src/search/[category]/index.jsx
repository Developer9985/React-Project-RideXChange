import Header from '@/components/Header'
import Search from '@/components/Search'
import { CarImages, CarListing } from './../../../configs/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {db} from './../../../configs';
import Service from '@/Shared/Service';
import CarItem from '@/components/CarItem';
import Category from '@/components/Category';
function SearchByCategory() {

    const {category} = useParams();
    console.log(category);

    const [carList, setCarList] = useState([]);

    useEffect(()=>{
            GetCarList();
    },[])

    const GetCarList= async()=>{

        const result = await db.select().from(CarListing)
        .innerJoin(CarImages,eq(CarListing.id,CarImages.CarListingId))
        .where(eq(CarListing.category,category))
        const resp = Service.FormatResult(result);
        setCarList(resp);


    }



  return (
    <div className='w-full'>
        <Header/>


        <div className='bg-black p-5 absolute top-20 w-full h-48 flex justify-center items-center'>
        <Search />
        </div>
        <div>
            <h2 className='font-bold text-4xl absolute top-[300px] p-6 w-[1840px] mx-10 border rounded-[35px]'>{category}</h2>
        </div>

        <div className='absolute mx-20 flex justify-start gap-7'>
            {carList.map((item,index)=>(

                <div key={index}>
                    <CarItem car={item}/>
                </div>
            ))}
        </div>

        
            
        
    </div>
  )
}

export default SearchByCategory