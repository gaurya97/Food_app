import React, { useEffect } from 'react'
import { useState } from 'react';
import UseCartsData from '../CustomeHooks/UseCartsData'
import {Cart,PromotedCarts} from './Cart'
import SearchBar from './SearchBar';
// import ShimmerList from './ShimmerList';
import ButtonTag from './ButtonTag';
{/* <ShimmerList/> */}
const CartList = () => {

const [RestList,SetRestList] =useState([]);
const Restaurants = UseCartsData(SetRestList);
const PromotedCartsWithLable =PromotedCarts(Cart);
    // SetRestList(Restaurants);


const [color1,setcolor1] = useState("8A2BE2")
const [color2,setcolor2] = useState('b3b3b3')

const FilterData =(e)=>{
  if(e==='Top Rated'){
    let FilterList = RestList.filter((e)=>(e.info.avgRating>4.2))
    console.log('FilterList',FilterList);
    SetRestList(FilterList);
  }
  else{
    SetRestList(Restaurants);
  }
}

const SearchRestaurant=(RestarantName)=>{
console.log(RestarantName);

    let SearchResult = RestList.filter((e)=>{
      return e.info.name.toLocaleLowerCase().includes(RestarantName.toLocaleLowerCase());
    })
   SearchResult.length>0 ? SetRestList(SearchResult):'';
    console.log(SearchResult);
    // console.log(RestList);
}

 







if(RestList?.length===0){
  if(color2 ==='#8A2BE2'){
    return <>
    <SearchBar/>
    <ButtonTag FilterDataFunction ={FilterData} color1={color1} color2 ={color2} setcolor1 ={setcolor1} setcolor2={setcolor2}/>
    <p className='w-full text-center py-2'>Not Found</p>
    </>
  }
    return 'loading'
   
}
else{
    return (
        <>
        {/* <SearchBar Searchfunction ={SearchRestaurant}  setcolor1 ={setcolor1} setcolor2={setcolor2} /> */}
        {/* <ButtonTag FilterDataFunction ={FilterData} color1={color1} color2 ={color2} setcolor1 ={setcolor1} setcolor2={setcolor2}/> */}
        <SearchBar/>
        <ButtonTag FilterDataFunction ={FilterData} color1={color1} color2 ={color2} setcolor1 ={setcolor1} setcolor2={setcolor2}/>
        <div className="flex md:flex-row gap-2 items-center flex-col flex-wrap w-[100%] h-auto">
            {
                RestList?.map((e)=>{
                    let card =e.info;
                    if(!card.veg){
                      return <PromotedCartsWithLable key={card.id} cart={card} />
                    }
                    return <Cart key={card.id} cart={card} />
                })
            }
        </div>
        </>
      )
}


}

export default CartList
