import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import CartItem from '../components/cart/CartItem'
import Layout from '../components/layout/Layout'
import { itemCart } from '../utils/types/interface'
import { get_total_order } from '../redux/api/order'
import Link from 'next/link'
import OrdenSumary from '../components/cart/OrdenSumary'
import { HomeIcon, LockClosedIcon } from '@heroicons/react/solid'
import { cart_sidebar_off } from '../redux/slice/cartSlice'
import { get_product_recommendations } from '../redux/api/product'
import ProductCard from '../components/product/ProductCard'
const Cart = () => {

    const dispatch: AppDispatch = useDispatch()
    const items = useSelector((state: RootState) => state.cart.items)
    const amount = useSelector((state: RootState) => state.cart.amount)
    const authenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
    const [renderForm, setRenderForm] = useState(false)

    useEffect(() => {
        dispatch(cart_sidebar_off())
    }, [dispatch])

    useEffect(() => {
        if (items)
            dispatch(get_product_recommendations(items))
    }
        , [dispatch, items])


    useEffect(() => {
        dispatch(get_total_order())
    }, [amount, dispatch])

    const products_recomendation = useSelector((state: RootState) => state.product.recomendation)


    return (
        <Layout title='Aton Store | Cart' content='Carrito de compras de Aton Store ' >
            {
                items?.length ?
                    (<div className={`max-w-7xl mx-auto px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:space-x-5 pb-20 md:pb-10`}>
                        <div className='lg:col-span-2  '>
                            <h1 className='font-semibold text-lg my-4 ml-5 uppercase tracking-wider text-gray-700'>Carrito </h1>
                            {
                                items?.map((item: itemCart) => (
                                    <div key={item.product.id} className="flex flex-col px-4 m-2 bg-white rounded-lg  ">
                                        <CartItem item={item} />
                                    </div>
                                ))
                            }
                            <Link href={'/store'}>
                                <a className="flex bg-gray-700 hover:bg-gray-900 text-white px-4 py-2 mt-4 rounded justify-center items-center space-x-2 text-sm">
                                    <HomeIcon className="h-4 w-4" />
                                    <span>Continuar Comprando</span>
                                </a>
                            </Link>

                        </div>

                        <div>
                            <h1 className='font-semibold text-lg my-4 uppercase tracking-wider  ml-5 text-gray-700'>Suma de la orden</h1>
                            <div className='bg-white rounded-lg  shadow px-4 py-3 '>

                                <OrdenSumary />

                                {authenticated && !renderForm &&
                                    (
                                        <Link href='/checkout'>
                                            <a
                                                type="submit"
                                                className="group mt-5 relative w-full flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded text-gray-900 uppercase hover:text-white bg-white border-indigo-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                <div className="absolute left-0 inset-y-0 flex items-center pl-3">
                                                    <span className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true"><LockClosedIcon /></span>
                                                </div>
                                                Pasar por caja
                                            </a>
                                        </Link>
                                    )
                                }
                                {!authenticated &&
                                    (
                                        <div>
                                            <Link href={'/auth/login'}  >
                                                <a
                                                    className='mt-3 hover:bg-indigo-500 text-center bg-indigo-700 flex   px-4 py-3 w-full rounded-md font-semibold text-white text-lg'
                                                >Iniciar Sesion
                                                </a>
                                            </Link>
                                            <span className='text-xs italic'>Debes iniciar sessión para poder continuar con el pago</span>
                                        </div>

                                    )

                                }
                            </div>



                        </div>


                        <div className='lg:col-span-2 ' >
                            <h2> Productos relacionados </h2>
                            <div className="grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {
                                    products_recomendation?.map((product) => (
                                        <ProductCard key={product.id} product={product} />

                                    ))
                                }

                            </div>
                        </div>


                    </div>) :
                    (<div className=" flex justify-center items-center flex-col pt-10 space-y-8 ">
                        <span className="font-semibold text-lg ">No hay productos en el carrito</span>
                        <Link href={'/store'}><a className="bg-pri px-4 py-3 rounded hover:bg-indigo-600 text-gray-100 ">Ver Productos</a></Link>
                    </div>)

            }

        </Layout>
    )
}
export default Cart