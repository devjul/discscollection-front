import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

import './index.css'

import RootLayout from './layouts/RootLayout'
import Bands from './pages/Bands'
import Band from './pages/Band'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { 
        index: true,
        element: <Bands /> 
      },
    ],
  },
  {
    path: '/band/:uuid',
    element: <RootLayout />,
    children: [
      { 
        index: true,
        element: <Band /> 
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
