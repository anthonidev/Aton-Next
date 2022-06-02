import axios from "axios";
import { getStoreLocal } from "../../utils/helpers/helpRedux";
import { CartState, itemCart, Product } from "../../utils/types/interface";
import { get_item_ok, remove } from "../slice/cartSlice";
import { AppDispatch } from "../store";
import { setAlert } from "./alert";

export const add_item = (item: Product) => async (dispatch: AppDispatch) => {
    if (getStoreLocal('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `JWT ${getStoreLocal('access')}`,
            }
        };
        const product_id = item.id;
        const body = JSON.stringify({ product_id });

        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/add-item`, body, config);
            dispatch(get_item_ok(res.data));
        } catch (err) {
            dispatch(setAlert("Ocurrio un error inesperado","red"));

        }
    } else {
        let cart: CartState;
        let shouldAddItem = true;
        let order_item: itemCart
        let cartNew: itemCart[] = [];
        let count = 1

        if (localStorage.getItem('cart')) {

            cart = JSON.parse(localStorage.getItem('cart') || "{}");
            cart.items?.map((product_item: itemCart) => {
                if (product_item.product.id === item.id) {
                    shouldAddItem = false;
                    product_item.count += 1
                }
            });
            order_item = {
                product: item,
                count: 1
            };
            if (shouldAddItem) {
                cart.items?.push(order_item)
            }
            if (cart.items !== null) {
                cart.total_items = cart.items?.length
            }
            cart.items?.map(product_item => {
                if (product_item.count !== null && cart.amount) {
                    cart.amount += product_item.product.price * product_item.count

                }
            })
            dispatch(get_item_ok(cart));
        } else {

            order_item = {
                product: item,
                count: 1
            };
            cartNew.push(order_item)

            dispatch(get_item_ok({
                items: cartNew,
                amount: item.price,
                total_items: 1,
                sidebar: false
            }));
        }
    }
}

export const get_items = () => async (dispatch: AppDispatch) => {
    if (getStoreLocal('access')) {
        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/cart-items`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `JWT ${getStoreLocal('access')}`,
            }
        }).then(res => {
            dispatch(get_item_ok(res.data));

        }).catch(err => {
            console.log("error");
        })

    } else {
        if (getStoreLocal('cart')) {
            let cart: CartState;
            if (localStorage.getItem('cart')) {
                cart = JSON.parse(localStorage.getItem('cart') || "{}");
                dispatch(get_item_ok(cart));
            }
        }
    }
}

export const update_item = (item: Product, count: number) => async (dispatch: AppDispatch) => {

    if (getStoreLocal('access')) {
        const product_id=item.id
        axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/update-item`, JSON.stringify({ product_id, count }), {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `JWT ${getStoreLocal('access')}`,
            }
        }).then(res => {
            dispatch(get_item_ok(res.data));
        }).catch(err => {
            console.log(err);
        })
    } else {
        let cart: CartState;

        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart') || "{}");
            cart.items?.map((product_item: itemCart) => {
                if (product_item.product.id === item.id) {
                    product_item.count = count

                }

            });
            cart.amount = 0
            cart.items?.map(product_item => {
                if (cart.amount !== null && product_item.count) {
                    cart.amount += product_item.product.price * product_item.count
                }
            })

            dispatch(get_item_ok(cart));

        }
    }


}

export const remove_item = (item: itemCart) => async (dispatch: AppDispatch) => {

    let cart: CartState;
    let new_cart: CartState;
    if (getStoreLocal('access')) {
        const product_id = item.product.id
        await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/remove-item`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `JWT ${getStoreLocal('access')}`,
            },
            data: JSON.stringify({ product_id })
        }).then(res => {
            dispatch(get_item_ok(res.data));
            dispatch(setAlert('Producto Eliminado', 'yellow'));

        }).catch(err => {
            console.log("error");
            dispatch(setAlert('Error con el servidor', 'red'));

        })

    } else {
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart') || "{}");
            new_cart = {
                items: [],
                amount: 0,
                total_items: 0,
                sidebar:false
            }
            cart.items?.map((product_item: itemCart) => {
                if (product_item.product.id === item.product.id) {
                    new_cart.items?.push(product_item)
                }
            });
            new_cart.amount = 0
            new_cart.items?.map(product_item => {
                if (new_cart.amount !== null && product_item.count) {
                    new_cart.amount += product_item.product.price * product_item.count
                }
            })
            if (new_cart.items !== null) {
                new_cart.total_items = new_cart.items?.length
            }
            dispatch(get_item_ok(new_cart));
        }
    }

}

export const clear = () => async (dispatch: AppDispatch) => {
    localStorage.removeItem("cart")
    dispatch(remove());
    dispatch(setAlert(`El carrito esta vacio`, "green"));

}

