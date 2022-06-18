import axios from "axios";
import { AppDispatch } from '../store';
import { getWishlistOk } from "../slice/wishlistSlice";
import { getStoreLocal } from "../../utils/helpers/helpRedux";


export const getWishlist = () => async (dispatch: AppDispatch) => {
    if (getStoreLocal('access')) {

        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/wishlist/wishlist`, {
            headers: {
                'Authorization': `JWT ${getStoreLocal('access')}`,
                'Accept': 'application/json',
            }
        }).then(res => {
            dispatch(getWishlistOk(res.data))
        }
        ).catch(err => {
        }
        )
    }
}

export const addToWishlist = (productId: number) => async (dispatch: AppDispatch) => {
    if (getStoreLocal('access')) {

        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/wishlist/wishlist`,
            {
                'product_id': productId

            }, {
            headers: {
                'Authorization': `JWT ${getStoreLocal('access')}`,

                'Accept': 'application/json',
            }
        }).then(res => {
            dispatch(getWishlistOk(res.data))
        }
        ).catch(err => {

        }
        )
    }

}

export const removeFromWishlist = (productId: number) => async (dispatch: AppDispatch) => {
    if (getStoreLocal('access')) {

        await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/wishlist/wishlist?product_id=${productId}`, {
            headers: {
                'Authorization': `JWT ${getStoreLocal('access')}`,
                'Accept': 'application/json',
            }
        }).then(res => {
            dispatch(getWishlistOk(res.data))
        }
        ).catch(err => {

        }
        )
    }

}
