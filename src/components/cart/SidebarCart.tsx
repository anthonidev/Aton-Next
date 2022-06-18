import React, { useEffect } from 'react'
import { LockClosedIcon, ShoppingCartIcon, XIcon } from '@heroicons/react/solid'

import { motion } from 'framer-motion';
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { itemCart } from '../../utils/types/interface';
import CartItem from './CartItem';
import OrdenSumary from './OrdenSumary';
import { get_total_order } from '../../redux/api/order';
import { cart_sidebar_off } from '../../redux/slice/cartSlice';
import { clear_cart } from '../../redux/api/cart';
import Image from 'next/image';


const SidebarCart = () => {
    const dispatch: AppDispatch = useDispatch()
    const sidebarCartState = useSelector((state: RootState) => state.cart.sidebar)

    const items = useSelector((state: RootState) => state.cart.items)
    const amount = useSelector((state: RootState) => state.cart.amount)


    useEffect(() => {
        if (items !== null && items.length > 0) {
            dispatch(get_total_order())
        }
    }, [amount, dispatch, items])

    const handleClear = () => {
        dispatch(clear_cart())
    }

    return (
        <div>
            {sidebarCartState && (
                <motion.div
                    animate={{ x: [150, 0], opacity: [0, 1], }}
                    transition={{ duration: 0.4, type: 'spring', delay: 0.2 }}
                    className={`bg-white border-l-2 border-gray-400 md:w-2/5 w-5/6  xl:w-3/12 lg:w-4/12 right-0 top-0 z-40 fixed h-full rounded-md  overflow-y-auto `}

                >
                    <div className=' mx-2  h-full'>

                        {
                            items?.length ?
                                (<div className={`mt-10`}>
                                    <div className=' w-full '>
                                        <div className='flex justify-center items-center font-semibold  text-xl text-gray-700  border-b-2 border-dashed  '>
                                            <ShoppingCartIcon className='h-5 w-5' />
                                            <h1 className='my-1 '>Carrito </h1>
                                        </div>

                                        {
                                            items?.map((item: itemCart, index) => (
                                                <div key={index} className="flex flex-col px-2 md:px-6 m-2  bg-white rounded ">
                                                    <CartItem item={item} />
                                                </div>
                                            ))
                                        }

                                        <div className='flex justify-end mx-8'>
                                            <button
                                                className="text-right text-gray-600 font-semibold  py-2 px-4 focus:outline-none hover:text-red-600"
                                                onClick={handleClear}
                                            >
                                                <span className='text-xs '>Vaciar carrito</span>
                                            </button>
                                        </div>


                                    </div>
                                    <div className='bg-white p-2 px-2 md:px-6 m-2 rounded'>
                                        <OrdenSumary />
                                        <Link href='/cart'>
                                            <a
                                                type="submit"
                                                className="group mt-5 relative w-full flex justify-center py-2 px-4 border border-transparent md:text-lg  font-medium rounded text-gray-900 uppercase hover:text-white bg-white border-indigo-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                <div className="absolute left-0 inset-y-0  items-center pl-3 md:flex hidden">
                                                    <span className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true"><LockClosedIcon /></span>
                                                </div>
                                                Tramitar Pedido
                                            </a>
                                        </Link>

                                    </div>
                                </div>) :
                                (<div className=" flex justify-center items-center flex-col pt-10 click-text text-gray-600 h-full">
                                    <Image
                                        src={`/assets/images/empty_cart.jpg`}
                                        layout="intrinsic"
                                        width="100"
                                        height="100"
                                        alt={`logo`}
                                    />
                                    <h3 className="font-semibold text-lg ">No hay productos en tu carrito </h3>
                                    <span className='text-xs mt-3 mb-10'>Agrega cuantos productos quieras </span>
                                    <Link href={'/store'}><a className="bg-pri px-4 py-3 rounded hover:bg-indigo-600 text-gray-100 ">Ver Productos</a></Link>
                                </div>)
                        }

                        <div className="absolute top-0 left-0 -mr-12 pt-2 ">
                            <button
                                className="ml-1 flex items-center justify-center  focus:outline-none "
                                onClick={() => dispatch(cart_sidebar_off())}
                            >
                                <XIcon className="h-10 w-10 text-red-600 hover:text-gray-700 " aria-hidden="true" />
                            </button>
                        </div>
                    </div>

                </motion.div>
            )}
        </div>



    )
}

export default SidebarCart