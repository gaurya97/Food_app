import React, { useEffect, useState } from "react";
import data from '../CustomeHooks/cities.json'
import { IoCompassOutline } from "react-icons/io5";
const SearchBar = () => {
 
const [cityData,SetcityData] =useState(null)
console.log(cityData);
console.log(data);
const HandleChange=(el)=>{
console.log(el.target.value);
const cities = el.target.value ? data.filter((e)=>e.city.toLowerCase().includes(el?.target?.value.toLowerCase())):[{city:"Search For Your City"}];
SetcityData(cities);

}

  return (
    <div className="flex justify-center relative flex-col px-4 my-3">
    {/* <!-- Container for the search bar --> */}
    <div className="relative w-full max-w-2xl">
    <input 
    onChange={HandleChange}
        type="text" 
        placeholder="Search Location"
        className="search-input outline-none w-full px-4 py-2 rounded-full bg-white border border-gray-300 shadow-sm text-gray-700 " 
      />
      {/* <!-- Search icon --> */}
      <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 17a6 6 0 100-12 6 6 0 000 12zm8 0l-3.5-3.5"></path>
      </svg>
    </div>
    <div className="flex bg-white border border-gray-300 shadow-md justify-center w-full flex-col max-h-60 z-10 absolute top-[100%] overflow-scroll p-2">
    {cityData?.length===0?<li className="list-none text-center mb-2 border-red-300 " > No City Found</li>: cityData?.map((e)=>{
       return <li className="list-none border-red-300  mb-2 " >{e.city}</li>
    })}
    </div>
  </div>
  )
}

export default SearchBar
