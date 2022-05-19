import React, { FunctionComponent, useEffect, useState } from 'react'
import { MainNav, NavbarItensIcons, NavbarItensMain } from '../../../utils/helpers/data'
import { ChevronLeftIcon, ChevronRightIcon, MenuIcon } from '@heroicons/react/solid'
import NavItem from './NavItem';
import NavItenRight from './NavItenRight';
import NavBarItenIcom from './NavBarItenIcom';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { brandsAll, categoriesAll } from '../../../redux/api/product';
import { RootState } from '../../../redux/store';

const navbar: FunctionComponent<{ openModal: () => void, openUser: () => void }> = ({ openModal, openUser }) => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(categoriesAll())
    dispatch(brandsAll())

  }, [])
  const [viewCategories, setViewCategories] = useState<boolean>(false)
  const [viewBrands, setViewBrands] = useState<boolean>(false)
  const categories = useSelector((state: RootState) => state.product.categories);
  const brands = useSelector((state: RootState) => state.product.brands);


  return (
    <div>

      <div className="sticky   m-auto top-0 z-10 flex-shrink-0 flex h-12 bg-gray-900">

        <div className='md:hidden flex justify-between items-center w-full  '>
          <button
            type="button"
            onClick={openModal}
            className="px-4 border-gray-200  text-let-100 focus:outline-none hover:text-white  md:hidden"
          >
            <MenuIcon className='h-8 w-8 ' />
            <span className="sr-only">Open navbar</span>
          </button>
          <h1 className='text-let-100 text-center font-bold'>ATON</h1>
          <div className='flex  '>
            {
              NavbarItensIcons.map((iten, index) => (<NavItenRight key={index} iten={iten} />))
            }
          </div>

        </div>

        <div className="  hidden   flex-1  md:flex items-center justify-between space-x-2 z-40 bg-gray-900 max-w-7xl mx-auto px-6">
          <div className='flex  text-lg text-pri space-x-10 justify-between items-center'>
            {
              MainNav.map((iten, index) => (<NavItem key={index} iten={iten} type={"main"} />))
            }
            <div className='md:block hidden'>
              <div className={`  font-semibold text-plo  `} onMouseOver={() => setViewCategories(true)} onMouseLeave={() => setViewCategories(false)}>
                <span className=' text-white cursor-pointer ' >Categoria</span>

                {
                  viewCategories && (
                    <div className='absolute   pt-4 left-0 right-0 xl:mx-96 md:mx-0'>
                      <div className='grid grid-cols-3 py-4 px-5 gap-5  bg-white shadow'>

                        {
                          categories?.map((category) => (
                            <div key={category.id}>
                              <Link href={'/category/' + category.slug}>

                                <a className="text-plo  flex justify-start items-center hover:text-rou" >
                                  <ChevronRightIcon className='h-4 w-4' />
                                  <span className='uppercase'>  {category.title}</span>
                                </a>
                              </Link>
                            </div>

                          ))
                        }
                      </div>


                    </div>)
                }



              </div>

            </div>
            <div className='md:block hidden'>
              <div className={`   font-semibold text-plo  `} onMouseOver={() => setViewBrands(true)} onMouseLeave={() => setViewBrands(false)}>
                <span className='text-white cursor-pointer ' >Marcas</span>

                {
                  viewBrands && (
                    <div className='absolute   pt-4 left-0 right-0 xl:mx-96 md:mx-0 '>
                      <div className='grid grid-cols-3 py-4 px-5 gap-5  bg-white shadow'>

                        {
                          brands?.map((brand) => (
                            <div key={brand.id}>
                              <Link href={'/' + brand}>

                                <a className="text-plo  flex justify-start items-center hover:text-rou" >
                                  <ChevronRightIcon className='h-4 w-4' />
                                  <span className='uppercase'>  {brand.title}</span>
                                </a>
                              </Link>
                            </div>

                          ))
                        }
                      </div>

                    </div>
                  )
                }



              </div>

            </div>
          </div>


          <div className='flex text-plo'>
            <NavBarItenIcom openUser={openUser} />
          </div>
        </div>
      </div>


    </div>

  )
}

export default navbar