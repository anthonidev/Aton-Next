import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ProductState,  Product, Category, Brand, resultProducts } from '../../utils/types/interface';

const initialState: ProductState = {
    products: null,
    product: null,
    categories: null,
    brands: null,
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
        },
        categories_ok: (state, action: PayloadAction<Category[]>) => {
            state.categories = action.payload
        },
        brands_ok: (state, action: PayloadAction<Brand[]>) => {
            state.brands = action.payload
        },
        products_ok: (state, action: PayloadAction<resultProducts>) => {
            state.count = action.payload.count
            state.next = action.payload.next
            state.previous = action.payload.previous
            state.products = action.payload.results
        },

    }
});


export const {
    products_home_ok,
    product_ok,
    categories_ok,
    brands_ok,
    products_ok
} = productSlice.actions


export default productSlice.reducer