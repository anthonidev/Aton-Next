import axios from "axios";
import { brands_ok, categories_ok, products_home_ok, products_ok } from "../slice/productSlice";
import { AppDispatch } from "../store";
import { setAlert } from "./alert";

export const productsHome = () => async (dispatch: AppDispatch) => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/product/products_homepage`, config);
        dispatch(products_home_ok(res.data.results));
    } catch (err) {
        dispatch(setAlert('Error con el servidor', 'red'));
    }
}

export const categoriesAll = () => async (dispatch: AppDispatch) => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/product/categories`, config)
        axios.defaults.headers.common['Accept'] = 'application/json'
        dispatch(categories_ok(res.data.categories));
    } catch (err) {
        dispatch(setAlert('Error con el servidor', 'red'));
    }
}

export const brandsAll = () => async (dispatch: AppDispatch) => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/product/brands`, config);
        dispatch(brands_ok(res.data.brands));
    } catch (err) {
        dispatch(setAlert('Error con el servidor', 'red'));
    }
}

export const productsAll = () => async (dispatch: AppDispatch) => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/product/products`, config);
        dispatch(products_ok(res.data));
    } catch (err) {
        dispatch(setAlert('Error con el servidor', 'red'));
    }
}
export const get_pages_products = (url:string) => async (dispatch: AppDispatch) => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(url, config);
        dispatch(products_ok(res.data));
    } catch (err) {
        dispatch(setAlert('Error con el servidor', 'red'));
    }
}

