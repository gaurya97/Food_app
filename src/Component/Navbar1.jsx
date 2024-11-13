
import React from "react";
import image from "../Images/image.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa6";
import { CgCloseR } from "react-icons/cg";
export const Navbar1 = () => {
    const [toggleMenu, setToggleMenu] = useState("top-[11%]");
    const [toggleIcon, setToggleIcon] = useState(false);
  const ToggleFunction =()=>{
    setToggleIcon(!toggleIcon);
                setToggleMenu((oState) => {
                  let st = oState === "top-[11%]" ? "top-[-100%]" : "top-[11%]";
                  return st;
                });
                console.log("clicked");
  
  }
  return (
    <header className="bg-[#f2f2f2e3] sticky top-0 z-50 ">
  <nav className="p-3 flex justify-between items-center w-[92%] mx-auto">
    <div className="sticky top-0">
      <img src={image} className="w-16 rounded-full" alt="logo" />
    </div>

    <div
      className={`md:static absolute md:bg-[#f2f2f2e3] z-50 duration-1000 bg-[#ffffff] md:min-h-fit min-h-[60vh] left-0 ${toggleMenu} md:w-auto w-full items-center px-5`}
    >
      <ul className="flex md:flex-row flex-col justify-around items-center md:w-auto md:min-h-fit md:gap-20 min-h-[60vh]">
        <li
          className="hover:text-gray-500 md:border-none text-center border border-slate-300 md:w-auto md:block grid place-items-center md:h-auto h-8 rounded-lg w-36"
          onClick={() => ToggleFunction()}
        >
          <Link to="/product" className="no-underline">Product</Link>
        </li>
        <li
          className="hover:text-gray-500 md:border-none text-center border border-slate-300 md:w-auto md:block grid place-items-center md:h-auto h-8 rounded-lg w-36"
          onClick={() => ToggleFunction()}
        >
          <Link to="/solution" className="no-underline">Solution</Link>
        </li>
        <li className="hover:text-gray-500 md:border-none text-center border border-slate-300 md:w-auto md:block grid place-items-center md:h-auto h-8 rounded-lg w-36">Resource</li>
        <li className="hover:text-gray-500 md:border-none text-center border border-slate-300 md:w-auto md:block grid place-items-center md:h-auto h-8 rounded-lg w-36">Developers</li>
        <li className="hover:text-gray-500 md:border-none text-center border border-slate-300 md:w-auto md:block grid place-items-center md:h-auto h-8 rounded-lg w-36">Pricing</li>
      </ul>
    </div>

    <div className="flex items-center gap-6">
      <button className="w-24 h-8 text-center bg-[#a6c1ee] text-white rounded-xl hover:bg-black" aria-label="Sign in">
        Sign in
      </button>
      <div
        onClick={(e) => {
          ToggleFunction();
        }}
        className="md:hidden text-3xl cursor-pointer"
        aria-label="Menu Toggle"
        role="button"
        tabIndex="0"
        onKeyDown={(e) => e.key === 'Enter' && ToggleFunction()}
      >
        {toggleIcon ? <FaAlignJustify /> : <CgCloseR />}
      </div>
    </div>
  </nav>
</header>

  )
}
