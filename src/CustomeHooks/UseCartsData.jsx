import React from 'react'
import { useState,useEffect,useContext } from 'react'
import CityContext from '../ContextApi/CityContextApi.jsx'
const UseCartsData = (SetRestList) => {
const [List,SetList]=useState([]);
// const [Long,SetLong]=useState(72.88560) 
const Citydata =useContext(CityContext);
console.log('Citydata',Citydata);
// 72.88560

// 19.07480
 useEffect(()=>{

        GetData();
    

 },[Citydata.latitude,Citydata.longitude])

const GetData =async()=>{
const res = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${Citydata.latitude}&lng=${Citydata.longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
 const data =await res.json();
//  console.log(data);
 let RestaurantsList;
if(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants){
    RestaurantsList=data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
}
else{
    RestaurantsList=data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
}

 ;
console.log(RestaurantsList);
if(SetRestList){
    SetRestList(RestaurantsList);
}
 SetList(RestaurantsList);
}
return List;
}

export default UseCartsData
