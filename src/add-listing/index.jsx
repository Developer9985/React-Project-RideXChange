import React, { useState,useEffect } from 'react'
import Header from '@/components/Header'
import { Input } from "@/components/ui/input"
import carDetails from "@/Shared/carDetails.json"
import InputField from './Components/InputField'
import DropdownField from './Components/DropdownField'
import TextAreaField from './Components/TextAreaField'
import { Separator } from "@/components/ui/separator"
import features from '@/Shared/features.json'
// import { Checkbox } from 'primereact/checkbox';
// import { Checkbox } from "@/components/ui/checkbox"
import {Checkbox} from "@nextui-org/checkbox";
import {db} from './../../configs';
import { Button } from '@nextui-org/react'
import { CarImages, CarListing } from './../../configs/schema'
import IconField from './Components/IconField'
import UploadImages from './Components/UploadImages'
import { LuLoader2 } from "react-icons/lu";
import { useNavigate, useSearchParams } from 'react-router-dom'
import {useUser} from '@clerk/clerk-react'
// import moments from 'moments'
// import CheckboxFeild from './Components/CheckboxFeild'
import { format } from 'date-fns';
import { desc,eq } from 'drizzle-orm'
import Service from '@/Shared/Service'
  

function AddListing() {



    const [formData, setFormData] = useState([]);
    const [featureData, setFeatureData] = useState([]);
    const [triggerUploadImages,setTriggerUploadImages] = useState();
    const [searchParams] = useSearchParams();
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();
    const {user} = useUser();
    const [carInfo,setCarInfo] = useState();
    
    const mode=searchParams.get('mode'); 
    const recordId=searchParams.get('id');


    useEffect(()=>{

        if(mode == 'edit'){
                GetListingDetails();
        }


    },[]);

    const GetListingDetails= async()=>{
        const result = await db.select().from(CarListing)
        .innerJoin(CarImages,eq(CarListing.id,CarImages.CarListingId))
        .where(eq(CarListing.id,recordId))

        const resp=Service.FormatResult(result)
        // console.log(resp);
        setCarInfo(resp[0])
        setFormData(resp[0])
        setFeatureData(resp[0].features)
        
    }
   


    

    const handleInputChange = (name,value)=>{
            setFormData((prevData)=>({
                ...prevData,
                [name] : value
            }))


            console.log(formData);
            
    }


    const handleFeatureChange = (name,value) =>{

        setFeatureData((prevData)=>({

            ...prevData,
            [name]:value
        }))

        console.log(featureData);
        
    }

    useEffect(() => {
        console.log("Updated formData:", formData);
      }, [formData]);
    useEffect(() => {
        console.log("Updated formFeatureData:", featureData);
      }, [featureData]);


      const onsubmit= async(e) =>{
        setLoader(true)
        e.preventDefault();
        console.log(formData);

        const formattedFeatures = JSON.stringify(featureData);
        
        if(mode=='edit'){

            const result = await db.update(CarListing).set({
                ...formData,
                features:formattedFeatures,

                createdBy:user?.primaryEmailAddress?.emailAddress,
                postedOn:format(new Date(), 'dd/MM/yyyy'),
            }).where(eq(CarListing.id,recordId)).returning({id:CarListing.id});

            console.log(result);
            setLoader(false);
            navigate('/profile');
            




        }else{


            
            try{
    
    
    
                const result = await db.insert(CarListing).values({
    
                    ...formData,
                    features:formattedFeatures,
    
                    createdBy:user?.primaryEmailAddress?.emailAddress,
                    postedOn:format(new Date(), 'dd/MM/yyyy'),
                },
    
            
            
            ).returning({id:CarListing.id});
    
                if(result){
    
                    console.log("Data saved")
                    setTriggerUploadImages(result[0]?.id);
                    setLoader(false);
    
                }
    
            }catch(e){
                console.log("Error",e);
                
            }
            
        }
        
       
      }
      

     

  return (
    <div>
            <Header/>

        <div className='absolute top-24 left-40 px-10 md:px-20 my-10 w-[1600px] h-[1400px] bg-white'>
            <h2 className='font-bold text-4xl'>Add New Listing</h2>

            <form action="" className='p-10 border rounded-xl mt-10'>
                    {/* Car Details */}

                    <div>
                        <h2 className='font-medium text-2xl mb-6'>Car Details</h2>
                        <div className='grid grid-cols-2 gap-6'>
                            {carDetails.carDetails.map((item,index)=>(
                                <div key={index}>
                                    <label className='text-sm font-semibold p-2 flex gap-2 items-center'>

                                            <IconField icon={item?.icon}/>


                                        {item?.label}{item.required && <span className='text-red-600'>*</span>}</label>
                                    {item.fieldType == 'text' || item.fieldType == 'number'? 
                                        <InputField item={item} handleInputChange={handleInputChange} carInfo={carInfo} />
                                        :item.fieldType == "dropdown"? <DropdownField item={item} handleInputChange={handleInputChange} carInfo={carInfo}/>
                                        :item.fieldType == "textarea"? <TextAreaField item={item} handleInputChange={handleInputChange} carInfo={carInfo}/>
                                        : null}
                                </div>
                            ))}
                        </div>
                    </div>



                    <Separator className='h-[2px] mt-16'/>

                    {/* Features List */}

                    <div>
                        <h2 className='font-medium text-2xl mb-6 mt-4'>Features</h2>
                            
                        <div className='grid grid-cols-3 '>
                            {features.features.map((item,index)=>(

                                <div key={index} className='flex gap-2 items-center p-3'>
                                   <Checkbox onValueChange={(value)=>handleFeatureChange(item.name,value)
                                   }  isSelected={featureData?.[item.name]} /> <h2>{item.label}</h2>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Separator className='h-[2px] mt-16'/>

                    {/* Car images */}

                    <UploadImages triggerUploadImages={triggerUploadImages} 
                    setLoader={(v) => {setLoader(v);navigate('/profile')}}/>

                    

                    <div className='mt-16 w-full h-[50px] flex justify-center text-white'>
                        <Button 
                        isDisabled={loader}
                        className='bg-black text-white size-32' onClick={(e)=>onsubmit(e)}>
                            {!loader?'Submit':<LuLoader2 className='animate-spin size-6'/>}
                            </Button>
                    </div>

            </form>
            
            
        </div>
    </div>
  )
}

export default AddListing
