import React, { useEffect, useState } from 'react'
import {Button} from "@/components/ui/button";
import { Link } from 'react-router-dom'
// import { Tabs,Tab } from '@nextui-org/tabs'
// import { CarImages, CarListing } from 'configs/
// schema'
import { CarListing,CarImages } from './../../../configs/schema'
import { desc,eq } from 'drizzle-orm'
import {db} from './../../../configs'
// import { configs } from 'eslint-plugin-react'
import { useUser } from '@clerk/clerk-react'
import Service from '@/Shared/Service'
import CarItem from '@/components/CarItem'
import { FaTrash } from "react-icons/fa6";

function MyListing() {

    const {user}= useUser();

    const [carList, setCarList] = useState([]);

   
    useEffect(()=>{
        user&&GetUserCarListing();
    },[user])

    const GetUserCarListing= async()=>{
      const result =await db.select().from(CarListing)
      .leftJoin(CarImages,eq(CarListing.id,CarImages.CarListingId))
      .where(eq(CarListing.createdBy,user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(CarListing.id))

      const resp = Service.FormatResult(result);

      console.log(resp);
      setCarList(resp); 
    }

    
  
  return (
    <div>
        
        <div className='flex justify-between'>
                <h2 className='font-bold text-4xl mx-5'>My Listing</h2>
                <Link to={'/add-listing'}>
                    <Button className='bg-black text-white'>+ Add New Listing</Button>
                </Link>
                
            </div>

          <div className='flex flex-row gap-6 mt-6 mx-5 p-6'>
                {carList.map((item,index)=> (
                  <div key={index}>
                      <CarItem car={item}/>
                      <div className='flex gap-3 mt-2'>
                        <Link to={'/add-listing?mode=edit&id='+item?.id} className='w-full'>
                        <Button className='bg-black text-white w-[210px] rounded-xl'>Edit</Button>
                        </Link>
                        
                        <Button className='bg-black text-red-500 rounded-xl w-20'><FaTrash className='size-5' /></Button>
                      </div>
                  </div>
                ))}
          </div>

    </div>
  )
}

export default MyListing;