import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
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


function MyListing() {

    const {user}= useUser();

    


    useEffect(()=>{
        user&&GetUserCarListing();
    },[user])

    const GetUserCarListing= async()=>{
      const result =await db.select().from(CarListing)
      .leftJoin(CarImages,eq(CarListing.id,CarImages.CarListingId))
      .where(eq(CarListing.createdBy,user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(CarListing.id))

      const response = Service.FormatResult(result);

      console.log(response);
    }

    
    



  return (
    <div>
        
        <div className='flex justify-between'>
                <h2 className='font-bold text-4xl'>My Listing</h2>
                <Link to={'/add-listing'}>
                    <Button>+ Add New Listing</Button>
                </Link>
                
            </div>

    </div>
  )
}

export default MyListing;