import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CartState } from "../../utils/types/interface";

const initialState: CartState = {
    items: null,
    amount: null,
    total_items: null
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
       
        get_item_ok: (state, action: PayloadAction<CartState>) => {
            localStorage.setItem('cart', JSON.stringify(action.payload));
            state.items = action.payload.items
            state.amount = action.payload.amount
            state.total_items = action.payload.total_items
        },
        remove: (state) => {
            
            state.items = null
            state.amount =  null
            state.total_items =  null
        },
      
    }
});


export const {
     get_item_ok,remove
} = cartSlice.actions


export default cartSlice.reducer
