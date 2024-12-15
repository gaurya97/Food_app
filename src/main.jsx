import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Product from "./Component/Product.jsx";
import {Solution} from "./Component/Solution.jsx";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import CartList from './Component/CartList.jsx';
import {MyCart} from './Component/MyCart.jsx';
import {
  // useQuery,
  // useMutation,
  // useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
const queryClient = new QueryClient()

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
  path:'/home',
  element:<CartList/>
  
    },
    {
      path:'/solution',
      element:<Solution/>
      
        },
        {
          path:'/cart/:id',
          element:<Product/>
          
            },
            {
              path:'/myCart',
              element:<MyCart/>
              
                }
  
  ]
  }
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={AppRouter}></RouterProvider>
    </QueryClientProvider>
      
  </StrictMode>,
)
