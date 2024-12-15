import React,{useContext} from 'react'
import CityContext from '../ContextApi/CityContextApi.jsx'
import {
    useQuery,
    useMutation,
    useQueryClient,
} from '@tanstack/react-query'
export const UseReactQuerycartsData = () => {
    const Citydata =useContext(CityContext);
    const Getdata = async () => {
        const res = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${Citydata.latitude}&lng=${Citydata.longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
        const data = await res.json();
        console.log(data);
        let RestaurantsList;
        if(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants){
            RestaurantsList=data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        }
        else{
            RestaurantsList=data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        }
       
        return RestaurantsList;
    }

    const { isPending, isError, data:List, error }  = useQuery({ queryKey: ['cartData',Citydata.latitude,Citydata.longitude], queryFn: Getdata,staleTime:60000 })
    return {isPending, isError,List, error};  
}



