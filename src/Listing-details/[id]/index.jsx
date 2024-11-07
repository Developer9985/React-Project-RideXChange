import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import HeaderDetail from '../components/HeaderDetail'
import { useParams } from 'react-router-dom'
import { CarImages, CarListing } from './../../../configs/schema';
import Service from '@/Shared/Service';
import {db} from './../../../configs'
import {eq} from 'drizzle-orm'
import ImageGallery from '../components/ImageGallery';
import Description from '../components/Description';
import Features from '../components/Features';
// import Pricing from '../components/Pricing';





function ListingDetail() {

    const {id} = useParams();
    console.log(id);

    const [carDetail , setCarDetail] = useState();

    useEffect(()=>{

        GetCarDetails();

    },[])

    const GetCarDetails = async()=>{

      const result = await db.select().from(CarListing)
      .innerJoin(CarImages,eq(CarListing.id,CarImages.CarListingId))
      .where(eq(CarListing.id,id));

      const resp = Service.FormatResult(result);
      setCarDetail(resp[0]);


    }

  return (
    <div>
        <Header/>

            <div className='p-10 absolute top-28 w-full mx-14'>
            {/* Header detail component */}
            <HeaderDetail carDetail={carDetail}/>
              
            </div>



            

            <div className='absolute top-[350px] grid grid-cols-1 md:grid-cols-3 w-full mt-10 gap-5 mx-14'>

              {/* left section */}

              <div className='md:col-span-2 '>
                      {/* image gallery */}
                      <ImageGallery carDetail={carDetail}/>

                      {/* Description */}

                      <Description carDetail={carDetail}/>

                      {/* features List */}

                      <Features features={carDetail?.features}/>
              </div>

              {/* right section */}
              <div className=''>

                {/* pricing */}

                {/* <Pricing carDetail={carDetail}/> */}



                {/* car Properties */}

                {/* image details */}
                    
              </div>

            </div>


            
    </div>
  )
}

export default ListingDetail