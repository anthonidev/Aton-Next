import React from 'react'
import { NavbarItensIcons, NavbarItensMain } from '../../../helpers/data'
import { GiHamburgerMenu } from "react-icons/gi";
import NavItem from './NavItem';
import NavItenRight from './NavItenRight';

const navbar = () => {
  return (
    <div className="sticky   m-auto top-0 z-10 flex-shrink-0 flex h-12  ">

      <button
        type="button"
        className="px-4 border-gray-200 text-gray-500 focus:outline-none hover:text-white  md:hidden"
      >
        <GiHamburgerMenu className='h-8 w-8' />
        <span className="sr-only">Open navbar</span>
      </button>

      <div className="  hidden   flex-1  md:flex items-center justify-around space-x-2 z-40 bg-pri ">
        <div className='flex  text-base '>
          {
            NavbarItensMain.map((iten, index) => (<NavItem key={index} iten={iten} type={"top"}/>))
          }
        </div>
        <div className='flex'>
          <h1 className='text-plo text-2xl'>ATON</h1>
        </div>
        <div className='flex'>
          {
            NavbarItensIcons.map((iten, index) => (<NavItenRight key={index} iten={iten} />))
          }
        </div>



      </div>
    </div>
  )
}

export default navbar