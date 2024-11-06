import {UserButton, useUser,SignInButton} from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

function Header() {

    const {user, isSignedIn} = useUser();
    console.log(isSignedIn);
  return (
    <div className='absolute top-0 left-0 flex justify-between items-center shadow-sm p-5 w-full h-20'>
        <img src="" alt="" width={150} height={100} />

        <ul className='hidden md:flex gap-16'>

            <Link to={'/'}>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</li>
            </Link>   
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Search</li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>New</li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Preowned</li>
        </ul>

        
        
        {isSignedIn? 

           <div className='flex items-center gap-5' >
                <UserButton/>
                <Link to={'/profile'}>
                  <Button>Submit Listing</Button>
                </Link>
                
                
            </div>
            :
            // <Button>Submit Listing</Button>
            <SignInButton mode='modal'/>
            
        
    
        }

       
   
    </div>
  );
}

export default Header