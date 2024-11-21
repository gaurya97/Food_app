import { createSlice } from "@reduxjs/toolkit";

const CartSlice =createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItems:(state,action)=>{
           state.items.push(action.payload);
           console.log(state.items);
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state,action)=>{
            state.items.length =0;
        }
    }
});
export const {addItems,removeItem,clearCart} =CartSlice.actions;
export default CartSlice.reducer;