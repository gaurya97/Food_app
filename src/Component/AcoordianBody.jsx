import React,{useState} from 'react'
import image from "../assets/Images/image.png";
import { addItems,removeItem } from '../AppStore/CartSlice';
import { MdCurrencyRupee } from "react-icons/md";
import { useDispatch } from 'react-redux';
const AcoordianBody = ({item,imageId,name,price,desc,rating,count}) => {
const [AddedItemCount , setAddedItemCount] = useState(0);
console.log(AddedItemCount);
  const dispatch =useDispatch();
  const HandleAddItems =()=>{
    setAddedItemCount(AddedItemCount+1)
dispatch(addItems(item))
  }
const AddToLocalState =()=>{
  setAddedItemCount(AddedItemCount+1)
  HandleAddItems();

}
const DeleteToLocalState =()=>{
  setAddedItemCount(AddedItemCount-1)
  dispatch(removeItem())
}

  return (
    <div>
      <div className="p-4 max-w-screen-lg mx-auto">
    {/* <!-- Header Section --> */}
    

    {/* <!-- Menu Items Grid --> */}
    {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> */}
        {/* <!-- My Box Veg --> */}
        <div className="border grid md:max-w-60 w-72 md:h-[425px] max-h-[425px] my-2 place-items-center rounded-lg p-4 shadow-md">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold mx-4">{name}</h2>
                <span><MdCurrencyRupee /></span>
                <span className="text-green-500  font-semibold">{price}</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{desc}</p>
            <div className="flex items-center mb-2">
                <span className="text-sm text-green-600">★ {rating}</span>
                <span className="ml-2 text-sm text-gray-500">({count?count:"No Rating"})</span>
            </div>
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`} className="w-full h-32 object-cover rounded-lg mb-4" alt="logo" />
            <button className="bg-green-500 text-white w-3/5 py-2 my-2 rounded-lg hover:bg-green-600">{AddedItemCount > 0 ? <span className='flex items-center justify-around'><p onClick={DeleteToLocalState}>-</p>{AddedItemCount}<p onClick={AddToLocalState} >+</p></span>:<div onClick={HandleAddItems} >Add</div>}</button>
        </div>
        {/* <p>-<p/>AddedItemCount<p>+<p/> */}
    {/* </div> */}
</div>
    </div>
  )
}

export default AcoordianBody
