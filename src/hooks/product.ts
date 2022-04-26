import axios from "axios";
import { AppDispatch } from "../app/store";
import { products_home_ok } from "../features/productSlice";
import { setAlert } from "./alert";

export const productsHome = () => async (dispatch: AppDispatch) => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/product/products_homepage`, config);
        if (res.status === 200) {
            dispatch(products_home_ok(res.data.results));
        } else {
            dispatch(setAlert('Error con el servidor', 'red'));
        }
    } catch (err) {
        dispatch(setAlert('Error con el servidor', 'red'));

    }

}