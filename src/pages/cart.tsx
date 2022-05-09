import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../app/store'
import CartItem from '../components/cart/CartItem'
import ShippingOption from '../components/cart/ShippingOption'
import Layout from '../components/layout/Layout'
import { get_shipping_options } from '../hooks/shipping'
import { itemCart, shipping_option } from '../types/interface'

const Cart = () => {

    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        dispatch(get_shipping_options())
    }, [dispatch])

    const items = useSelector((state: RootState) => state.cart.items)
    const shipping_options = useSelector((state: RootState) => state.shipping.shipping_options)


    return (
        <Layout title='Home' content='home content' >
            <div className='max-w-7xl  grid grid-cols-5 md:flex-row pt-1 md:pt-3 lg:pt-7 gap-9  md:mx-auto px-2'>

                <div className='col-span-5 md:col-span-3  '>
                    <h1 className='font-semibold text-lg my-4'>Orden</h1>
                    {
                        items?.map((item: itemCart, index) => (
                            <div key={index} className="flex flex-col px-8 m-2 bg-white rounded-lg ">
                                <CartItem item={item} />
                            </div>
                        ))
                    }

                </div>
                <div className=' col-span-5 md:col-span-2  '>
                    <h1 className='font-semibold text-lg my-4'>Suma de la orden</h1>

                    <div className='bg-white rounded-lg  shadow px-4 py-3'>
                        <div className='my-4 flex justify-between'>
                            <input type="text" className="border rounded-md p-1 w-1/2" placeholder='COUPON CODE' />
                            <button className=" bg-blue-300 px-4 py-1 text-pri font-semibold rounded-md">Aplicar</button>

                        </div>
                        <div className=' grid grid-cols-2 gap-3 border-y-2 border-dashed py-3 text-plo'>
                            <span>Suma de la orden</span>
                            <span className='flex justify-end'>S/122</span>
                            <span>Suma de la orden</span>
                            <span className='flex justify-end text-pri font-semibold'>S/10</span>
                            <span >Suma de la orden</span>
                            <span className='flex justify-end font-bold'>S/122</span>
                        </div>
                        <div>
                            <button className=' hover:bg-indigo-500 bg-indigo-400 px-5 py-4 w-full mt-5 rounded-md font-semibold text-gray-800 text-lg' >Procesar Pedido</button>
                        </div>
                    </div>



                </div>
                <div className=' col-span-5 md:col-span-3   '>
                    <h1 className='font-semibold text-lg my-4'>Servicio de entrega</h1>
                    <div className="grid grid-cols-2  gap-x-2 sm:gap-x-2 md:gap-x-5 lg:gap-x-9 gap-y-4">
                        {
                            shipping_options?.map((item: shipping_option, index) => (
                                <div className="flex justify-center" key={index} >
                                    <ShippingOption item={item} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default Cart