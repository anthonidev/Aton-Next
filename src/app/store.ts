import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import alertReducer from "../features/alertSlice";
import productReducer from "../features/productSlice";
import cartReducer from "../features/cartSlice";
import shippingReducer from "../features/shippingSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        alert:alertReducer,
        product:productReducer,
        cart:cartReducer,
        shipping:shippingReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch