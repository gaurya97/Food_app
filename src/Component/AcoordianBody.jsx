import React from 'react'
import image from "../assets/Images/image.png";
import { MdCurrencyRupee } from "react-icons/md";
const AcoordianBody = ({imageId,name,price,desc,rating,count}) => {
  return (
    <div>
      <div className="p-4 max-w-screen-lg mx-auto">
    {/* <!-- Header Section --> */}
    

    {/* <!-- Menu Items Grid --> */}
    {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> */}
        {/* <!-- My Box Veg --> */}
        <div className="border grid place-items-center rounded-lg p-4 shadow-md">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold mx-4">{name}</h2>
                <span><MdCurrencyRupee /></span>
                <span className="text-green-500  font-semibold">{price}</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{desc}</p>
            <div className="flex items-center mb-2">
                <span className="text-sm text-green-600">★ {rating}</span>
                <span className="ml-2 text-sm text-gray-500">({count?count:"No Rating"})</span>
            </div>
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`} className="w-full h-32 object-cover rounded-lg mb-4" alt="logo" />
            <button className="bg-green-500 text-white w-3/5 py-2 my-2 rounded-lg hover:bg-green-600">Add</button>
        </div>

    {/* </div> */}
</div>
    </div>
  )
}

export default AcoordianBody
