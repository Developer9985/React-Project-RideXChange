import React from 'react'
import Header from '@/components/Header'
import { Input } from "@/components/ui/input"
import carDetails from "@/Shared/carDetails.json"
import InputField from './Components/InputField'
import DropdownField from './Components/DropdownField'
function AddListing
() {
  return (
    <div>
            <Header/>

        <div className='absolute top-24 px-10 md:px-20 my-10 w-full'>
            <h2 className='font-bold text-4xl'>Add New Listing</h2>

            <form action="" className='p-10 border rounded-xl mt-10'>
                    {/* Car Details */}

                    <div>
                        <h2 className='font-medium text-2xl mb-6'>Car Details</h2>
                        <div className='grid grid-cols-2 gap-6'>
                            {carDetails.carDetails.map((item,index)=>(
                                <div key={index}>
                                    <label className='text-sm font-semibold'>{item?.label}{item.required && <span className='text-red-600'>*</span>}</label>
                                    {item.fieldType == 'text' || item.fieldType == 'number'? <InputField item={item}/>
                                        :item.fieldType == "dropdown"? <DropdownField item={item}/>
                                        : null}
                                </div>
                            ))}
                        </div>
                    </div>




                    {/* Features List */}


                    {/* Car images */}

            </form>
        </div>
    </div>
  )
}

export default AddListing
