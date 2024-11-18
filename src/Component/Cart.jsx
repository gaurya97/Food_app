import React from 'react'
import { Link } from 'react-router-dom';
// sm:max-w-xs md:max-w-xs lg:max-w-lg xl:max-w-xl
import image from "../assets/Images/image.png";
export const Cart = ({cart}) => {
  return (
    <div >
  <div className="md:max-w-60 w-72 md:h-[425px] max-h-[425px] my-2 bg-white rounded-lg shadow-md overflow-hidden">

<div className="relative">
    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cart.cloudinaryImageId}`} className="w-full h-48 object-cover" alt="Food Image" />
    <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-full">{cart.avgRatingString} ⭐</div>
</div>


<div className="p-4 gap-3">
 
    <h2 className="text-lg font-semibold text-gray-800">{cart.name}</h2>
    
   
    <p className="text-gray-600 text-sm mt-2">{cart.cuisines.join(", ")}</p>

  
    <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold text-green-600">{cart.sla.slaString}</span>
        <Link className='no-underline' to={`/cart/${cart.id}`}><button id="add-to-cart" className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">View</button></Link>
    </div>
</div>

</div>
</div>
  )
}

export const PromotedCarts =(Cart)=>{
  return ({cart})=>{
    return(
    <div className='relative md:w-60  w-72 mx-auto  bg-white'>
      <b className='absolute text-center bg-green-500 text-[#f2f2f2] top-[1.5%] right-0 z-10 rounded-sm w-28 h-8'>Promoted</b>
     <Cart cart ={cart} />
    </div>
    )
  } 
}