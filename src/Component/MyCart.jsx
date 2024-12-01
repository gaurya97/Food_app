import React from 'react'
import { useSelector } from "react-redux";
import AcoordianBody from "./AcoordianBody";
export const MyCart =()=>{

    
const cartItems =useSelector((store)=>store.cart.items);
 if(!cartItems.length){
    return (<>
        <div className="flex flex-col justify-center items-center w-[95%] md:w-[50%] m-auto my-1 p-auto h-auto  bg-gray-50 overflow-hidden rounded-b-lg-body">
         <h3> Your Cart Is Empty! Add Items To The Cart</h3>
        </div>
        </>)
 }else{
    return (<>
        <div className="flex flex-col justify-center items-center w-[95%] md:w-[50%] m-auto my-1 p-auto h-auto  bg-gray-50 overflow-hidden rounded-b-lg-body">
         {
             cartItems?.map((e)=>{
                // name,price,desc,rating,count
              console.log(e);
            //   console.log(e?.localState);
    
               return <AcoordianBody key={e?.item.id} item={e?.item} count={e?.localState} />
              })
         }
        </div>
        </>)
 }

    
}