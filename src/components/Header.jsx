import {UserButton, useUser,SignInButton} from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button';


function Header() {

    const {user, isSignedIn} = useUser();
    console.log(isSignedIn);
  return (
    <div className='absolute top-0 left-0 flex justify-between items-center shadow-sm p-5 w-full'>
        <img src="" alt="" width={150} height={100} />

        <ul className='hidden md:flex gap-16 font-medium'>
            <li>Home</li>
            <li>Search</li>
            <li>New</li>
            <li>Preowned</li>
            
           
        </ul>

        
        
        {isSignedIn? 

           <div className='flex items-center gap-5' >
                <UserButton/>
                <Button>Submit Listing</Button>
                
            </div>
            :
            // <Button>Submit Listing</Button>
            <SignInButton mode='modal'/>
            
        
    
        }

       
   
    </div>
  );
}

export default Header