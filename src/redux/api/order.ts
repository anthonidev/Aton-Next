import axios from 'axios';
import { getStoreLocal } from '../../utils/helpers/helpRedux';
import { fail_get_total, get_total_view } from '../slice/orderSlice';
import { AppDispatch } from '../store';


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