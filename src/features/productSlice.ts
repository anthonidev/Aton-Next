import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ProductState, Characteristic, Product } from '../types/insterfaces/Product';

const initialState: ProductState = {
    products: null,
    product: null,
    previous: null,
    next: null,
    count: null,
    characteristic: null,
    images: null,
    related: null,
    colors: null,
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {

        products_home_ok: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload
        },
        product_ok: (state, action: PayloadAction<ProductState>) => {
            state.characteristic = action.payload.characteristic,
                state.images = action.payload.images,
                state.related = action.payload.related,
                state.colors = action.payload.colors,
                state.product = action.payload.product
        }

    }
});


export const {
    products_home_ok,
    product_ok
} = productSlice.actions


export default productSlice.reducer
