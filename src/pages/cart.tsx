import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import CartItem from '../components/cart/CartItem'
import Layout from '../components/layout/Layout'
import { get_shipping_options } from '../redux/api/shipping'
import { IFormCheckout, itemCart } from '../utils/types/interface'
import { get_total_order } from '../redux/api/order'
import Link from 'next/link'
import { setAlert } from '../redux/api/alert'
import OrdenSumary from '../components/cart/OrdenSumary'

const Cart = () => {

    const dispatch: AppDispatch = useDispatch()
    const items = useSelector((state: RootState) => state.cart.items)
    const amount = useSelector((state: RootState) => state.cart.amount)
    const authenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
    const [renderForm, setRenderForm] = useState(false)

    const [codeCoupon, setCoupon] = useState('')
    const [formData, setFormData] = useState<IFormCheckout>({
        full_name: '',
        address_line_1: '',
        address_line_2: '',
        city: '',
        district: '',
        zipcode: '',
        phone: '',
        coupon_code: '',
        shipping_id: 0,
    });

    const onChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>): void => setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log("good")
    };
    useEffect(() => {
        dispatch(get_shipping_options())
    }, [dispatch])

    useEffect(() => {
        dispatch(get_total_order())
    }, [amount,dispatch])

    useEffect(() => {
        dispatch(get_total_order(formData.shipping_id, codeCoupon));
    }, [formData.shipping_id, codeCoupon,dispatch]);

    const verify = () => {
        if (formData.shipping_id !== 0) {
            dispatch(setAlert("good", "green"))
            setRenderForm(true)
        } else {
            dispatch(setAlert("Debe seleccionar un metodo de entrega", "yellow"))
        }
    }

    return (
        <Layout title='Aton | Cart' content='home content' >
            {
                items?.length ?
                    (<div className={`max-w-7xl mx-auto px-2 flex md:space-x-5`}>
                        <div className=' w-full md:w-4/6 '>
                            <h1 className='font-semibold text-lg my-4'>Orden <span className="text-plo"> ({items?.length})</span></h1>
                            {
                                items?.map((item: itemCart) => (
                                    <div key={item.product.id} className="flex flex-col px-8 m-2 bg-white rounded-lg ">
                                        <CartItem item={item} />
                                    </div>
                                ))
                            }
                        </div>


                        <div className='w-full md:w-2/6'>
                            <h1 className='font-semibold text-lg my-4'>Suma de la orden</h1>
                            <div className='bg-white rounded-lg  shadow px-4 py-3 '>

                                <OrdenSumary />

                                {authenticated && !renderForm &&
                                    (<Link href={'/checkout'}  ><a className='mt-3 hover:bg-indigo-500 bg-indigo-400 px-5 py-4 flex   rounded-md font-semibold text-gray-800 text-lg' >Procesar Pedido</a></Link>)
                                }
                                {!authenticated &&
                                    (<Link href={'/auth/login'}  ><a className='mt-3 hover:bg-indigo-500 text-center bg-indigo-400 flex   px-5 py-4 w-full rounded-md font-semibold text-gray-800 text-lg' >Iniciar Sesion</a></Link>)
                                }
                            </div>



                        </div>



                    </div>) :
                    (<div className=" flex justify-center items-center flex-col pt-10 space-y-8 ">
                        <h3 className="font-semibold text-lg ">No hay productos en el carrito</h3>
                        <Link href={'/store'}><a className="bg-pri px-4 py-3 rounded hover:bg-indigo-600 text-gray-100 ">Ver Productos</a></Link>
                    </div>)
            }

        </Layout>
    )
}
export default Cart