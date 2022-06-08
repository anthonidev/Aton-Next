import Image from 'next/image'
import React, { FunctionComponent } from 'react'
import { BeakerIcon, ChevronRightIcon, XIcon } from '@heroicons/react/solid'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { logout } from '../../../redux/api/auth';
import { AccountMain } from '../../../pages/account/main';


const SidebarUser: FunctionComponent<{
    closeUser: () => void,

}> = ({ closeUser }) => {
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    const logoutHandler = () => {
        dispatch(logout())
    }
    return (

        <motion.div animate={{ x: [150, 0], opacity: [0, 1], }}
            transition={{ duration: 0.4, type: 'spring', delay: 0.1 }} className={`bg-gray-300 md:w-1/3 w-full  -mx-9 lg:w-3/12 right-0 top-0 z-40 fixed h-full rounded-md `} >
            <div className='  flex h-full'>

                {isAuthenticated ? (
                    <div className="  flex-1 flex flex-col items-center   mt-5 justify-around space-y-4 ">
                        <div className=''>
                            <div className='my-4' >
                                <Link href={'/account/main'}>
                                    <a className='hover:text-gray-900 text-gray-600 text-lg ' >
                                        <span >Mi cuenta</span>
                                    </a>
                                </Link>
                            </div>

                            {
                                AccountMain.map((item, index) => {
                                    return (
                                        <div className='my-4' key={index}>
                                            <Link href={item.url}>
                                                <a className='hover:text-gray-900 text-gray-600 text-lg' >
                                                    <span >{item.text}</span>
                                                </a>

                                            </Link>
                                        </div>

                                    )
                                })
                            }
                        </div>


                        <button onClick={logoutHandler}
                        >
                            <span className="font-bold text-lg border-2 border-rou text-rou hover:text-red-500 p-3 rounded-md ">
                                Cerrar sesión
                            </span>
                        </button>
                    </div>


                ) : (
                    <div className="  flex-1 flex flex-col items-center   mt-5 justify-center space-y-4 ">
                        <Link href="/auth/login">
                            <a className="font-bold text-lg border-2 border-pri text-pri hover:text-indigo-500 p-3 rounded-md">
                                Ingresar
                            </a>
                        </Link>
                        <Link href="/auth/signup">
                            <a className="font-bold text-lg border-2 border-pri text-pri hover:text-indigo-500 p-3 rounded-md">
                                Registrarce
                            </a>
                        </Link>


                    </div>
                )}

                <div className="absolute top-0 left-0 -mr-12 pt-2">
                    <button
                        type="button"
                        className="ml-1 flex items-center justify-center  focus:outline-none "
                        onClick={closeUser}
                    >
                        <XIcon className="h-10 w-10 text-red-600 hover:text-pri " aria-hidden="true" />
                    </button>
                </div>
            </div>

        </motion.div>


    )
}

export default SidebarUser