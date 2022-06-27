import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import { ArrowLeftIcon, ArrowRightIcon, ViewGridIcon, MenuIcon } from '@heroicons/react/solid';
import CategoryFather from '../components/form/CategoryFather';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import ProductCard from '../components/product/ProductCard';
import Brands from '../components/form/Brands';
import { get_filtered_products, get_pages_products, productsAll } from '../redux/api/product';
import { Category, FormFilter, Product } from '../utils/types/interface';
import MoreFilters from '../components/store/MoreFilters';
import FilterPrice from '../components/store/FilterPrice';
import { FilterIcon } from '@heroicons/react/solid';
import { Breadcrumb } from '../components/navigation/Breadcrumb';
import { ButtonWithIcon } from '../components/button/ButtonWithIcon';
import ProductCardRow from '../components/product/ProductCardRow';

enum View {
    LIST = 'list',
    GRID = 'grid'
}

const Store = () => {

    const dispatch: AppDispatch = useDispatch()
    useEffect(() => {
        dispatch(productsAll())
    }, [dispatch])

    const [viewProducts, setViewProducts] = useState<View>(View.GRID)


    const products = useSelector((state: RootState) => state.product.products);
    const categories = useSelector((state: RootState) => state.product.categories);
    const count = useSelector((state: RootState) => state.product.count)
    const next = useSelector((state: RootState) => state.product.next)
    const previous = useSelector((state: RootState) => state.product.previous)


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
    useEffect(() => {
        if (filter) {
            dispatch(get_filtered_products(formData.brandsform, formData.categoriesform, formData.order, formData.sort_by, formData.price_range));
        }
        setFilter(false)
        SetMobileFilter(false)

    }, [filter, formData, dispatch])




    return (
        <Layout title='Tienda | Aton Peru' content='Aton Store cuenta con productos de tecnologia para el hogar ' >

            <div className="max-w-7xl container mx-auto px-6   ">
                <div className='flex-col md:flex-row flex justify-between  px-5 space-y-4'>
                    <Breadcrumb >
                        <>
                            <li className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 transform rotate-90 fill-current ">
                                    <path d="M32 30.031h-32l16-28.061z"></path>
                                </svg>
                                <a rel="noopener noreferrer" href="#" className="flex items-center px-1 capitalize  cursor-default">Tienda</a>
                            </li>
                        </>
                    </Breadcrumb>

                </div>
                {/* movile */}

                {
                    mobileFilter && (
                        <div className="mx-4 md:hidden">
                            <div className='text-xl flex space-x-3 text-gray-800 items-center font-semibold '>
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

                            <Brands state={false} formdata={formData.brandsform} setFilter={setFilter} />
                            <div className=' my-5 '></div>

                            <FilterPrice state={false} price_range={formData.price_range} onChange={onChange} />
                            <div className=' my-5 '></div>

                        </div>
                    )
                }

                {/* productos */}

                <div className=" flex bg-gray-100/60">
                    <div className='lg:w-1/4 sm:w-1/3 bg-gray p-5  hidden sm:block border-r-2'>
                        <div className='text-xl flex space-x-3 text-gray-800 items-center font-semibold'>
                            <FilterIcon className='h-5 w-5' />
                            <p>Categorias </p>
                        </div>
                        {
                            categories && categories.map((category: Category) => (
                                <div key={category.id}>
                                    <CategoryFather category={category} formdata={formData.categoriesform} setFilter={setFilter} />
                                    <div className='my-5 '></div>
                                </div>

                            ))
                        }

                        <Brands state={false} formdata={formData.brandsform} setFilter={setFilter} />
                        <div className=' my-5 '></div>

                        <FilterPrice state={false} price_range={formData.price_range} onChange={onChange} />
                        <div className=' my-5 '></div>






                    </div>
                    <div className='lg:w-3/4 sm:w-2/3 p-6 w-full bg-gray-100/90'>
                        <div className='flex lg:justify-between mb-2 lg:flex-row md:flex-col'>

                            <MoreFilters state={false} sort_by={formData.sort_by} order={formData.order} onChange={onChange} />
                            <div className="flex justify-between items-end ">

                                <div className="sm:hidden ml-3">
                                    <ButtonWithIcon Icom={FilterIcon} funtion={() => SetMobileFilter(!mobileFilter)}>
                                        <span className=' text-xs'>Ver Filtros</span>
                                    </ButtonWithIcon>
                                </div>

                            </div>
                            <div className=' hidden md:flex md:space-x-2 md:justify-end '>
                                <p className='text-sm  italic text-gray-500 '>Hay {count} productos</p>
                                <ViewGridIcon
                                    onClick={() => setViewProducts(View.GRID)}
                                    className={`h-6 w-6 ${viewProducts === View.GRID ? 'text-gray-900' : 'text-gray-400'}`}
                                />
                                <MenuIcon
                                    onClick={() => setViewProducts(View.LIST)}
                                    className={`h-6 w-6 ${viewProducts === View.LIST ? 'text-gray-900' : 'text-gray-400'}`}
                                />
                            </div>
                        </div>
                        <div>
                            <div
                                className={` hidden md:grid  grid-cols-1  gap-8  ${viewProducts === View.GRID ? 'lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 ' : 'grid-cols-1  '}`}
                            >
                                {
                                    viewProducts === View.GRID && products?.map((product: Product) => (
                                        <ProductCard product={product} key={product.id} />
                                    ))
                                }
                                {
                                    viewProducts === View.LIST && products?.map((product: Product) => (
                                        <ProductCardRow product={product} key={product.id} />
                                    ))
                                }

                            </div>
                            <div
                                className={`grid  grid-cols-1 sm:grid-cols-2  gap-8 md:hidden  '}`}
                            >
                                {
                                    products?.map((product: Product) => (
                                        <ProductCard product={product} key={product.id} />
                                    ))
                                }


                            </div>
                            {/* pagination */}
                            <div className="flex justify-between mt-5">
                                {
                                    previous && (<button className="bg-slate-500 py-1 px-2 border text-white hover:bg-gray-700 focus:outline-none" onClick={e => previousPage(previous)} >
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
                                        <button onClick={e => nextPage(next)} className="bg-slate-500 py-1 px-2 border text-white hover:bg-gray-700  focus:outline-none">
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
                </div>


            </div>
        </Layout>

    )
}

export default Store