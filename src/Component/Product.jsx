import { Accordian } from "./Accordian";
import { useState } from "react";
const Product =()=>{
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
        {data.map((e) => {
          return (
            <Accordian
              key={e.id}
              body={e.body}
              head={e.head}
              id={e.id}
              showId={showId}
              SetShowId={SetShowId}
            />
          );
        })}
      </div>
    );
}

export default Product;