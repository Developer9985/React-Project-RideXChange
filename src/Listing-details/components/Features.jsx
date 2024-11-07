import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

function Features({features}) {


    if (!features || Object.keys(features).length === 0) {
        // Display a message or loader if features is not available yet
        return <div className="mx-10 p-5">Loading features...</div>;
      }

    console.log(features);
    
  return (
    <div>
        <div className='w-[1000px]   bg-[#dfecf594] mx-10 p-5 rounded-3xl shadow-md'>
            <h2 className='font-bold text-3xl'>Features</h2>

    <div className='grid grid-cols-3 gap-4 mt-4'> {/* Add grid styling here */}
          {Object.entries(features).map(([feature, value]) => (
            <div key={feature} className='flex items-center space-x-2'> {/* Add key prop here */}
              <FaCheckCircle className='text-[#22c55e]' />
              <h2>{feature}</h2>
            </div>
          ))}
    </div>

            
        </div>
    </div>
  )
}

export default Features