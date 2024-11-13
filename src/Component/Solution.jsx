import React from 'react'
import {Cart,PromotedCarts} from './Cart'
import SearchBar from './SearchBar'
export const Solution = () => {
  const PromotedCart =PromotedCarts(Cart)
  return (
    <div className="text-center bg-[#ffffff]">
    <SearchBar/>
   <PromotedCart/>
   <PromotedCart/>
   <PromotedCart/>
   <PromotedCart/>
   <PromotedCart/>
   <Cart/>
</div>
  )
}
