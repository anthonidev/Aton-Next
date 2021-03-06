import axios from "axios";
import { itemCart } from "../../utils/types/interface";
import { brands_ok, categories_ok, products_fail, products_home_ok, products_ok, product_ok, recomendation_ok, subcategoty_ok } from "../slice/productSlice";
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
        dispatch(products_home_ok(res.data.home));
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
        dispatch(categories_ok(res.data));
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

    await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/product/products`,
        {
            headers: {
                'Accept': 'application/json'
            }
        }).then(res => {
            dispatch(products_ok(res.data));
        }).catch(err => {

        })

}
export const get_pages_products = (url: string) => async (dispatch: AppDispatch) => {
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
export const get_filtered_products = (brands: number[], categories: number[], order: string, sort_by: string, price_range: string, query: string = "") => async (dispatch: AppDispatch) => {

    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/product/filter`,
        JSON.stringify({
            brands,
            categories,
            order,
            sort_by,
            price_range,
            query,
        }),
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            dispatch(products_ok(res.data));
        }).catch(err => {
            dispatch(products_fail());

        })
}
export const product_detail = (slug: string) => async (dispatch: AppDispatch) => {

    await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api${slug}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        dispatch(product_ok(res.data.detail_product));

    }).catch(err => {
        console.log(err);

    })


}
export const category_products = (slug: string) => async (dispatch: AppDispatch) => {

    await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/product${slug}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        dispatch(products_ok(res.data));

    }).catch(err => {
        dispatch(products_fail());

    })

}
export const brand_products = (slug: string) => async (dispatch: AppDispatch) => {

    await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/product${slug}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        dispatch(products_ok(res.data));

    }).catch(err => {
        dispatch(products_fail());


    })

}
export const get_subcategory = (slug: string) => async (dispatch: AppDispatch) => {

    await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/product${slug}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        dispatch(subcategoty_ok(res.data));

    }).catch(err => {
        console.log(err);

    })

}

export const get_product_recommendations = (items: itemCart[]) => async (dispatch: AppDispatch) => {

    let ids = items.map(({product}) => product.id);
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/product/recomendation`,
        JSON.stringify({
            ids
        }),
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {

            dispatch(recomendation_ok(res.data));

        }).catch(err => {

        })
}