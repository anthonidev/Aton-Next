import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import CartItem from '../components/cart/CartItem'
import ShippingOption from '../components/cart/ShippingOption'
import Layout from '../components/layout/Layout'
import { get_shipping_options } from '../redux/api/shipping'
import { IFormCheckout, itemCart, shipping_option } from '../utils/types/interface'
import { get_total_order } from '../redux/api/order'
import Link from 'next/link'
import { setAlert } from '../redux/api/alert'
import FormDataCheckout from '../components/cart/FormDataCheckout'
import OrdenSumary from '../components/cart/OrdenSumary'

const Cart = () => {

    const dispatch: AppDispatch = useDispatch()
    const items = useSelector((state: RootState) => state.cart.items)
    const amount = useSelector((state: RootState) => state.cart.amount)
    const shipping_options = useSelector((state: RootState) => state.shipping.shipping_options)
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
    }, [])

    useEffect(() => {
        dispatch(get_total_order())
    }, [amount])
    useEffect(() => {
        dispatch(get_total_order(formData.shipping_id, codeCoupon));
    }, [formData.shipping_id, codeCoupon]);

    const verify = () => {
        if (formData.shipping_id !== 0) {
            dispatch(setAlert("good", "green"))
            setRenderForm(true)
        } else {
            dispatch(setAlert("Debe seleccionar un metodo de entrega", "yellow"))
        }
    }

    return (
        <Layout title='Home' content='home content' >
            {
                items?.length ?
                    (<div className={`max-w-7xl mx-auto px-2`}>
                        <div className='flex flex-col md:flex-row'>
                            <div className=' w-full md:w-3/5 '>
                                <h1 className='font-semibold text-lg my-4'>Orden <span className="text-plo"> ({items?.length})</span></h1>
                                <div className='h-80 overflow-y-auto'>
                                {
                                    items?.map((item: itemCart) => (
                                        <div key={item.product.id} className="flex flex-col px-8 m-2 bg-white rounded-lg ">
                                            <CartItem item={item} />
                                        </div>
                                    ))
                                }
</div>
                            </div>
                            <div className=' my-4 w-full md:w-2/5  '>
                                <h1 className='font-semibold text-lg my-4'>Servicio de entrega</h1>
                                <div className="grid grid-cols-1  gap-x-2 sm:gap-x-2 md:gap-x-5 lg:gap-x-9 gap-y-4">
                                    {
                                        shipping_options?.map((item: shipping_option) => (
                                            <div className="flex justify-center" key={item.id} >
                                                <ShippingOption item={item} onChange={onChange} shipping_id={formData.shipping_id} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row md:space-x-7'>
                            <div className='w-full md:w-1/2'>
                                <h1 className='font-semibold text-lg my-4'>Suma de la orden</h1>
                                <div className='bg-white rounded-lg  shadow px-4 py-3'>
                                    <h1 className='font-semibold text-lg my-4'>Coupon</h1>

                                    <div className='my-4 flex justify-between'>
                                        <input type="text" className="border rounded-md p-1 w-1/2" placeholder='COUPON CODE' />
                                        <button className=" bg-blue-300 px-4 py-1 text-pri font-semibold rounded-md">Aplicar</button>
                                    </div>

                                    <OrdenSumary />

                                    <div className="w-full">
                                        {authenticated && !renderForm &&
                                            (<button onClick={verify} className=' hover:bg-indigo-500 bg-indigo-400 px-5 py-4 w-full mt-5 rounded-md font-semibold text-gray-800 text-lg' >Procesar Pedido</button>)
                                        }
                                        {!authenticated && 
                                            (<div className='hover:bg-indigo-500 text-center bg-indigo-400 px-5 py-4 w-full mt-5 rounded-md font-semibold text-gray-800 text-lg'> <Link href={'/auth/login'}  ><a  >Iniciar Sesion</a></Link></div>)
                                        }
                                    </div>
                                </div>
                            </div>

                            {renderForm && (
                                <div className='w-full md:w-1/2'>

                                    <FormDataCheckout
                                        onChange={onChange}
                                        full_name={formData.full_name}
                                        address_line_1={formData.address_line_1}
                                        address_line_2={formData.address_line_2}
                                        zipcode={formData.zipcode}
                                        phone={formData.phone}
                                        city={formData.city}
                                        district={formData.district}
                                    />
                                    <div className="w-full">
                                    <button onClick={verify} className=' hover:bg-indigo-500 bg-indigo-400 px-5 py-4 w-full mt-5 rounded-md font-semibold text-gray-800 text-lg' >Procesar Pedido</button>
                                        
                                    </div>
                                </div>

                            )}

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