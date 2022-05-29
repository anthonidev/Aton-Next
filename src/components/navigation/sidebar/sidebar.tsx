import Image from 'next/image'
import React, { FunctionComponent, useState } from 'react'
import { motion } from 'framer-motion';
import { BeakerIcon, ChevronDownIcon, XIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { Brand, Category } from '../../../utils/types/interface';
import CategorySidebar from './CategorySidebar';


const SidebarOpen: FunctionComponent<{
    closeModal: () => void,

}> = ({ closeModal }) => {
    const categories = useSelector((state: RootState) => state.product.categories);
    const brands = useSelector((state: RootState) => state.product.brands);
    const [view, setView] = useState(false)

    return (

        <motion.div animate={{ x: [-150, 0], opacity: [0, 1], }}
            transition={{ duration: 0.4, type: 'spring', delay: 0.1 }} className={` bg-gray-200 min-h-screen  w-5/6  top-0 fixed inset-0 flex z-40 md:hidden overflow-y-auto`} >
            <div className="relative mt-3 w-full">
                <div className="mt-3  ml-3 flex justify-between">
                    <Link href={'/'} >
                        <a >
                            <Image
                                className="h-8 w-auto sm:h-10"
                                src={"/assets/images/lightLogo.png"}
                                height="50px"
                                width="128px"
                                layout="intrinsic"
                                alt='logo aton'
                                quality={100}
                            />
                        </a>
                    </Link>
                    <div className="relative mr-2">
                        <button
                            type="button"
                            className=" flex items-center justify-center h-8 w-8 rounded-full  bg-rou focus:outline-none hover:bg-pri-100"
                            onClick={closeModal}
                        >
                            <span className="sr-only">Close navbar</span>
                            <XIcon className="h-8 w-8 text-white " aria-hidden="true" />
                        </button>
                    </div>
                </div>

                {
                    categories?.map((category: Category) => (
                        <div key={category.id}>
                            <CategorySidebar category={category} />
                            <div className='my-5 '></div>
                        </div>

                    ))
                }


                <div className='mt-3 '>
                    <div className='text-gray-900 text-sm flex justify-between items-center bg-gray-100 px-1 py-3 border-y-2 border-gray-200 '>
                        <h2 className='font-bold mx-2 '>Marcas</h2>
                        <a onClick={() => setView(!view)} className="focus:outline-none cursor-pointer">
                            <ChevronDownIcon className='w-5 h-5 ' />
                        </a>
                    </div>
                    <div className="ml-4 my-3">
                        {
                            view && brands?.map((brand: Brand) => (
                                <h2 className='font-bold text-black' key={brand.id}>{brand.title}</h2>


                            ))
                        }
                    </div>

                </div>






            </div>

        </motion.div>


    )
}

export default SidebarOpen