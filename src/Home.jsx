import { SignInButton,UserButton,useUser } from '@clerk/clerk-react'
import React from 'react'
import Header from './components/Header'
import { Button } from './components/ui/button'
function Home() {

    const  {isSignedIn} = useUser();
  return (
    <div>
        {/* Header */}
        <Header/>

        
        
        
     



        

       
        
    </div>
    
  )
}

export default Home