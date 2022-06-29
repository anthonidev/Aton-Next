import { HomeIcon, MenuIcon, SearchIcon, ShoppingBagIcon, ShoppingCartIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cart_sidebar_on } from '../../../redux/slice/cartSlice'
import { AppDispatch, RootState } from '../../../redux/store'

const NavbarMovile: FunctionComponent<{
    openModal: () => void
}> = ({ openModal }) => {
    const total_items = useSelector((state: RootState) => state.cart.total_items)
    const dispatch: AppDispatch = useDispatch()


    return (

        <div className="bg-gray-900 md:hidden py-1 flex justify-between px-2 sticky top-0 z-30 ">
            <button
                type="button"
                onClick={openModal}
                className=" border-gray-200  text-let-100 focus:outline-none hover:text-white  md:hidden"
            >
                <MenuIcon className='h-6 w-6 ' />
                <span className="sr-only">Open navbar</span>
            </button>
            <Link href='/store'>
                <a className="flex items-center justify-center text-white px-4 py-2  rounded space-x-2 text-sm">
                    <ShoppingBagIcon className="h-4 w-4" />
                    <span>Tienda</span>
                </a>
            </Link>
            {/* <form>
                <div className='flex bg-white  items-center p-1 border border-plo-100 rounded'>
                    <input type="text" className='focus:outline-none text-gray-600 text-xs' placeholder='Busqueda en catálogo' />
                    <SearchIcon className='h-4 w-4 text-let  ' />
                </div>

            </form> */}
            <div className=' flex items-center'>
                <button aria-label='Ver carrito de aton store ' onClick={() => dispatch(cart_sidebar_on())} className={`flex justify-between mr-3 text-white relative pr-3 `}>
                    <ShoppingCartIcon className='h-6 w-6 ' />
                    {
                        total_items !== 0 && <span className="bg-rou text-white absolute right-0 top-0 rounded-full px-1 text-xs ">{total_items}</span>
                    }
                </button>

            </div>
        </div>

    )
}

export default NavbarMovile