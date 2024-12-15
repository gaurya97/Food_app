import { useParams } from "react-router-dom";
import { Accordian } from "./Accordian";
import { useContext, useEffect, useState } from "react";
import CityContext from "../ContextApi/CityContextApi";
const Product =()=>{
  const {id} =useParams();
  const {latitude,longitude} =useContext(CityContext)
  
const [product,setProduct] =useState(null);
const [productHead,setProductHead] =useState(null);
useEffect(()=>{
  GetProductData(id);
},[])

const GetProductData =async(id)=>{
const res =await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${latitude}&lng=${longitude}&restaurantId=${id}`)
const data =await res.json();
console.log(data.data.cards);
setProductHead(data.data.cards[2]?.card?.card?.info)
setProduct(data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

}


  console.log(id);
    const [showId, SetShowId] = useState(null);
  
    return (
      <div className="max-w-full max-h-max">
        
        <div className="max-w-screen-sm  mx-auto bg-white shadow-md rounded-lg p-4">
  <h2 className="text-xl font-bold mb-1">{productHead?.name}</h2>
  <div className="text-sm text-gray-700 flex items-center mb-2">
    <span className="text-green-600 font-semibold flex items-center">
      <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.675a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.122 2.265a1 1 0 00-.364 1.118l1.2 3.675c.3.921-.755 1.688-1.54 1.118l-3.122-2.265a1 1 0 00-1.175 0L4.64 16.678c-.784.57-1.838-.197-1.54-1.118l1.2-3.675a1 1 0 00-.364-1.118L1.814 9.402c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.675z"/>
      </svg>
      {productHead?.avgRatingString}
    </span>
    <span className="ml-2">({productHead?.totalRatingsString})</span>
    <span className="ml-2 text-gray-500">• {productHead?.costForTwoMessage
    }</span>
  </div>
  <a href="#" className="text-orange-500 font-medium mb-4 block">{productHead?.cuisines?.concat(" ")}</a>
  <div className="flex items-center justify-between text-sm text-gray-600">
    <div>
      <b className="font-medium">Outlet</b>
      <p className="text-gray-500">{productHead?.locality}</p>
    </div>
    <div>
      <b className="font-medium">{productHead?.sla?.minDeliveryTime}-{productHead?.sla?.maxDeliveryTime} mins</b>
    </div>
  </div>
</div>
{product?.map((e,index) => {
         if(e.card.card[`@type`]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"){
          // console.log(e.card.card.title)
          // console.log(e.card.card.itemCards
          // )

  return (
     <Accordian
              key={e.card.card.title}
              body={e.card.card.itemCards}
              head={e.card.card.title}
              id={index}
              showId={showId}
              SetShowId={SetShowId}
            />
           
          );

         }

        

        })}
      </div>
    );
}

export default Product;