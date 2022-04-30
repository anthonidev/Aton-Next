import React, { useEffect } from 'react'
import Layout from '../components/layout/Layout'
import { MdFilterList } from "react-icons/md";
import CategoryFather from '../components/form/CategoryFather';
import { categoriesAll, productsHome } from '../hooks/product';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import ProductCard from '../components/product/ProductCard';

const Store = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(productsHome())
        dispatch(categoriesAll())
    }, [dispatch])

    const products = useSelector((state: RootState) => state.product.products);
    const categories = useSelector((state: RootState) => state.product.categories);
    return (
        <Layout title='Tienda' content='tienda de aton productos de tecnologia ' >
            <div className="max-w-7xl container mx-auto px-6 pt-7  flex ">
                <div className='lg:w-1/4 sm:w-1/3 bg-slate-200 rounded-md shadow-md p-5  hidden sm:block'>
                    <div className='text-lg flex space-x-3 text-pri items-center font-semibold'>
                        <MdFilterList className='h-5 w-5' />
                        <p>Categorias</p>
                    </div>
                    {
                        categories?.map((category) => (
                            <div key={category.id}>
                                <CategoryFather category={category} />
                                <div className='border border-plo-200 my-5 '></div>
                            </div>

                        )

                        )
                    }

                </div>
                <div className='lg:w-3/4 sm:w-2/3 p-6 w-full'>
                    <div className='mb-4'>
                        <p className='text-xl text-pri font-semibold'>290 productos</p>
                    </div>
                    <div className='grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8'>
                        {
                            products?.map(product => (
                                <ProductCard product={product} key={product.id} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default Store