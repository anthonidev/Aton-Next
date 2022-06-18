import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CartState } from "../../utils/types/interface";

const initialState: CartState = {
    id: 0,
    items: null,
    amount: null,
    total_items: null,
    sidebar: false
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        get_item_ok: (state: CartState, action: PayloadAction<CartState>) => {
            localStorage.setItem('cart', JSON.stringify(action.payload));
            state.id = action.payload.id
            state.items = action.payload.items
            state.amount = action.payload.amount
            state.total_items = action.payload.total_items
        },
        remove: (state: CartState) => {
            state.items = null
            state.amount = null
            state.total_items = null
        },
        cart_sidebar_on: (state: CartState) => {
            state.sidebar = true
        },
        cart_sidebar_off: (state: CartState) => {
            state.sidebar = false
        },


    }
});


export const {
    get_item_ok,
    remove,
    cart_sidebar_on,
    cart_sidebar_off
} = cartSlice.actions


export default cartSlice.reducer
