import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import {NextUIProvider} from '@nextui-org/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import Contact from './contact';
import Profile from './Profile';
import AddListing from './add-listing';
import SearchByCategory from './search/[category]'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/contact',
    element:<Contact/> 
  },

  {
    path: '/profile',
    element: <Profile/>,
  },
  {
      path:'/add-listing',
      element: <AddListing/>
  },
  {
    path: '/search/:category',
    element:<SearchByCategory/>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>


    <NextUIProvider>

          <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">

          <RouterProvider router={router}/>
          </ClerkProvider>
      
    </NextUIProvider>
    
    
  </StrictMode>
)


