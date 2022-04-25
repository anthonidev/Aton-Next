import React from 'react'
import { MainNav, } from '../../../helpers/data'
import { GiHamburgerMenu } from "react-icons/gi";
import NavItem from './NavItem';
import { RiSearchLine } from "react-icons/ri";


const NavBartMain = () => {
    return (
        <div className="sticky   m-auto top-0 z-10 flex-shrink-0 flex h-14  ">

            <button
                type="button"
                className="px-4 border-gray-200 text-gray-500 focus:outline-none hover:text-white  md:hidden"
            >
                <GiHamburgerMenu className='h-8 w-8' />
                <span className="sr-only">Open navbar</span>
            </button>

            <div className="  hidden   flex-1  md:flex items-center justify-around space-x-2 z-40 bg-white ">
                <div className='flex  text-lg text-pri'>
                    {
                        MainNav.map((iten, index) => (<NavItem key={index} iten={iten} type={"main"} />))
                    }
                </div>
                <form>
                    <div className='flex bg-white  items-center p-2 border border-plo-100'>
                        <label htmlFor=""></label>
                        <input type="text" />
                        <RiSearchLine className='h-4 w-4' />
                    </div>

                </form>




            </div>
        </div>
    )
}

export default NavBartMain