import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import {  HeartIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/solid'
const NavBarItenIcom: FunctionComponent<{ openUser: () => void }> = ({ openUser }) => {


    return (
        <div className='flex'>
            <div className='w-full '>
                <button onClick={openUser} >
                    <div className={`flex justify-between mx-6  hover:text-white   `}>
                        <HeartIcon className='h-6 w-6 ' />
                    </div>

                </button>
            </div>
            <div className='w-full '>
                <Link href={"/cart"}>
                    <a>
                        <div className={`flex justify-between mx-6  hover:text-white   `}>
                            <ShoppingCartIcon className='h-6 w-6 ' />
                        </div>
                    </a>

                </Link>
            </div>
           
            <div className='w-full'>
                <button onClick={openUser} >
                    <div className={`flex justify-between mx-6  hover:text-white   `}>
                        <UserIcon className='h-6 w-6 ' />
                    </div>

                </button>
            </div>
        </div>
    )
}

export default NavBarItenIcom