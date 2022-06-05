import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import alertReducer from "./slice/alertSlice";
import productReducer from "./slice/productSlice";
import cartReducer from "./slice/cartSlice";
import shippingReducer from "./slice/shippingSlice";
import orderReducer from "./slice/orderSlice";
import accountReducer from "./slice/accountSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        alert:alertReducer,
        product:productReducer,
        cart:cartReducer,
        shipping:shippingReducer,
        order:orderReducer,
        account:accountReducer
    },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch