import React from 'react'
import { useState,useEffect } from 'react'
const UseCartsData = (SetRestList) => {
const [List,SetList]=useState([]);
const [Long,SetLong]=useState(72.88560) 

// 72.88560
const [Lat,SetLat]=useState(19.07480)
// 19.07480
 useEffect(()=>{
navigator.geolocation.getCurrentPosition((position)=>{
const {latitude,longitude}=position.coords;
SetLong(longitude)
SetLat(latitude);
},(error)=>{
console.log(error.message);
})
GetData();
 },[])

const GetData =async()=>{
const res = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${Lat}&lng=${Long}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
 const data =await res.json();
 console.log(data);
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
