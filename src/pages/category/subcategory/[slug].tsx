import { ArrowLeftIcon, ArrowRightIcon, ChevronRightIcon, FilterIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Brands from '../../../components/form/Brands';
import Layout from '../../../components/layout/Layout';
import { Breadcrumb } from '../../../components/navigation/Breadcrumb';
import ProductCard from '../../../components/product/ProductCard';
import FilterPrice from '../../../components/store/FilterPrice';
import MoreFilters from '../../../components/store/MoreFilters';
import { category_products, get_filtered_products, get_pages_products, get_subcategory } from '../../../redux/api/product';
import { RootState } from '../../../redux/store';
import { FormFilter, Product } from '../../../utils/types/interface';

const Category = () => {
    const router = useRouter()
    const { slug } = router.query
    const dispatch = useDispatch();
    console.log(router.asPath);

    useEffect(() => {
        if (slug !== undefined) {
            dispatch(category_products("/category/" + slug));
            dispatch(get_subcategory(router.asPath));
        }

    }, [router.asPath, slug]);

    const products = useSelector((state: RootState) => state.product.products);
    const count = useSelector((state: RootState) => state.product.count)
    const next = useSelector((state: RootState) => state.product.next)
    const previous = useSelector((state: RootState) => state.product.previous)
    const navigationOn = 'bg-white rounded-md  hover:bg-blue-500  hover:text-white px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform'
    const navigationOff = 'bg-gray-200 cursor-not-allowed px-4 py-2 mx-1 text-gray-500 capitalize  rounded-md '
    const subCat = useSelector((state: RootState) => state.product.subcategory);


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

    const onChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>): void => setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(get_filtered_products(formData.brandsform, formData.categoriesform, formData.order, formData.sort_by, formData.price_range));
        SetMobileFilter(false)

    };
    return (
        <Layout title='Aton | Categoria' content='tienda de aton productos de tecnologia ' >

            <div className="max-w-7xl container mx-auto px-6 pt-7   ">


                <div className="flex">
                    <form onSubmit={e => onSubmit(e)} className='lg:w-1/4 sm:w-1/3 bg-white rounded-md p-5  hidden sm:block'>

                        <div className='text-xl flex space-x-3 text-gray-800 items-center font-semibold'>
                            <FilterIcon className='h-5 w-5' />
                            <p>{subCat?.title}</p>
                        </div>

                        <Brands formdata={formData.brandsform} />
                        <div className=' my-5 '></div>

                        <FilterPrice price_range={formData.price_range} onChange={onChange} />
                        <div className=' my-5 '></div>

                        <MoreFilters sort_by={formData.sort_by} order={formData.order} onChange={onChange} />
                        <div className=' my-5 '></div>



                    </form>
                    <div className='lg:w-3/4 sm:w-2/3 p-6 w-full'>
                        <div className='mb-4 text-pri flex justify-between items-center w-full'>
                            <p className='text-xl font-semibold w-1/2'>{count} productos</p>
                            <Breadcrumb >
                                <>
                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-current">
                                            <path d="M32 30.031h-32l16-28.061z"></path>
                                        </svg>
                                        <Link href={'/category/' + subCat?.get_parent_slug}><a rel="noopener noreferrer" className="flex items-center px-1 capitalize hover:underline">{subCat?.get_parent}</a></Link>

                                    </li>

                                    <li className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-current ">
                                            <path d="M32 30.031h-32l16-28.061z"></path>
                                        </svg>
                                        <a rel="noopener noreferrer" href="#" className="flex items-center px-1 capitalize  cursor-default">{subCat?.title}</a>
                                    </li>
                                </>
                            </Breadcrumb>
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
                </div>


            </div>
        </Layout>
    )
}

export default Category