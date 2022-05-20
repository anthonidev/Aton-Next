import { ArrowSmRightIcon, CheckIcon, MinusIcon, PlusIcon, XIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ModalCard from '../../components/cart/ModalCard'
import Layout from '../../components/layout/Layout'
import ProductCard from '../../components/product/ProductCard'
import ProductImages from '../../components/product/ProductImages'
import { setAlert } from '../../redux/api/alert'
import { add_item } from '../../redux/api/cart'
import { product_detail } from '../../redux/api/product'
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
    }, [router.asPath, slug,dispatch]);
    const product: Product = useSelector((state: RootState) => state.product.product)
    const related = useSelector((state: RootState) => state.product.related)
    const characteristic = useSelector((state: RootState) => state.product.characteristic)

    const images = useSelector((state: RootState) => state.product.images)
    const [loading, setLoading] = useState(false);
    const items = useSelector((state: RootState) => state.cart.items)
    const total_items = useSelector((state: RootState) => state.cart.total_items)
    const amount = useSelector((state: RootState) => state.cart.amount)

    let [isOpen, setIsOpen] = useState(false)
    function closeModal() {
        setIsOpen(false)
    }
    function openModal() {
        setIsOpen(true)
    }

    const addToCart = async () => {
        setLoading(true)
        const MoreThatOne = items !== null && items.find((element: itemCart) => element.product.id === product.id);

        if (MoreThatOne === undefined) openModal()

        if (MoreThatOne !== false && MoreThatOne !== undefined) {
            if (product.quantity !== 1) MoreThatOne.count - product.quantity === 0 ? dispatch(setAlert('No hay stock', 'yellow')) : dispatch(setAlert('Producto actualizado', 'green'))
            else MoreThatOne.count - product.quantity !== 0 ? dispatch(setAlert('Producto actualizado', 'green')) : dispatch(setAlert('No hay stock', 'red'))
        }

        dispatch(add_item(product));
        setLoading(false)
    }

    return (
        <Layout title="Producto | Aton" content='slug'>
            <div className="max-w-7xl  container mx-auto px-6 pt-7  ">
                {
                    isOpen && total_items !== null && amount !== null && <ModalCard product={product} total_items={total_items} amount={amount} closeModal={closeModal} />
                }
                <section className=" flex-row md:flex">
                    <div className="w-full md:w-1/2 bg-white  mt-3">
                        <ProductImages main={product?.photo} title={product?.title} images={images} />
                    </div>
                    <div className="w-full md:w-1/2 bg-slate-200  mt-3 ">
                        <div className="relative">
                            <div className='bg-ver p-2 text-xs w-20 absolute right-0 ' >
                                <span className='text-white'>Disponible</span>
                            </div>
                        </div>

                        <div className=" p-5 mt-3">

                            <span className="text-xs text-gray-700 ">{product?.get_category} | {product?.get_brand}</span>
                            <h1 className="text-xl font-semibold my-4">{product?.title}</h1>
                            <h2 className="my-2 border-b border-plo w-10 text-gray-800">Caracteristicas</h2>
                            <ul>
                                {
                                    characteristic?.map((item: Characteristic) => (
                                        <li className="flex items-center text-sm text-gray-600 " key={item.title}>
                                            <CheckIcon className="w-4 h-4 mx-3" />
                                            <span> {item.title}</span>

                                        </li>
                                    ))
                                }
                            </ul>
                            <div className="flex flex-col my-6">
                                <span className="line-through text-gray-500 font-semibold text-sm">{formatterSoles.format(product?.compare_price)}</span>

                                <span className="text-xl font-bold text-rou">{formatterSoles.format(product?.price)}</span>
                            </div>


                            <div className='flex  justify-start space-x-3 my-3'>
                                <button onClick={addToCart} className='text-pri  bg-white hover:bg-pri-100 hover:text-white rounded-sm p-2 border-2 border-pri'>
                                    <span>Añadir al carrito</span>
                                </button>
                            </div>

                        </div>


                    </div>
                </section>
                <section className="w-full">
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
                </section>

            </div>

        </Layout>
    )
}

export default Product