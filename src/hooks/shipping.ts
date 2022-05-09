import axios from 'axios';
import { AppDispatch } from '../app/store';
import { get_shipping } from '../features/shippingSlice';


export const get_shipping_options = () => async (dispatch: AppDispatch) => {
    const config = {
        headers: {
            'Accept': 'application/json',
        }
    };

    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/shipping/get-shipping-options`, config);
        dispatch(get_shipping(res.data.shipping))

    } catch (err) {
      console.error(err);
      
    }
};