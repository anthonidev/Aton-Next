import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Account, Address } from '../../utils/types/interface';

const initialState: Account = {
    id: null,
    treatment: null,
    dob: null,
    dni: null,
    user: null,
    address: null

}
export const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        get_account: (state: Account, action: PayloadAction<Account>) => {
            state.id = action.payload.id
            state.dni = action.payload.dni
            state.treatment = action.payload.treatment
            state.dob = action.payload.dob
            state.user = action.payload.user
        },
        get_address: (state: Account, action: PayloadAction<Address[]>) => {
            state.address = action.payload
        }
    }
});


export const {
    get_account,
    get_address
} = accountSlice.actions


export default accountSlice.reducer
