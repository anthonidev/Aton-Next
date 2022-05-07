import React, { FunctionComponent } from 'react'
import { NavbarItensIcons, NavbarItensMain } from '../../../helpers/data'
import { MenuIcon} from '@heroicons/react/solid'
import NavItem from './NavItem';
import NavItenRight from './NavItenRight';
import NavBarItenIcom from './NavBarItenIcom';

const navbar: FunctionComponent<{ openModal: () => void, openUser: () => void }> = ({ openModal,openUser }) => {
  return (
    <div className="sticky   m-auto top-0 z-10 flex-shrink-0 flex h-12  ">
      <div className='md:hidden flex justify-between items-center w-full bg-pri'>
        <button
          type="button"
          onClick={openModal}
          className="px-4 border-gray-200  text-let-100 focus:outline-none hover:text-white  md:hidden"
        >
          <MenuIcon className='h-8 w-8 ' />
          <span className="sr-only">Open navbar</span>
        </button>
        <h1 className='text-let-100 text-center font-bold'>ATON</h1>
        <div className='flex  '>
          {
            NavbarItensIcons.map((iten, index) => (<NavItenRight key={index} iten={iten} />))
          }
        </div>

      </div>


      <div className="  hidden   flex-1  md:flex items-center justify-around space-x-2 z-40 bg-pri ">
        <div className='flex  text-base text-let'>
          {
            NavbarItensMain.map((iten, index) => (<NavItem key={index} iten={iten} type={"top"} />))
          }
        </div>
        <div className='flex'>
          <h1 className='text-plo text-2xl'>ATON</h1>
        </div>
        <div className='flex text-plo'>
          <NavBarItenIcom openUser={openUser}/>
        </div>



      </div>
    </div>
  )
}

export default navbar