import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Coupon, OrderState } from "../../utils/types/interface";

const initialState: OrderState = {
    original_price: 0.0,
    total_after_coupon: 0.0,
    total_amount: 0.0,
    estimated_tax: 0.0,
    shipping_cost: 0.0,
    coupon: null
}

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        get_total_view: (state: OrderState, action: PayloadAction<OrderState>) => {
            state.original_price = action.payload.original_price
            state.total_after_coupon = action.payload.total_after_coupon
            state.total_amount = action.payload.total_amount
            state.estimated_tax = action.payload.estimated_tax
            state.shipping_cost = action.payload.shipping_cost
        },
        fail_get_total: (state: OrderState) => {
            state.original_price = 0
            state.total_after_coupon = 0
            state.total_amount = 0
            state.estimated_tax = 0
            state.shipping_cost = 0
        },
        coupon_get: (state: OrderState, action: PayloadAction<Coupon>) => {
            state.coupon = action.payload
        },
        fail_coupon: (state: OrderState) => {
            state.coupon =null
        },
    }
});

export const {
    get_total_view, fail_get_total,coupon_get,fail_coupon
} = orderSlice.actions

export default orderSlice.reducer
