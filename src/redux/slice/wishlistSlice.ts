import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {  WishListState } from "../../utils/types/interface";

const initialState: WishListState = {
    count: null,
    next: null,
    previous: null,
    results: null
}

export const wishSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        getWishlistOk: (state: WishListState, action: PayloadAction<WishListState>) => {
            state.count = action.payload.count
            state.next = action.payload.next
            state.previous = action.payload.previous
            state.results = action.payload.results
        },
    }
});

export const {
    getWishlistOk,
} = wishSlice.actions


export default wishSlice.reducer
