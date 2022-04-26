import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import { FaHeart } from 'react-icons/fa'
import { RiShoppingCartFill, RiUser3Fill } from 'react-icons/ri'

const NavBarItenIcom: FunctionComponent<{ openUser: () => void }> = ({ openUser }) => {


    return (
        <div className='flex'>
            <div className='w-full '>
                <button onClick={openUser} >
                    <div className={`flex justify-between mx-6  hover:text-white   `}>
                        <FaHeart className='h-6 w-6 ' />
                    </div>

                </button>
            </div>
            <div className='w-full '>
                <Link href={"/"}>
                    <a>
                        <div className={`flex justify-between mx-6  hover:text-white   `}>
                            <RiShoppingCartFill className='h-6 w-6 ' />
                        </div>
                    </a>

                </Link>
            </div>
           
            <div className='w-full '>
                <button onClick={openUser} >
                    <div className={`flex justify-between mx-6  hover:text-white   `}>
                        <RiUser3Fill className='h-6 w-6 ' />
                    </div>

                </button>
            </div>
        </div>
    )
}

export default NavBarItenIcom