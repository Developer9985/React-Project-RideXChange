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

import Profile from './Profile';
import AddListing from './add-listing';
import SearchByCategory from './search/[category]'
import ListingDetail from './Listing-details/[id]'
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
  },
  {
    path:'/listing-details/:id',
    element:<ListingDetail/>
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


