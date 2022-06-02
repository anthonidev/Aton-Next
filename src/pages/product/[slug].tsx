import { ArrowSmRightIcon, CheckIcon, MinusIcon, PlusIcon, ShoppingCartIcon, XIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/layout/Layout'
import ProductCard from '../../components/product/ProductCard'
import ProductImages from '../../components/product/ProductImages'
import Stock from '../../components/product/Stock'
import { add_item } from '../../redux/api/cart'
import { product_detail } from '../../redux/api/product'
import { cart_sidebar_on } from '../../redux/slice/cartSlice'
import { RootState } from '../../redux/store'
import { formatterSoles } from '../../utils/helpers/prices'
import { Characteristic, Product } from '../../utils/types/interface'

const Product = () => {
    const router = useRouter()
    const { slug } = router.query
    const dispatch = useDispatch();

    useEffect(() => {
        if (slug !== undefined)
            dispatch(product_detail(router.asPath));
    }, [router.asPath, slug, dispatch]);
    const product: Product = useSelector((state: RootState) => state.product.product)
    const related = useSelector((state: RootState) => state.product.related)
    const products_views = useSelector((state: RootState) => state.product.products_views)
    const characteristic = useSelector((state: RootState) => state.product.characteristic)

    const images = useSelector((state: RootState) => state.product.images)
    const [loading, setLoading] = useState(false);


    const addToCart = async () => {
        setLoading(true)
        dispatch(add_item(product));
        dispatch(cart_sidebar_on());
        setLoading(false)
    }

    return (
        <Layout title="Producto | Aton" content='slug'>
            <div className="max-w-7xl  container mx-auto px-6 pt-7  ">

                <section className=" flex-row md:flex ">
                    <div className="w-full md:w-1/2 bg-white  mt-3 border shadow ">
                        <ProductImages main={product?.photo} title={product?.title} images={images} />
                    </div>
                    <div className="w-full md:w-1/2 bg-gray-50 border mt-3 shadow  ">
                        <div className='flex justify-end items-center ' >
                            <Stock quantity={product?.quantity} />
                        </div>

                        <div className=" p-5 mt-3">

                            <span className="text-xs text-gray-700 ">{product?.get_category} | {product?.get_brand}</span>
                            <h1 className="text-2xl font-bold my-4">{product?.title}</h1>

                            <h2 className='text-lg font-bold'>Cararterísticas</h2>
                            <ul>
                                {
                                    characteristic?.map((item: Characteristic) => (

                                        <li className="flex items-center text-sm text-gray-600 my-2" key={item.title}>
                                            <div className=' flex w-2/5'>
                                                <span className='mr-2 font-bold'> {item.title}</span>
                                            </div>

                                            <div className=' text-gray-900 w-3/5   pl-3'>
                                                <span className='font-bold mr-4'> : </span>
                                                <span> {item.description}</span>
                                            </div>

                                        </li>
                                    ))
                                }
                            </ul>
                            <div className=" my-6 border-2 border-dashed border-rou rounded-md p-2">
                                <div className='flex flex-col'>
                                    <span className="line-through text-gray-500 font-semibold text-lg">{formatterSoles.format(product?.compare_price)}</span>

                                    <span className="text-2xl font-bold text-rou">{formatterSoles.format(product?.price)}</span>
                                    <span className='text-sm font-light text-gray-800 italic '>Inpuestos incluidos</span>
                                    <div className='flex  justify-start space-x-3 my-3'>
                                    </div>

                                    <div className=' flex     '>
                                        {loading ? <button type="button" className="flex items-center justify-center p-3 font-semibold tracking-wide rounded-md dark:bg-indigo-400 d hover:bg-indigo-600">Añadir al carrito</button> :
                                            <button onClick={addToCart} className=' hover:bg-gray-900 text-white  rounded-md bg-gray-700 flex border px-2 py-2 w-full justify-center'>
                                                <ShoppingCartIcon className='h-6 w-6  ' />
                                                <span className='uppercase'>Añadir al carrito</span>
                                            </button>
                                        }
                                    </div>
                                </div>
                            </div>




                        </div>


                    </div>
                </section>
                {related?.length != 0 && (<section className="w-full">
                    <div className='flex items-center text-lg font-semibold  text-gray-500 my-5'>
                        <ArrowSmRightIcon className='h-5 w-5' />
                        <h1 className=''>Productos Relacionados</h1>
                    </div>
                    <div className='grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 '>
                        {
                            related?.map((product: Product) => (
                                <ProductCard product={product} key={product.id} />
                            ))
                        }

                    </div>
                </section>)}
                {products_views?.length != 0 && (<section className="w-full">
                    <div className='flex items-center text-lg font-semibold  text-gray-500 my-5'>
                        <ArrowSmRightIcon className='h-5 w-5' />
                        <h1 className=''>Productos Más Vistos</h1>
                    </div>
                    <div className='grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 '>
                        {
                            products_views?.map((product: Product) => (
                                <ProductCard product={product} key={product.id} />
                            ))
                        }

                    </div>
                </section>)}


            </div>

        </Layout>
    )
}

export default Product