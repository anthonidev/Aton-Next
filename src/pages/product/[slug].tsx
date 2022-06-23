import { ArrowSmRightIcon, ShoppingCartIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/layout/Layout'
import ProductCard from '../../components/product/ProductCard'
import ProductImages from '../../components/product/ProductImages'
import Stock from '../../components/product/Stock'
import { setAlert } from '../../redux/api/alert'
import { add_item, update_item } from '../../redux/api/cart'
import { product_detail } from '../../redux/api/product'
import { cart_sidebar_on } from '../../redux/slice/cartSlice'
import { RootState } from '../../redux/store'
import { formatterSoles } from '../../utils/helpers/prices'
import { Characteristic, itemCart, Product } from '../../utils/types/interface'

const Product = () => {
    const router = useRouter()
    const { slug } = router.query
    const dispatch = useDispatch();

    useEffect(() => {
        if (slug !== undefined)
            dispatch(product_detail(router.asPath));
    }, [router.asPath, slug, dispatch]);
    const product = useSelector((state: RootState) => state.product?.product)
    const colors = useSelector((state: RootState) => state.product.product?.colors)
    const products_views = useSelector((state: RootState) => state.product.product?.related)
    const characteristic = useSelector((state: RootState) => state.product.product?.characteristics)
    const cart_items = useSelector((state: RootState) => state.cart?.items)

    const images = useSelector((state: RootState) => state.product.product?.images)
    const [loading, setLoading] = useState(false);
    const [isPresentCart, setIsPresentCart] = useState<itemCart>();

    const [viewProduct, setViewProduct] = useState<Product>();

    useEffect(() => {
        if (product !== null) {
            setViewProduct({
                id: product.id,
                title: product.title,
                price: product.price,
                compare_price: product.compare_price,
                quantity: product.quantity,
                slug: product.slug,
                photo: product.photo,
                photo_thumbnail_sm: product.photo_thumbnail_sm,
                photo_thumbnail_xm: product.photo_thumbnail_xm,
                get_category: product.get_category,
                get_brand: product.get_brand
            })
        }
    }, [product])

    useEffect(() => {

        product !== null && cart_items?.map((item: itemCart) => {

            if (item.product === product.id) setIsPresentCart(item)
        }
        )
    }, [cart_items, product])

    const addToCart = async () => {
        setLoading(true)
        if (!isPresentCart && product) {
            if (product?.quantity > 0) {
                dispatch(add_item(product))
                dispatch(setAlert('Producto agregado al carrito', 'green'))
            } else {
                dispatch(setAlert('No hay stock', 'red'))
            }
        } else {
            if (isPresentCart && product && product.quantity >= isPresentCart.count + 1) {
                dispatch(update_item(product, isPresentCart.count + 1));
            } else {
                dispatch(setAlert('No hay stock suficiente', 'red'));
            }
        }
        dispatch(cart_sidebar_on());

        setLoading(false)
    }

    return (
        <Layout title="Producto | Aton" content='slug'>
            <div className="max-w-7xl  container mx-auto px-6 pt-7  ">

                <section className=" flex-row md:flex ">
                    <div className="w-full md:w-1/2 bg-white  mt-3 border shadow ">
                        {
                            viewProduct !== undefined && images !== undefined && (
                                <ProductImages main={viewProduct.photo} title={viewProduct.title} images={images} />
                            )
                        }
                    </div>
                    <div className="w-full md:w-1/2 bg-gray-50 border mt-3 shadow  ">
                        <div className='flex justify-end items-center ' >
                            {
                                viewProduct !== undefined && (
                                    <Stock quantity={viewProduct.quantity} />
                                )
                            }
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
                                                <span className='mr-2 font-bold text-gray-800'> {item.title}</span>
                                            </div>

                                            <div className=' text-gray-900 w-3/5   pl-3'>
                                                <span className='font-bold mr-4'> : </span>
                                                <span> {item.description}</span>
                                            </div>

                                        </li>
                                    ))
                                }
                            </ul>
                            {colors !== null && colors?.length != 0 && (<section className="w-full">
                                <div className='flex items-center text-lg font-semibold  text-gray-500 my-5'>
                                    <ArrowSmRightIcon className='h-5 w-5' />
                                    <h1 className=''>Colores</h1>
                                </div>
                                <div className='grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 '>
                                    {
                                        colors?.map((product) => (
                                            <ProductCard product={product} key={product.id} />
                                        ))
                                    }

                                </div>
                            </section>)}
                            <div className=" my-6 border-2 border-dashed border-rou rounded-md p-2">
                                <div className='flex flex-col'>
                                    {
                                        viewProduct !== undefined && (
                                            <>
                                                <span className="line-through text-gray-500 font-semibold text-lg">{formatterSoles.format(parseInt(viewProduct.compare_price))}</span>

                                                <span className="text-2xl font-bold text-rou">{formatterSoles.format(parseInt(viewProduct?.price))}</span>
                                            </>
                                        )
                                    }

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
                
                {products_views?.length != 0 && (<section className="w-full">
                    <div className='flex items-center text-lg font-semibold  text-gray-500 my-5'>
                        <ArrowSmRightIcon className='h-5 w-5' />
                        <h1 className=''>Productos Más Vistos</h1>
                    </div>
                    <div className='grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 '>
                        {
                            products_views?.map((product) => (
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