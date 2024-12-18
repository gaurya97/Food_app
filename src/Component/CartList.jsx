import React, { useEffect } from 'react'
import 'semantic-ui-css/semantic.min.css';
import { useState } from 'react';
import UseCartsData from '../CustomeHooks/UseCartsData'
import {UseReactQuerycartsData} from '../CustomeHooks/UseReactQuerycartsData'
import {Cart,PromotedCarts} from './Cart'
import SearchBar from './SearchBar';
import ButtonTag from './ButtonTag';
import { Loader } from 'semantic-ui-react'
{/* <ShimmerList/> */}
const CartList = () => {
const [RestList ,SetRestList] =useState([]);
const {isPending, isError,error,data:List} = UseReactQuerycartsData();
useEffect(()=>{
SetRestList(List);
},[List])

console.log('RestList',RestList);
console.log('isPending',isPending);
console.log('isError',isError);
const PromotedCartsWithLable =PromotedCarts(Cart);
const [color1,setcolor1] = useState("8A2BE2")
const [color2,setcolor2] = useState('b3b3b3')
const FilterData =(e)=>{
  if(e==='Top Rated'){
    let FilterList = RestList.filter((e)=>(e.info.avgRating>4.2))
    console.log('FilterList',FilterList);
    // setRestList(FilterList);
  }
  else{
    // setRestList(List);
  }
}

const SearchRestaurant=(RestarantName)=>{
console.log(RestarantName);

    let SearchResult = RestList.filter((e)=>{
      return e.info.name.toLocaleLowerCase().includes(RestarantName.toLocaleLowerCase());
    })
   SearchResult.length>0 ? setRestList(SearchResult):'';
    // console.log(SearchResult);
    // console.log(RestList);
}

 






// RestList?.length===0
if(isPending){
  // if(color2 ==='#8A2BE2'){
  //   return <>
  //   <SearchBar/>
  //   <ButtonTag FilterDataFunction ={FilterData} color1={color1} color2 ={color2} setcolor1 ={setcolor1} setcolor2={setcolor2}/>
  //   <p className='w-full text-center py-2'>Not Found</p>
  //   </>
  // }
    return (<>
    <div class="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-white bg-opacity-80 z-50">
    <Loader active ={true} inline="centered" size='medium' color='blue'>
      Loading...
      </Loader>
</div>
 
    </>)
   
}
else if(isError){
  return <>
  <SearchBar/>
  <ButtonTag FilterDataFunction ={FilterData} color1={color1} color2 ={color2} setcolor1 ={setcolor1} setcolor2={setcolor2}/>
  <p className='w-full text-center py-2'>Not Found</p>
  </>
}
else{
    return (
        <>
        {/* <SearchBar Searchfunction ={SearchRestaurant}  setcolor1 ={setcolor1} setcolor2={setcolor2} /> */}
        {/* <ButtonTag FilterDataFunction ={FilterData} color1={color1} color2 ={color2} setcolor1 ={setcolor1} setcolor2={setcolor2}/> */}
        <SearchBar/>
        <ButtonTag FilterDataFunction ={FilterData} color1={color1} color2 ={color2} setcolor1 ={setcolor1} setcolor2={setcolor2}/>
        <div className="flex scrollbar-none md:flex-row gap-2 items-center flex-col flex-wrap w-[100%] h-auto">
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
