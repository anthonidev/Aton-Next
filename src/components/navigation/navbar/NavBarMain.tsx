import React from 'react'
import { MainNav, } from '../../../helpers/data'
import NavItem from './NavItem';
import { BeakerIcon } from '@heroicons/react/solid'


const NavBartMain = () => {
    return (
        <div className="sticky  hidden    m-auto top-0 z-10 flex-shrink-0 md:flex h-14  ">



            <div className="  flex-1  md:flex items-center justify-evenly space-x-2 z-40 bg-white ">
                <div className='flex  text-lg text-pri space-x-5 justify-center items-center'>
                    {
                        MainNav.map((iten, index) => (<NavItem key={index} iten={iten} type={"main"} />))
                    }
                </div>
                <form>
                    <div className='flex bg-white  items-center p-2 border border-plo-100'>
                        <label htmlFor=""></label>
                        <input type="text" className='focus:outline-none text-gray-600' placeholder='Buscar' />
                        <BeakerIcon className='h-4 w-4 text-let ' />
                    </div>

                </form>




            </div>
        </div>
    )
}

export default NavBartMain