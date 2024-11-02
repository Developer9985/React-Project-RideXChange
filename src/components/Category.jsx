import React from 'react'
import Data from "@/Shared/Data";
function Category() {
  return (
    <div className='absolute top-[81%] mt-40 bg-white w-full h-[200px]'>
        <h2 className='font-bold text-center mb-6 text-[30px]'>Browse By Type</h2>

        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20 ml-35'>
            {Data.Category.map((cat,index)=> (
                <div className='border rounded-xl p-3 items-center flex flex-col hover:scale-110 transition-all cursor-pointer shadow-md'>
                     <img src={cat.icon} width={35} height={35} />
                     <h2 className='font-medium mt-2'>{cat.name}</h2>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Category;