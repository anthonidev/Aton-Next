import React, { useEffect } from 'react'
import Layout from '../components/layout/Layout'
import { BeakerIcon } from '@heroicons/react/solid'

import CategoryFather from '../components/form/CategoryFather';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import ProductCard from '../components/product/ProductCard';
import Brands from '../components/form/Brands';
import { brandsAll, categoriesAll, get_pages_products, productsAll } from '../redux/api/product';
import { Category, Product } from '../utils/types/interface';

const Store = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(productsAll())
        dispatch(categoriesAll())
        dispatch(brandsAll())

    }, [dispatch])

    const products = useSelector((state: RootState) => state.product.products);
    const categories = useSelector((state: RootState) => state.product.categories);
    const count = useSelector((state: RootState) => state.product.count)
    const next = useSelector((state: RootState) => state.product.next)
    const previous = useSelector((state: RootState) => state.product.previous)
    const navigationOn = 'bg-white rounded-md  hover:bg-blue-500  hover:text-white px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform'
    const navigationOff = 'bg-gray-200 cursor-not-allowed px-4 py-2 mx-1 text-gray-500 capitalize  rounded-md '
    function nextPage(next: string) {
        dispatch(get_pages_products(next))
        window.scrollTo(0, 0);

    }
    function previousPage(previous: string) {
        dispatch(get_pages_products(previous))
        window.scrollTo(0, 0);
    }




    return (
        <Layout title='Tienda' content='tienda de aton productos de tecnologia ' >
            <div className="max-w-7xl container mx-auto px-6 pt-7  flex ">
                <div className='lg:w-1/4 sm:w-1/3 bg-slate-200 rounded-md shadow-md p-5  hidden sm:block'>
                    <div className='text-lg flex space-x-3 text-pri items-center font-semibold'>
                        <BeakerIcon className='h-5 w-5' />
                        <p>Categorias</p>
                    </div>
                    {
                        categories?.map((category:Category) => (
                            <div key={category.id}>
                                <CategoryFather category={category} />
                                <div className='border border-plo-200 my-5 '></div>
                            </div>

                        )

                        )
                    }
                    {
                        <Brands />

                    }

                </div>
                <div className='lg:w-3/4 sm:w-2/3 p-6 w-full'>
                    <div className='mb-4'>
                        <p className='text-xl text-pri font-semibold'>{count} productos</p>
                    </div>
                    <div className='grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8'>
                        {
                            products?.map((product:Product) => (
                                <ProductCard product={product} key={product.id} />
                            ))
                        }
                        {
                            next && previous && (
                                <div className="flex justify-between">
                                    <button className={`${previous !== null ? navigationOn : navigationOff}  `} onClick={e => previousPage(previous)} >
                                        <div className="flex items-center -mx-1">
                                            <BeakerIcon className="w-6 h-6 mx-1" />
                                            <span className="mx-1">
                                                Anterior
                                            </span>
                                        </div>
                                    </button>



                                    <button onClick={e => nextPage(next)} className={` ${next !== null ? navigationOn : navigationOff}  `}>
                                        <div className="flex items-center -mx-1">
                                            <span className="mx-1">
                                                Siguiente
                                            </span>

                                            <BeakerIcon className="w-6 h-6 mx-1" />
                                        </div>
                                    </button>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default Store