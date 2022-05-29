import React, { FunctionComponent, useEffect, useState } from 'react'
import { MainNav, NavbarItensIcons } from '../../../utils/helpers/data'
import { ChevronRightIcon, MenuIcon } from '@heroicons/react/solid'
import NavItem from './NavItem';
import NavItenRight from './NavItenRight';
import NavBarItenIcom from './NavBarItenIcom';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { brandsAll, categoriesAll } from '../../../redux/api/product';
import { AppDispatch, RootState } from '../../../redux/store';

const Navbar: FunctionComponent<{
  openUser: () => void
}> = ({ openUser }) => {

  const dispatch: AppDispatch = useDispatch()
  useEffect(() => {
    dispatch(categoriesAll())
    dispatch(brandsAll())
  }, [dispatch])
  const [viewCategories, setViewCategories] = useState<boolean>(false)
  const [viewBrands, setViewBrands] = useState<boolean>(false)
  const categories = useSelector((state: RootState) => state.product.categories);
  const brands = useSelector((state: RootState) => state.product.brands);

  return (
    <div className="sticky top-0 z-30 ">

      <div className=" md:flex md:flex-shrink-0 hidden  m-auto  h-12 bg-gray-900">

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
                              <Link href={'/brand/' + brand.id}>

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

export default Navbar