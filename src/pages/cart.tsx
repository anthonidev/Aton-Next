import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../app/store'
import CartItem from '../components/cart/CartItem'
import Layout from '../components/layout/Layout'
import { itemCart } from '../types/interface'

const Cart = () => {

    const dispatch: AppDispatch = useDispatch()

    const items = useSelector((state: RootState) => state.cart.items)


    return (
        <Layout title='Home' content='home content' >
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row pt-7'>
                <div className=' w-full md:w-2/3 '>
                    <h1 className='font-semibold text-xl my-4'>Orden</h1>
                    {
                        items?.map((item: itemCart, index) => (
                            <div key={index} className="flex flex-col px-8 m-2 bg-white rounded-lg">
                                <CartItem item={item} />

                            </div>
                        ))
                    }
                </div>
                <div className=' w-full md:w-1/3 '>
                    xd
                </div>
            </div>
        </Layout>
    )
}
export default Cart