import axios from "axios";
import { getStoreLocal } from "../../utils/helpers/helpRedux";
import { get_account, get_address, get_my_orders } from "../slice/accountSlice";
import { off_loading, on_loading } from "../slice/authSlice";
import { AppDispatch } from "../store";
import { setAlert } from "./alert";


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
    treatment: string,
    image: any
) => async (dispatch: AppDispatch) => {
    console.log(image);

    const formData = new FormData();
    formData.append('image', image);
    formData.append('last_name', last_name);
    formData.append('dni', dni);
    formData.append('first_name', first_name);
    formData.append('dob', dob);
    formData.append('treatment', treatment);
    dispatch(on_loading());
    const body = formData;
    await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/account/update`,
        body
        , {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
                'Authorization': `JWT ${getStoreLocal('access')}`
            }
        }).then(res => {
            dispatch(get_account(res.data.profile))
        }).catch(err => {

        })
    dispatch(off_loading());
};

export const add_account = (
    id: number = 0,
    first_name: string,
    last_name: string,
    enterprise: string,
    address: string,
    zipcode: string,
    district: string,
    city: string,
    phone: string) => async (dispatch: AppDispatch) => {
        dispatch(on_loading());
        if (id > 0) {
            await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/account/address`,
                JSON.stringify({
                    id,
                    first_name,
                    last_name,
                    enterprise,
                    address,
                    zipcode,
                    district,
                    city,
                    phone,
                })
                , {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${getStoreLocal('access')}`
                    }
                }).then(res => {
                    dispatch(get_address(res.data.address))
                    dispatch(setAlert('Dirección actualizada', 'green'))
                }).catch(err => {
                    dispatch(setAlert('Error al conectar con el servidor', 'red'))

                })
        } else {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/account/address`,
                JSON.stringify({
                    first_name,
                    last_name,
                    enterprise,
                    address,
                    zipcode,
                    district,
                    city,
                    phone,
                })
                , {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${getStoreLocal('access')}`
                    }
                }).then(res => {
                    dispatch(get_address(res.data.address))
                    dispatch(setAlert('Dirección Creada', 'green'))
                }).catch(err => {
                    dispatch(setAlert('Error al conectar con el servidor', 'red'))

                })
        }

        dispatch(off_loading());
    }


export const remove_address = (id: number) => async (dispatch: AppDispatch) => {
    dispatch(on_loading());
    await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/account/address?id=${id}`,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `JWT ${getStoreLocal('access')}`
            },

        }).then(res => {
            dispatch(get_address(res.data.address))
            dispatch(setAlert('Dirección eliminada', 'green'))
        }).catch(err => {
            dispatch(setAlert('Error al conectar con el servidor', 'red'))

        }
        )
    dispatch(off_loading());
}

export const get_orders = () => async (dispatch: AppDispatch) => {
    await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/order/get-my-orden`
        , {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `JWT ${getStoreLocal('access')}`
            }
        }).then(res => {
            dispatch(get_my_orders(res.data))
        }).catch(err => {

        })
}