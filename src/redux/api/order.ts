import axios from 'axios';
import { getStoreLocal } from '../../utils/helpers/helpRedux';
import { coupon_get, fail_coupon, fail_get_total, get_total_view } from '../slice/orderSlice';
import { AppDispatch } from '../store';
import { setAlert } from './alert';
import { CartState } from '../../utils/types/interface';


export const get_total_order = (
    shipping_id: number | undefined = undefined,
    coupon_code: string | undefined = undefined) => async (dispatch: AppDispatch) => {

        if (getStoreLocal('access')) {
            await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/api/order/get-order-total?shipping_id=${shipping_id !== undefined ? shipping_id : 0}&coupon_code=${coupon_code !== undefined ? coupon_code : ''}`
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
        } else {
            if (getStoreLocal('cart')) {
                const cart: CartState = JSON.parse(localStorage.getItem('cart') || "{}");
                let total = 0

                cart.items?.map(product_item => {
                    total += product_item.product.price * product_item.count
                }
                )

                dispatch(get_total_view({
                    original_price: total,
                    total_after_coupon: 0.0,
                    total_amount: total,
                    estimated_tax: 0.0,
                    shipping_cost: 0.0,
                    coupon: null
                }))

            }

        };
    };

export const process_payment = (
    shipping_id: number | undefined = undefined,
    coupon_code: string | undefined = undefined,
    address_id: number | undefined = undefined,
) => async (dispatch: AppDispatch) => {
    await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/order/make-order`
        , JSON.stringify({
            shipping_id,
            coupon_code,
            address_id,
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