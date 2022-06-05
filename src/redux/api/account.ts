import axios from "axios";
import { getStoreLocal } from "../../utils/helpers/helpRedux";
import { get_account, get_address } from "../slice/accountSlice";
import { off_loading, on_loading } from "../slice/authSlice";
import { AppDispatch } from "../store";


export const get_profile = () => async (dispatch: AppDispatch) => {
    await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/account/user`
        , {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `JWT ${getStoreLocal('access')}`
            }
        }).then(res => {
            dispatch(get_account(res.data.profile))
        }).catch(err => {

        })
};
export const get_address_profile = () => async (dispatch: AppDispatch) => {
    await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/account/address`
        , {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `JWT ${getStoreLocal('access')}`
            }
        }).then(res => {
            dispatch(get_address(res.data.address))
        }).catch(err => {

        })
}

export const update_profile = (
    first_name: string,
    last_name: string,
    dni: string,
    dob: string,
    treatment: string
) => async (dispatch: AppDispatch) => {
    dispatch(on_loading());
    await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/account/update`,
        JSON.stringify({
            first_name,
            last_name,
            dni,
            dob,
            treatment
        })
        , {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `JWT ${getStoreLocal('access')}`
            }
        }).then(res => {
            dispatch(get_account(res.data.profile))
        }).catch(err => {

        })
    dispatch(off_loading());
};