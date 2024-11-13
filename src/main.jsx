import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Product from "./Component/Product.jsx";
import {Solution} from "./Component/Solution.jsx";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import CartList from './Component/CartList.jsx';

const AppRouter =createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<CartList/>
        
          },

      {
  path:'/product',
  element:<Product/>
  
    },
    {
      path:'/solution',
      element:<Solution/>
      
        }
  
  ]
  }
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={AppRouter}></RouterProvider>
  </StrictMode>,
)
