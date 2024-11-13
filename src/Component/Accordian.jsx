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
          <div className="">{head}</div>
          <div className="acc-t">{showId === id ?<FaAngleUp />:<FaAngleDown />}</div>
        </div>
        {showId === id && <div className="accordion-content flex justify-center items-center p-4 m-4 h-auto  bg-gray-50 overflow-hidden rounded-b-lg-body"><AcoordianBody/></div>}
      </div>
    </div>
  );
};