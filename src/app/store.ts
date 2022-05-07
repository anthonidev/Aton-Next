import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import alertReducer from "../features/alertSlice";
import productReducer from "../features/productSlice";
import cartReducer from "../features/cartSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        alert:alertReducer,
        product:productReducer,
        cart:cartReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch