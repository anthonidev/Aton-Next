import React, { FunctionComponent } from 'react'
import { UserCircleIcon, XIcon } from '@heroicons/react/solid'

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
            transition={{ duration: 0.4, type: 'spring', delay: 0.1 }} className={`bg-slate-300 md:w-1/3 w-full  md:-mx-4 -mx-9 lg:w-3/12 right-0 top-0 z-40 fixed h-full rounded-md `} >
            <div className='  flex h-full'>

                {isAuthenticated ? (
                    <div className="  flex-1 flex flex-col items-center   mt-5 justify-evenly space-y-4 ">
                        <div className=''>
                            <div className='my-6' >
                                <Link href={'/account/main'}>
                                    <a className='hover:text-rou text-gray-600 font-bol text-lg flex justify-start items-center  border-2 border-gray-400 bg-white rounded py-2 px-4 ' >
                                        <UserCircleIcon className='h-6 w-6' />
                                        <span className='ml-4' >Mi cuenta</span>
                                    </a>
                                </Link>
                            </div>

                            {
                                AccountMain.map((item, index) => {
                                    return (
                                        <div className='my-6' key={index}>
                                            <Link href={item.url}>
                                                <a className='hover:text-rou  text-gray-600 font-bol text-lg flex justify-start items-center border-2 border-gray-400 bg-white rounded py-2 px-4 ' >
                                                    <div className='h-6 w-6'>
                                                        {item.icon}
                                                    </div>
                                                    <span className='ml-4' >{item.text}</span>
                                                </a>

                                            </Link>
                                        </div>

                                    )
                                })
                            }
                        </div>


                        <button onClick={logoutHandler}
                        >
                            <span className="font-bold text-lg border-2 border-red-200 hover:text-white transition-colors bg-red-600 hover:bg-red-800 text-red-300 p-3 rounded-md ">
                                Cerrar sesión
                            </span>
                        </button>
                    </div>


                ) : (

                    <div className="  flex-1 flex flex-col items-center   mt-5 justify-evenly space-y-4 ">
                        <div className=''>
                            <div className='my-6' >
                                <Link href={'/auth/login'}>
                                    <a className='hover:text-rou text-gray-600 font-bol text-lg flex justify-start items-center  border-2 border-gray-400 bg-white rounded py-2 px-4 ' >
                                        <UserCircleIcon className='h-6 w-6' />
                                        <span className='ml-4' >Iniciar sesión</span>
                                    </a>
                                </Link>
                            </div>



                            <div className='my-6' >
                                <Link href={'/auth/signup'}>
                                    <a className='hover:text-rou text-gray-600 font-bol text-lg flex justify-start items-center  border-2 border-gray-400 bg-white rounded py-2 px-4 ' >
                                        <UserCircleIcon className='h-6 w-6' />
                                        <span className='ml-4' >Registrarse</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                )}

                <div className="absolute top-0 left-0 -mr-12 pt-2">
                    <button
                        type="button"
                        className="ml-1 flex items-center justify-center  focus:outline-none "
                        onClick={closeUser}
                    >
                        <XIcon className="h-10 w-10 text-red-600 hover:text-gray-700 " aria-hidden="true" />
                    </button>
                </div>
            </div>

        </motion.div>


    )
}

export default SidebarUser