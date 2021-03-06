import React, { FunctionComponent, useEffect, useState } from 'react'
import { MainNav } from '../../../utils/helpers/data'
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/solid';
import NavItem from './NavItem';
import NavBarItenIcom from './NavBarItenIcom';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { brandsAll, categoriesAll } from '../../../redux/api/product';
import { AppDispatch, RootState } from '../../../redux/store';
import Image from 'next/image';

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
              <div className={`   `} onMouseOver={() => setViewCategories(true)} onMouseLeave={() => setViewCategories(false)}>
                <div className={`flex font-semibold tracking-wide cursor-default  hover:text-rou  ${viewCategories ? "text-rou" : "text-white transition-colors"}`} >
                  <span>Categorias</span>
                  <ChevronDownIcon className=" h-6 w-6" />
                </div>

                {
                  viewCategories && (
                    <div className='  z-auto overflow-y-scroll '>
                      <div className='absolute   pt-4 left-0 right-0 md:mx-0 p-1  '>
                        <div className='grid grid-cols-3 py-4 px-5 gap-5 bg-white shadow '>

                          {
                            categories && categories?.map((category) => (
                              <div key={category.id}>
                                
                                <div className='flex  border rounded'>
                                  {
                                    category.children && category.children.map((child) => (
                                      <div key={child.id} className='mx-4 my-2 space-y-2  py-2 px-4 rounded hover:bg-red-50'>
                                        <Link href={'/category/' + child.slug}>
                                          <a className=' flex flex-col justify-center items-center'>
                                            <Image
                                              className="aspect-video object-cover "
                                              src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${child.photo}`}
                                              layout="fixed"
                                              height={60}
                                              width={60}
                                              quality={50}
                                              alt={child.title}
                                            />
                                            <span className='hover:text-gray-900 flex space-x-3 items-center tracking-wider font-bol text-gray-700 text-sm'>
                                              {child.title}
                                            </span>
                                          </a>
                                        </Link>
                                      </div>
                                    ))

                                  }
                                </div>

                              </div>



                            ))
                          }
                          <div className='py-4 ' >
                            <Link href={'/store'}>
                              <a className='text-gray-700 bg-gray-200 py-2 px-4  rounded border-2 hover:bg-gray-300'>Ver todos los productos</a>
                            </Link>
                          </div>
                        </div>


                      </div>
                    </div>
                  )
                }


              </div>

            </div>
            <div className='md:block hidden'>
              <div className={`   font-semibold text-plo  `} onMouseOver={() => setViewBrands(true)} onMouseLeave={() => setViewBrands(false)}>
                <div className={`flex items-center font-semibold tracking-wide cursor-default hover:text-rou  ${viewBrands ? "text-rou" : "text-white transition-colors"}`} >

                  <span> Marcas</span>
                  <ChevronDownIcon className=" h-6 w-6" />
                </div>

                {
                  viewBrands && (
                    <div className='absolute   pt-4 left-0 right-0  p-2 '>
                      <div className='grid grid-cols-3 py-4 px-5 gap-5  bg-white shadow '>

                        {
                          brands?.map((brand) => (
                            <div key={brand.id} className="py-2 ">
                              <Link href={'/brand/' + brand.id}>

                                <a className="text-gray-700 tracking-wider  flex justify-start items-center hover:text-rou" >
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


    </div >

  )
}

export default Navbar