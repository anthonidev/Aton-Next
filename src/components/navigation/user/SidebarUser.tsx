import Image from 'next/image'
import React, { FunctionComponent } from 'react'
import { TiDelete } from 'react-icons/ti'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { logout } from '../../../hooks/auth';


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
            transition={{ duration: 0.4, type: 'spring', delay: 0.1 }} className={`bg-plo-300  -mx-9 w-2/12  right-0 top-12 z-40 fixed  h-1/3 rounded-md `} >
            <div className='  flex h-full'>

                {isAuthenticated ? (
                    <div className="  flex-1 flex flex-col items-center   mt-5 justify-center space-y-4 ">
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
                        <TiDelete className="h-10 w-10 text-plo hover:text-pri " aria-hidden="true" />
                    </button>
                </div>
            </div>

        </motion.div>


    )
}

export default SidebarUser