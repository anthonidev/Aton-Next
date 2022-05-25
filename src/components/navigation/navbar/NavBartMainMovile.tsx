import { UserIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

const NavBartMainMovile:FunctionComponent<{ openUser: () => void }> = ({ openUser })=> {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    return (
        <div className='md:hidden bg-gray-100 '>
            {
                isAuthenticated ? (
                    <div className='flex justify-end  '>
                        <button onClick={openUser} className=" flex mt-1 mr-2 border p-1 border-gray-700 rounded hover:text-red-600 focus:text-red-600 text-gray-700">
                            <UserIcon className='h-4 w-4 ' />
                            <span className='text-xs' >Mi cuenta</span>
                        </button>
                    </div>
                ) : (
                    <div className='flex justify-end '>
                        <div className='flex  '>

                            <Link href="/auth/login">
                                <a className=" flex mt-1 mr-2 border p-1 border-gray-700 rounded hover:text-red-600 focus:text-red-600 text-gray-700">
                                    <UserIcon className='h-4 w-4 ' />
                                    <span className='text-xs' >Iniciar sesión</span>
                                </a>

                            </Link>
                        </div>
                        <div className='flex justify-end  '>

                            <Link href="/auth/signup">
                                <a className=" flex mt-1 mr-2 border p-1 border-gray-700 rounded hover:text-red-600 focus:text-red-600 text-gray-700">
                                    <UserIcon className='h-4 w-4 ' />
                                    <span className='text-xs' >Registrarce</span>
                                </a>

                            </Link>
                        </div>
                    </div>

                )
            }

            <div className='flex justify-center'>
                <Link href={'/'}>
                    <a >
                        <Image
                            src={"/assets/images/lightLogo.png"}
                            height="50px"
                            width="128px"
                            layout="intrinsic"
                            alt='logo aton'
                            quality={100}
                        />
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default NavBartMainMovile