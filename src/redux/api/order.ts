import axios from 'axios';
import { getStoreLocal } from '../../utils/helpers/helpRedux';
import { cart_sidebar } from '../slice/cartSlice';
import { coupon_get, fail_coupon, fail_get_total, get_total_view } from '../slice/orderSlice';
import { AppDispatch } from '../store';
import { setAlert } from './alert';


export const get_total_order = (shipping_id: number | undefined = undefined, coupon_code: string | undefined = undefined) => async (dispatch: AppDispatch) => {
    await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/payment/get-payment-total?shipping_id=${shipping_id !== undefined ? shipping_id : 0}&coupon_code=${coupon_code !== undefined ? coupon_code : ''}`
        , {
            headers: {
                'Accept': 'application/json',
                'Authorization': `JWT ${getStoreLocal('access')}`
            }
        }).then(res => {
            dispatch(get_total_view(res.data))

        }).catch(err => {
            dispatch(fail_get_total())

        })
};
export const process_payment = (
    shipping_id: number | undefined = undefined,
    coupon_code: string | undefined = undefined,

    full_name: string,
    address_line_1: string,
    address_line_2: string,
    district: string,
    city: string,
    zipcode: string,
    telephone_number: string
) => async (dispatch: AppDispatch) => {
    await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/payment/make-payment`
        , JSON.stringify({
            shipping_id,
            coupon_code,
            full_name,
            address_line_1,
            address_line_2,
            district,
            city,
            zipcode,
            telephone_number
        }), {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `JWT ${getStoreLocal('access')}`
        }
    }).then(res => {
        dispatch(setAlert(res.data.success, 'green'));
    }).catch(err => {
        dispatch(setAlert('Error processing payment', 'red'));

    })
};

export const check_coupon = (coupon_code: string) => async (dispatch: AppDispatch) => {
    await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/coupon/check-coupon?coupon_code=${coupon_code}`
        , {
            headers: {
                'Accept': 'application/json',
                'Authorization': `JWT ${getStoreLocal('access')}`
            }
        }).then(res => {
            dispatch(coupon_get(res.data.coupon))
        }).catch(err => {
            dispatch(fail_coupon())


        })
};