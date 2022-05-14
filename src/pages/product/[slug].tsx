import { CheckIcon, MinusCircleIcon, MinusIcon, PlusCircleIcon, PlusIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/layout/Layout'
import ProductImages from '../../components/product/ProductImages'
import { setAlert } from '../../redux/api/alert'
import { add_item } from '../../redux/api/cart'
import { product_detail } from '../../redux/api/product'
import { RootState } from '../../redux/store'
import { Characteristic, Product } from '../../utils/types/interface'

const Product = () => {
    const router = useRouter()
    const { slug } = router.query
    const dispatch = useDispatch();

    useEffect(() => {
        if (slug !== undefined)
            dispatch(product_detail(router.asPath));
    }, [router.asPath, slug]);
    const product: Product = useSelector((state: RootState) => state.product.product)
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

        setLoading(false)



    }
    const formatterSoles = new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN' });

    return (
        <Layout title="Producto | Aton" content='slug'>
            <div className="max-w-7xl  container mx-auto px-6 pt-7  flex-row md:flex ">
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
                                    <li className="flex items-center text-sm text-gray-600 ">
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
                        <div className='flex  justify-start space-x-3'>
                            <button className='text-plo  bg-white hover:bg-gray-600 hover:text-white rounded-md p-2 border border-plo'>

                                <MinusIcon className='h-4 w-4 ' />

                            </button>
                            <span className='text-lg'>2</span>
                            <button className='text-plo  bg-white hover:bg-gray-600 hover:text-white rounded-md p-2 border border-plo'>
                                <PlusIcon className='h-4 w-4' />
                            </button>


                        </div>

                        <div className='flex  justify-start space-x-3 my-3'>
                            <button className='text-pri  bg-white hover:bg-pri-100 hover:text-white rounded-sm p-2 border-2 
                            
                            
                            
                            border-pri'>
                                <span>Añadir al carrito</span>
                            </button>
                        </div>

                    </div>


                </div>
            </div>

        </Layout>
    )
}

export default Product