import IconField from '@/add-listing/Components/IconField'
import CarSpecification from '@/Shared/CarSpecification'
import React from 'react'

function Specifiction({carDetail}) {
  return (
    <div className='bg-[#dfecf594] rounded-3xl w-[500px] h-[1030px] shadow-lg absolute top-[350px]'>
        <h2 className='font-bold text-3xl p-3 mx-6 my-10'>Specification</h2>
        
        <div className='mx-[20px] mt-6'>
        
        {CarSpecification?.map((item, index) => (
          <div key={index} className='flex items-center justify-between '>
            
            <h2 className='font-semibold text-lg flex gap-8 p-5'>    <IconField icon={item.icon} />{item.label}</h2>
            <h2 className='font-medium '>{carDetail?.[item?.name]}</h2>
          </div>
        ))}





            {/* {carDetail?.length>0&&carDetail.map((carItem,index)=>(

                <div>
                    <IconField icon={CarSpecification[index].icon}/>
                </div>
            ))} */}

        </div>


    </div>
  )
}

export default Specifiction