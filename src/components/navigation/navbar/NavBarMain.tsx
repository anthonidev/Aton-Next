import React from 'react'
import { SearchIcon, UserIcon } from '@heroicons/react/solid'
import Image from 'next/image';
import Link from 'next/link';

const NavBartMain = () => {
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

                <form>
                    <div className='flex bg-white  items-center p-2 border border-plo-100'>
                        <label></label>
                        <input type="text" className='focus:outline-none text-gray-600' placeholder='Busqueda en catálogo' />
                        <SearchIcon className='h-4 w-4 text-let ' />
                    </div>

                </form>

                <button className=" px-2 py-1 flex  justify-center items-center space-x-2 text-plo border-pri/70 border-2 hover:bg-pri-100 hover:text-white">
                    <UserIcon className='h-4 w-4 ' />
                    <span>Iniciar sesión</span>
                </button>


            </div>
        </div>
    )
}

export default NavBartMain