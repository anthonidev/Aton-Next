import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ProductState,Category, Brand, resultProducts, HomeProducts, CategoryChildren, DetailProduct, Product } from '../../utils/types/interface';

const initialState: ProductState = {
    home:null,
    products: null,
    product: null,
    categories: null,
    brands: null,
    previous: null,
    next: null,
    count: null,
    subcategory: null,
    recomendation:null
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {

        products_home_ok: (state: ProductState, action: PayloadAction<HomeProducts>) => {
            state.home = action.payload
        },
        product_ok: (state: ProductState, action: PayloadAction<DetailProduct>) => {
            state.product = action.payload
        },
        products_fail: (state: ProductState) => {
            state.products =null
        },
        categories_ok: (state: ProductState, action: PayloadAction<Category[]>) => {
            state.categories = action.payload
        },
        brands_ok: (state: ProductState, action: PayloadAction<Brand[]>) => {
            state.brands = action.payload
        },
        products_ok: (state: ProductState, action: PayloadAction<resultProducts>) => {
            state.count = action.payload.count
            state.next = action.payload.next
            state.previous = action.payload.previous
            state.products = action.payload.results
        },
        subcategoty_ok: (state: ProductState, action: PayloadAction<CategoryChildren>) => {
            state.subcategory = action.payload
        },
        recomendation_ok: (state: ProductState, action: PayloadAction<Product[]>) => {
            state.recomendation = action.payload
        }

    }
});


export const {
    products_home_ok,
    product_ok,
    categories_ok,
    brands_ok,
    products_ok,
    subcategoty_ok,
    products_fail,
    recomendation_ok
} = productSlice.actions


export default productSlice.reducer

