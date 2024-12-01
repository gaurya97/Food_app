import { createSlice,current } from "@reduxjs/toolkit";

const CartSlice =createSlice({
    name:"cart",
    initialState:{
        items:[],
        count:0
    },
    reducers:{
        addItems:(state,action)=>{
            const index =state.items.findIndex((item) =>item.item.id == action.payload.item.id)
            console.log('index',index);
            if(index !== -1){
                console.log('index',index);
             
  
                state.items.splice(index,1,action.payload);
            //  console.log('newState',current(state.items));
             state.count+=1
           
            }else{
                state.items.push(action.payload);
                state.count+=1
            }
           console.log(current(state.items));
        },
        removeItem:(state,action)=>{
            const index =state.items.findIndex((item) =>item.item.id == action.payload.item.id)
            if(action.payload.localState==0){
                state.items.splice(index,1);
            }
            // state.items.pop();
            state.count-=1
        },
        clearCart:(state,action)=>{
            state.count = 0;
        }
    }
});
export const {addItems,removeItem,clearCart} =CartSlice.actions;
export default CartSlice.reducer;