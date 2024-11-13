import React from 'react'
import image from "../assets/Images/image.png";
const AcoordianBody = () => {
  return (
    <div>
      <div className="p-4 max-w-screen-lg mx-auto">
    {/* <!-- Header Section --> */}
    <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold">Pizza Hut</h1>
        <span className="text-sm text-gray-500">35-40 mins</span>
    </div>

    {/* <!-- Menu Items Grid --> */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* <!-- My Box Veg --> */}
        <div className="border grid place-items-center rounded-lg p-4 shadow-md">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold">My Box - Veg</h2>
                <span className="text-green-500 mx-5 font-semibold">₹249</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">Serves 1 | 1 personal veg pizza, 2 pc garlic bread & 1 Pepsi PET</p>
            <div className="flex items-center mb-2">
                <span className="text-sm text-green-600">★ 4.3</span>
                <span className="ml-2 text-sm text-gray-500">(33)</span>
            </div>
            <img src={image} className="w-full h-32 object-cover rounded-lg mb-4" alt="logo" />
            <button className="bg-green-500 text-white w-3/5 py-2 my-2 rounded-lg hover:bg-green-600">Add</button>
        </div>

        {/* <!-- Hut Treat Meal for 2 - Veg --> */}
        <div className="border grid place-items-center rounded-lg p-4 shadow-md">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold">Hut Treat Meal for 2 - Veg</h2>
                <span className="text-green-500 mx-5 font-semibold">₹529</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">Serves 2 | 1 medium veg pizza...</p>
            <div className="flex items-center mb-2">
                <span className="text-sm text-green-600">★ 4.4</span>
                <span className="ml-2 text-sm text-gray-500">(8)</span>
            </div>
            <img src={image} className="w-full h-32 object-cover rounded-lg mb-4" alt="logo" />
            <button className="bg-green-500 text-white w-3/5 py-2 my-2 rounded-lg hover:bg-green-600">Add</button>
        </div>

        {/* <!-- Hut Treat Meal for 4 - Veg --> */}
        <div className="border grid place-items-center rounded-lg p-4 shadow-md">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold">Hut Treat Meal for 4 - Veg</h2>
                <span className="text-green-500 mx-5 font-semibold">₹859</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">Serves 4 | Super saver combo...</p>
            <div className="flex items-center mb-2">
                <span className="text-sm text-green-600">★ 4.3</span>
                <span className="ml-2 text-sm text-gray-500">(3)</span>
            </div>
            <img src={image} className="w-full h-32 object-cover rounded-lg mb-4" alt="logo" />
            <button className="bg-green-500 text-white w-3/5 py-2 my-2 rounded-lg hover:bg-green-600">Add</button>
        </div>
    </div>
</div>
    </div>
  )
}

export default AcoordianBody
