import { SignInButton,UserButton,useUser } from '@clerk/clerk-react'
import React from 'react'
import Header from './components/Header'
import { Button } from './components/ui/button'
import Hero from './components/Hero'
import Category from './components/Category'
import MostSearch from './components/MostSearch'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'
function Home() {

    const  {isSignedIn} = useUser();
  return (
    <div>
        {/* Header */}
        <Header/>

        {/* Hero section */}

        <Hero/>

        {/* Category */}

        <Category/>

        {/* Most Searched Cars */}

        <MostSearch/>

        {/* Info Section */}

        <InfoSection/>

        {/* Footer */}

        <Footer/>

        
        
        
     



        

       
        
    </div>
    
  )
}

export default Home