import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ShippingState, shipping_option } from "../../utils/types/interface";

const initialState: ShippingState = {
    shipping_options:null
}

export const shippingSlice = createSlice({
    name: "shipping",
    initialState,
    reducers: {
        get_shipping: (state, action: PayloadAction<shipping_option[]>) => {
            state.shipping_options = action.payload
        },
    }
});


export const {
    get_shipping
} = shippingSlice.actions


export default shippingSlice.reducer
