import React from "react";
import image from "../assets/Images/image.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa6";
import { CgCloseR } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState("top-[-1000%]");
  const [toggleIcon, setToggleIcon] = useState(false);

const cartItems =useSelector((store)=>store.cart.count);
console.log(cartItems);
const ToggleFunction =()=>{
  setToggleIcon(!toggleIcon);
              setToggleMenu((oState) => {
                let st = oState === "top-[100%]" ? "top-[-1000%]" : "top-[100%]";
                return st;
              });
              console.log("clicked");

}

  return (
    <header className="bg-[#f2f2f2e3] sticky top-0 z-50 ">
      <nav className="p-3  flex justify-between items-center w-[92%] mx-auto">
        <div className=" ">
          <img src={image} className="w-16 rounded-full " alt="logo" />
        </div>

        <div
          className={`md:static absolute md:bg-[#f2f2f2e3]  transition: all 0.3s ease duration-1000  bg-[#ffffff]  md:min-h-fit min-h-[60vh] left-0 ${toggleMenu} md:w-auto w-full items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col justify-around items-center md:w-auto md:min-h-fit md:gap-20 min-h-[60vh]">
            <li className="hover:text-gray-500 md:border-none text-center border border-slate-300 md:w-auto md:block grid place-items-center md:h-auto h-8 rounded-lg w-36" onClick={()=>ToggleFunction()}><Link to={'/home'} className="no-underline">Home</Link></li>
            <li className="hover:text-gray-500 md:border-none text-center border border-slate-300 md:w-auto md:block grid place-items-center md:h-auto h-8 rounded-lg w-36" onClick={()=>ToggleFunction()}><Link to={'/solution'} className="no-underline">Contact</Link></li>
            <li className="hover:text-gray-500 md:border-none text-center border border-slate-300 md:w-auto md:block grid place-items-center md:h-auto h-8 rounded-lg w-36">About</li>
            <li className="hover:text-gray-500 md:border-none text-center border border-slate-300 md:w-auto md:block grid place-items-center md:h-auto h-8 rounded-lg w-36">React Insights</li>
            <li className="hover:text-gray-500 md:border-none text-center border border-slate-300 md:w-auto md:block grid place-items-center md:h-auto h-8 rounded-lg w-36">Js Insights</li>
          </ul>
        </div>
        <div className="flex items-center gap-6  ">
          <button className="  w-24 h-8 text-center bg-[#a6c1ee] text-white  rounded-xl hover:bg-black">
            Sign in
          </button>
          <span className ="text-base">
          <Link to={'/myCart'} className="no-underline">[{cartItems}]< FaCartShopping /></Link>
          </span>
          <div
            onClick={(e) => {
              ToggleFunction();
            }}
            className="md:hidden animate-fade-in transition: all 0.3s ease duration-1000 text-3xl  cursor-pointer"
          >
            {toggleIcon ? <CgCloseR/> : <FaAlignJustify/>}
          </div>
        </div>
      </nav>
    </header>
  );
};
