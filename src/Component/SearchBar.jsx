import React, { useContext, useEffect, useState,useRef } from "react";
import data from '../CustomeHooks/cities.json'
import { IoCompassOutline } from "react-icons/io5";
import CityContext from '../ContextApi/CityContextApi.jsx'
import UseDebounce from "../CustomeHooks/UseDebounce.jsx";
const SearchBar = () => {
const {setLatitude,setLongitude} = useContext(CityContext);
const [cityData,SetcityData] =useState(null)
const [onBlur,setOnBlur] =useState(false)
const [input,setInput] =useState('')
// console.log(cityData);
// console.log(data);
const Debounce =UseDebounce();
// console.log('UseDebounce recall');
const HandlleSelectedCity =(city)=>{
setLatitude(city.latitude)
setLongitude(city.longitude)
  setOnBlur(true)
  setInput(city.city)
}

const HandleChangeLogic =(el)=>{
  setOnBlur(false)
console.log(el.target.value);
const cities = el.target.value ? data.filter((e)=>e.city.toLowerCase().includes(el?.target?.value.toLowerCase())):null;
SetcityData(cities);
}

const HandleChange=(el)=>{
setInput(el.target.value)
 Debounce(HandleChangeLogic,4000,el)
// [{city:"Search For Your City"}]
}


const HandleBlur =(e)=>{
  e.preventDefault()
  e.stopPropagation()
  setOnBlur(true);
  console.log('onBlur',onBlur)
}


  return (
    <div className="flex justify-center items-center relative flex-col px-4 my-3">
    {/* <!-- Container for the search bar --> */}
    <div className="relative w-full max-w-2xl">
    <input 
    onChange={HandleChange}
    value={input}
        type="text" 
        placeholder="Search Location"
        className="search-input outline-none w-full px-4 py-2 rounded-full bg-white border border-gray-300 shadow-sm text-gray-700 " 
      />
      {/* <!-- Search icon --> */}
      <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 17a6 6 0 100-12 6 6 0 000 12zm8 0l-3.5-3.5"></path>
      </svg>
    </div>
    {cityData && <div tabIndex={'0'} onBlur={HandleBlur} className={` focus:outline-none bg-white  shadow-md justify-center w-full md:w-6/12 flex-col max-h-60 z-50 absolute top-[100%] scrollbar-none overflow-scroll p-5 ${onBlur?'hidden':'flex'} `}>
    {cityData?.length===0?<li key={'usedefault'} className="list-none text-center mb-2 border-red-300 " > No City Found</li>: cityData?.map((e)=>{
      console.log()
      const split =e.city.toLowerCase().split(input.toLocaleLowerCase())
      const str =split.reduce((acc,element,index)=>{
        if(index>0){
          acc.push(input.toLocaleLowerCase())
        }
        acc.push(element);
        return acc;
      },[])
     
       return <li key={e.id} onClick={()=>HandlleSelectedCity(e)} className="list-none  text-start border-red-300 mt-1 mb-1 mx-2 " >{str.map((e)=>{
        return <span className={e===input.toLocaleLowerCase()?'font-bold text-green-500':""}>{e}</span>
       })}</li>
    })}
    </div>
    
    
    }
    
  </div>
  )
}

export default SearchBar
