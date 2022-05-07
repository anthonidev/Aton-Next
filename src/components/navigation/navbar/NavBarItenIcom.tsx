import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import { BeakerIcon } from '@heroicons/react/solid'
const NavBarItenIcom: FunctionComponent<{ openUser: () => void }> = ({ openUser }) => {


    return (
        <div className='flex'>
            <div className='w-full '>
                <button onClick={openUser} >
                    <div className={`flex justify-between mx-6  hover:text-white   `}>
                        <BeakerIcon className='h-6 w-6 ' />
                    </div>

                </button>
            </div>
            <div className='w-full '>
                <Link href={"/"}>
                    <a>
                        <div className={`flex justify-between mx-6  hover:text-white   `}>
                            <BeakerIcon className='h-6 w-6 ' />
                        </div>
                    </a>

                </Link>
            </div>
           
            <div className='w-full '>
                <button onClick={openUser} >
                    <div className={`flex justify-between mx-6  hover:text-white   `}>
                        <BeakerIcon className='h-6 w-6 ' />
                    </div>

                </button>
            </div>
        </div>
    )
}

export default NavBarItenIcom