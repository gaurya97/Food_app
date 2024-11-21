import React from "react";
import { FaAngleDown,FaAngleUp  } from "react-icons/fa6";
import AcoordianBody from "./AcoordianBody";
export const Accordian = ({ body, head, id, showId, SetShowId }) => {
  
  return (
    <div>
      <div className="max-w-4xl mx-auto border my-2">
        <div
          className="accordion-header p-4 bg-white shadow-md rounded-lg cursor-pointer flex justify-between items-center"
          onClick={() => {
        
            // console.log(id);
            SetShowId((OriginalId) => {
              if (OriginalId == id) {
                return null;
              } else {
                return id;
              }
            });
          }}
        >
          <div className=""><b>{head}({body.length})</b></div>
          <div className="acc-t">{showId === id ?<FaAngleUp />:<FaAngleDown />}</div>
        </div>
        {showId === id && <div className=" flex flex-col justify-center items-center w-[95%] md:w-[50%] m-auto my-1 p-auto h-auto  bg-gray-50 overflow-hidden rounded-b-lg-body">
          {body?.map((e)=>{
            // name,price,desc,rating,count
          
           return <AcoordianBody key={e.card.info.id} imageId ={e?.card?.info?.imageId}  name ={e?.card?.info?.name} price={e?.card?.info?.price ?Math.floor(e.card.info.price/100):Math.floor(e.card.info?.defaultPrice/100)} desc={e.card.info.description} rating={e.card.info.ratings.aggregatedRating.rating}
           count={e.card.info.ratings.aggregatedRating.ratingCountV2}
           
           />
          })}
          
          
          </div>}
      </div>
    </div>
  );
};