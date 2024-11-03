import React from 'react'
import Header from '@/components/Header'
import { Input } from "@/components/ui/input"
import carDetails from "@/Shared/carDetails.json"
import InputField from './Components/InputField'
import DropdownField from './Components/DropdownField'
import TextArea from './Components/TextArea'
import { Separator } from "@/components/ui/separator"
import features from '@/Shared/features.json'
// import { Checkbox } from 'primereact/checkbox';
import { Checkbox } from "@/components/ui/checkbox"

// import CheckboxFeild from './Components/CheckboxFeild'

function AddListing
() {
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
                                    <label className='text-sm font-semibold p-2'>{item?.label}{item.required && <span className='text-red-600'>*</span>}</label>
                                    {item.fieldType == 'text' || item.fieldType == 'number'? <InputField item={item}/>
                                        :item.fieldType == "dropdown"? <DropdownField item={item}/>
                                        :item.fieldType == "textarea"? <TextArea item={item}/>
                                        : null}
                                </div>
                            ))}
                        </div>
                    </div>



                    <Separator className='h-[2px] mt-16'/>

                    {/* Features List */}

                    <div>
                        <h2 className='font-medium text-xl my-6'>Features</h2>
                            
                        <div className='grid grid-cols-3 '>
                            {features.features.map((item,index)=>(

                                <div key={index} className='flex gap-2 items-center p-3'>
                                   <Checkbox /> <h2>{item.label}</h2>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Car images */}

            </form>
        </div>
    </div>
  )
}

export default AddListing
