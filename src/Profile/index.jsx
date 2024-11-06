import React from 'react'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import MyListing from './components/MyListing'
import {Tabs, Tab} from "@nextui-org/tabs";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
function Profile() {

  const variant = "solid"; // Set variant to "solid"
  const color = "default"; // Set color to "default"
  const size = "lg"; // Set size to "large"
  const radius  = "lg"; // Set radius to "medium"




  return (
    <div>

        <Header/>

        {/* <div className='absolute top-24 px-10 md:px-20 my-4 w-full '> */}
           

    <div className=" gap-5 w-full mt-12 absolute top-24 left-8">
      
      
      
        <Tabs variant={variant} color={color} size={size}  aria-label="Tabs variants "  radius={radius}   >
         <Tab  key="photos"  title="MyListing">

                  <Card className='w-[1800px]  mt-3'>
                    <CardBody ><div> <MyListing/> </div></CardBody>
                  </Card>

          </Tab> 
          <Tab Tab key="music" title="Inbox">

          <Card className='w-[1800px] mt-3'>
                    <CardBody ><div>  </div></CardBody>
                  </Card>

          </Tab>
          <Tab Tab key="videos" title="Profile">
          <Card className='w-[1800px] mt-3'>
                    <CardBody ><div>  </div></CardBody>
                  </Card>
          </Tab>
        </Tabs>
      
    </div>






          
   
        </div>

    // </div>
  )
}

export default Profile