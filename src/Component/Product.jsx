import { useParams } from "react-router-dom";
import { Accordian } from "./Accordian";
import { useEffect, useState } from "react";
const Product =()=>{
  const {id} =useParams();
const [product,setProduct] =useState(null);
useEffect(()=>{
  GetProductData(id);
},[])

const GetProductData =async(id)=>{
const res =await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${id}`)
const data =await res.json();
console.log(data.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards);
setProduct(data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

}


  console.log(id);
    const [showId, SetShowId] = useState(null);
    const data = [
      {
        id: 1,
        head: "hcjhc",
        body: "hvbchsvdchjs",
      },
      {
        id: 2,
        head: "hcjhc",
        body: "hvbchsvdchjs",
      },
      {
        id: 3,
        head: "hcjhc",
        body: "hvbchsvdchjs",
      },
      {
        id: 4,
        head: "hcjhc",
        body: "hvbchsvdchjs",
      },
      {
        id: 5,
        head: "hcjhc",
        body: "hvbchsvdchjs",
      },
    ];
  
    return (
      <div className="App">
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