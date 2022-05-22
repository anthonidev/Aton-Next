import { UserIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBartMainMovile = () => {
    return (
        <div className='md:hidden bg-gray-100 '>
            <div className='flex justify-end  '>
                <button className=" flex mt-1 mr-2 border p-1 border-gray-700 rounded hover:text-red-600 focus:text-red-600 text-gray-700">
                    <UserIcon className='h-4 w-4 ' />
                    <span className='text-xs' >Iniciar sesión</span>
                </button>
            </div>
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