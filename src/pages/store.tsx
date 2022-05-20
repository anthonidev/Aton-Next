import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import { ArrowLeftIcon, ArrowRightIcon, BeakerIcon, SearchIcon, TrashIcon, XIcon } from '@heroicons/react/solid'

import CategoryFather from '../components/form/CategoryFather';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import ProductCard from '../components/product/ProductCard';
import Brands from '../components/form/Brands';
import { brandsAll, categoriesAll, get_filtered_products, get_pages_products, productsAll } from '../redux/api/product';
import { Category, FormFilter, Product } from '../utils/types/interface';
import MoreFilters from '../components/store/MoreFilters';
import FilterPrice from '../components/store/FilterPrice';
import { FilterIcon } from '@heroicons/react/solid';
import { ButtonWithIcon } from '../components/button/ButtonWithIcon';

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
    const [formData, setFormData] = useState<FormFilter>({
        brandsform: [],
        categoriesform: [],
        price_range: 'Any',
        order: 'desc',
        sort_by: 'created'
    });

    const [mobileFilter, SetMobileFilter] = useState(false)
    const [filter, setFilter] = useState(false)

    const onChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>) => {
        setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
        setFilter(true)
    }
    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(get_filtered_products(formData.brandsform, formData.categoriesform, formData.order, formData.sort_by, formData.price_range));
        SetMobileFilter(false)

    };


    useEffect(() => {
        if (filter) {
            dispatch(get_filtered_products(formData.brandsform, formData.categoriesform, formData.order, formData.sort_by, formData.price_range));
        }
        setFilter(false)

    }, [filter])


    const clearForm = () => {
        formData.brandsform = []
        formData.categoriesform = []
        formData.order = 'created'
        formData.sort_by = 'desc'
        formData.price_range = 'Any'
        SetMobileFilter(false)
        dispatch(productsAll());
    }

    return (
        <Layout title='Tienda' content='tienda de aton productos de tecnologia ' >
            <div className="max-w-7xl container mx-auto px-6 pt-7  flex ">
                <form onSubmit={e => onSubmit(e)} className='lg:w-1/4 sm:w-1/3 bg-white rounded-md p-5  hidden sm:block'>
                    <div className='text-xl flex space-x-3 text-gray-800 items-center font-semibold'>
                        <FilterIcon className='h-5 w-5' />
                        <p>Categorias </p>
                    </div>
                    {
                        categories?.map((category: Category) => (
                            <div key={category.id}>
                                <CategoryFather category={category} formdata={formData.categoriesform} setFilter={setFilter} />
                                <div className='my-5 '></div>
                            </div>

                        ))
                    }

                    <Brands formdata={formData.brandsform} setFilter={setFilter} />
                    <div className=' my-5 '></div>

                    <FilterPrice price_range={formData.price_range} onChange={onChange} />
                    <div className=' my-5 '></div>

                    <MoreFilters sort_by={formData.sort_by} order={formData.order} onChange={onChange} />
                    <div className=' my-5 '></div>



                </form>
                <div className='lg:w-3/4 sm:w-2/3 p-6 w-full'>
                    <div className='mb-4 text-pri flex justify-between items-center w-full'>
                        <p className='text-xl font-semibold'>{count} productos</p>
                        <button onClick={() => SetMobileFilter(!mobileFilter)} ><FilterIcon className='h-5 w-5 block sm:hidden' /></button>
                    </div>
                    <div>
                        <div className='grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8'>
                            {
                                products?.map((product: Product) => (
                                    <ProductCard product={product} key={product.id} />
                                ))
                            }

                        </div>
                        <div className="flex justify-between mt-5">
                            {
                                previous && (<button className={`${previous !== null ? navigationOn : navigationOff}  `} onClick={e => previousPage(previous)} >
                                    <div className="flex items-center -mx-1">
                                        <ArrowLeftIcon className="w-6 h-6 mx-1" />
                                        <span className="mx-1">
                                            Anterior
                                        </span>
                                    </div>
                                </button>)
                            }


                            {
                                next && (
                                    <button onClick={e => nextPage(next)} className={` ${next !== null ? navigationOn : navigationOff}  `}>
                                        <div className="flex items-center -mx-1">
                                            <span className="mx-1">
                                                Siguiente
                                            </span>

                                            <ArrowRightIcon className="w-6 h-6 mx-1" />
                                        </div>
                                    </button>
                                )
                            }

                        </div>
                    </div>

                </div>
                {
                    mobileFilter && (
                        <div className="fixed inset-0 flex z-40  ">
                            <form onSubmit={e => onSubmit(e)} className=" ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                                <div className='text-lg flex space-x-3 justify-between text-gray-800 items-center font-semibold'>
                                    <FilterIcon className='h-5 w-5 ' />

                                    <p>Categorias</p>
                                    <a className='cursor-pointer'>
                                        <XIcon className='h-5 w-5' onClick={e => SetMobileFilter(false)} />

                                    </a>


                                </div>
                                {
                                    categories?.map((category: Category) => (
                                        <div key={category.id}>
                                            <CategoryFather category={category} formdata={formData.categoriesform} setFilter={setFilter} />
                                            <div className=' my-5 '></div>
                                        </div>

                                    ))
                                }

                                <Brands formdata={formData.brandsform} setFilter={setFilter} />
                                <div className=' my-5 '></div>

                                <FilterPrice price_range={formData.price_range} onChange={onChange} />
                                <div className=' my-5 '></div>

                                <MoreFilters sort_by={formData.sort_by} order={formData.order} onChange={onChange} />
                                <div className=' my-5 '></div>

                                <div className='flex space-x-2'>
                                    <button onClick={clearForm} className="flex ml-auto mt-3  text-plo bg-white border-2 border-pri-100 hover:bg-pri-100 hover:text-white    w-full h-10 items-center justify-around  ">
                                        <span>Limpiar</span>
                                        <TrashIcon className='w-6 h-6' />
                                    </button>
                                    <button type="submit" className="flex ml-auto mt-3  text-white bg-pri-100 border-2 border-pri hover:bg-pri  w-full h-10 items-center justify-around  ">
                                        <span>Filtrar</span>
                                        <SearchIcon className='w-6 h-6' />
                                    </button>

                                </div>
                            </form>
                        </div>

                    )
                }
            </div>
        </Layout>

    )
}

export default Store