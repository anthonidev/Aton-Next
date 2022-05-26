import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import { HeartIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/solid'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
const NavBarItenIcom: FunctionComponent<{
    openUser: () => void
    openCart: () => void
}> = ({ openUser, openCart }) => {

    const total_items = useSelector((state: RootState) => state.cart.total_items)

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
                    <button onClick={openCart}>
                        <div className={`flex justify-between mx-6  hover:text-white relative px-3 `}>
                            <ShoppingCartIcon className='h-6 w-6 ' />
                            {
                                total_items !== 0 && <span className="bg-rou text-white absolute right-0 top-0 rounded-full px-1 text-xs ">{total_items}</span>
                            }

                        </div>
                    </button>

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