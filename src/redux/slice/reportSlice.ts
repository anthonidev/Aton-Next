import { createSlice, PayloadAction } from "@reduxjs/toolkit"


const initialState: reportState = {
    pie: null,
    radar: null,
    area: null,
    general: null
}

export const reportSlice = createSlice({
    name: "authenticated",
    initialState,
    reducers: {
        report_ok: (state: reportState, action: PayloadAction<reportState>) => {
            state.pie = action.payload.pie;
            state.radar = action.payload.radar;
            state.area = action.payload.area;
            state.general = action.payload.general;
        },
        report_fail: (state: reportState, action: PayloadAction<string>) => {
            state.pie = null
            state.radar = null
            state.area = null
            state.general = null
        },
    }
});

export interface reportState {
    pie: chart | null
    radar: chart | null
    area: chart | null
    general: generalData | null
}

export interface generalData {
    products: number
    orders: number
    subcategories: number
    sales_products: number
    visits: number
    clients: number
}

export interface chart {
    labels: string[]
    data: number[]
}


export const {
    report_ok,
    report_fail
} = reportSlice.actions


export default reportSlice.reducer
