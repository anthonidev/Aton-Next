import { ShoppingCartIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAlert } from '../../redux/api/alert'
import { add_item, update_item } from '../../redux/api/cart'
import { cart_sidebar_on } from '../../redux/slice/cartSlice'
import { AppDispatch, RootState } from '../../redux/store'
import { formatterSoles } from '../../utils/helpers/prices'
import { itemCart, Product } from '../../utils/types/interface'

const ProductNew: FunctionComponent<{ product: Product }> = ({ product }) => {
    const dispatch: AppDispatch = useDispatch()
    const items = useSelector((state: RootState) => state.wishlist.results)
    const cart_items = useSelector((state: RootState) => state.cart.items)
    const [loading, setLoading] = useState(false);
    const [isPresent, setIsPresent] = useState(false);
    const [isPresentCart, setIsPresentCart] = useState<itemCart>();

    useEffect(() => {
        items?.map(item => {
            if (item.product.id === product.id) setIsPresent(true)
        }
        )
    }, [items, product])

    useEffect(() => {
        cart_items?.map(item => {
            if (item.product.id === product.id) setIsPresentCart(item)
            else setIsPresentCart(undefined)
        }
        )
    }, [cart_items, product])
    const addToCart = async () => {
        setLoading(true)
        if (!isPresentCart) {
            if (product.quantity > 0) {
                dispatch(add_item(product))
            } else {
                dispatch(setAlert('No hay stock', 'red'))
            }
        } else {
            if (product.quantity > isPresentCart.count + 1) {
                dispatch(update_item(product, isPresentCart.count + 1));

            } else {
                dispatch(setAlert('No hay stock suficiente', 'red'));
            }
        }
        dispatch(cart_sidebar_on());

        setLoading(false)
    }
    return (
        <section className="flex flex-col justify-between border-2 hover:border-gray-400 rounded shadow  ">
            <div className="px-4 py-2">

                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 uppercase ">
                    <Link href={{
                        pathname: '/product/[slug]',
                        query: { slug: product.slug },
                    }}>
                        <a className='hover:text-red-700'>{product.title}</a>



                    </Link></h1>
                <h2 className="mt-3 text-xs lg:text-sm text-gray-600 w-3/4  ">{product.description}</h2>
            </div>
            <div>
                <Link href={{
                    pathname: '/product/[slug]',
                    query: { slug: product.slug },
                }}>
                    <a >
                        <Image
                            src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${product.photo}`}
                            layout="responsive"
                            height="200"
                            width="150"
                            alt={product.title}
                            className="aspect-video object-cover"
                            priority={true}
                        />
                    </a>

                </Link>
            </div>

            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                <span className="text-lg font-bold text-white">{formatterSoles.format(parseInt(product.price))}</span>
                {loading ? <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-indigo-400 dark:text-coolGray-900 hover:bg-indigo-600">Añadir al carrito</button> :
                    <button onClick={addToCart} className='bg-white text-gray-900   rounded-md hover:bg-gray-300 flex border px-2 py-1'>
                        <ShoppingCartIcon className='h-6 w-6  ' />
                        <span>Comprar</span>
                    </button>
                }
            </div>
        </section >

    )
}

export default ProductNew