import React from 'react'
import { SearchIcon, UserIcon } from '@heroicons/react/solid'
import Image from 'next/image';
import Link from 'next/link';
import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';

const NavBartMain = () => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    return (

        <div className="  hidden    m-auto top-0 z-10 flex-shrink-0 md:flex h-20 bg-white  ">

            <div className="  flex-1  md:flex items-center justify-between  z-40 max-w-7xl mx-auto px-6">
                <Link href={'/'}>
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

                {/* <form>
                    <div className='flex bg-white  items-center p-2 border border-plo-100'>
                        <label></label>
                        <input type="text" className='focus:outline-none text-gray-600' placeholder='Busqueda en catálogo' />
                        <SearchIcon className='h-4 w-4 text-let ' />
                    </div>

                </form> */}
                {
                    !isAuthenticated && (
                        <div className='flex justify-end '>
                            <div className='flex  '>

                                <Link href="/auth/login">
                                    <a className=" flex mt-1 mr-2 border p-1 border-gray-700 rounded hover:text-red-600 focus:text-red-600 text-gray-700">
                                        <UserIcon className='h-4 w-4 ' />
                                        <span className='text-sm' >Iniciar sesión</span>
                                    </a>

                                </Link>
                            </div>
                            <div className='flex justify-end  '>

                                <Link href="/auth/signup">
                                    <a className=" flex mt-1 mr-2 border p-1 border-gray-700 rounded hover:text-red-600 focus:text-red-600 text-gray-700">
                                        <UserIcon className='h-4 w-4 ' />
                                        <span className='text-sm' >Registrarce</span>
                                    </a>

                                </Link>
                            </div>
                        </div>
                    )
                }



            </div>
        </div>
    )
}

export default NavBartMain