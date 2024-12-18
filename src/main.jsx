import { StrictMode,lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'semantic-ui-css/semantic.min.css';
import App from './App.jsx'
// import Product from "./Component/Product.jsx";
import {Solution} from "./Component/Solution.jsx";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import CartList from './Component/CartList.jsx';
import {MyCart} from './Component/MyCart.jsx';
import { Loader } from 'semantic-ui-react'
import Form from './Component/Form.jsx';
import {
  // useQuery,
  // useMutation,
  // useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Suspense } from 'react';

const Product =lazy(()=>import("./Component/Product.jsx"))
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
      element:<Form/>
      
        },
        {
          path:'/cart/:id',
          element: <Suspense fallback={ <div class="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-white bg-opacity-80 z-50">
            <Loader active ={true} inline="centered" size='medium' color='blue'>
              Loading...
              </Loader>
        </div>} ><Product/></Suspense>
          
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
