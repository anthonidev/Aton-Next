import Image from 'next/image'
import React, { FunctionComponent } from 'react'
import {TiDelete} from 'react-icons/ti'
import { motion } from 'framer-motion';


const SidebarOpen: FunctionComponent<{
    closeModal: () => void,

}> = ({ closeModal }) => {

    return (

        <motion.div animate={{ x: [-150, 0], opacity: [0, 1], }}
            transition={{ duration: 0.4, type: 'spring', delay: 0.1 }} className={` bg-plo-100 min-h-screen  w-5/6  top-0 fixed inset-0 flex z-40 md:hidden`} >
            <div className="relative flex-1 flex flex-col items-center  w-full mt-5 ">
                {/* <div className="dark:hidden flex-shrink-0 flex items-center px-4 ">
                    <Image
                        className="h-8 w-auto sm:h-10"
                        src={"/assets/images/logo4.png"}

                        height="70px"
                        width="70px"
                        layout="intrinsic"
                        alt='logo aton'
                        quality={100}
                    />
                </div> */}
               
              
              



            </div>
            <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full  bg-rou focus:outline-none hover:bg-pri-100"
                    onClick={closeModal}
                >
                    <span className="sr-only">Close navbar</span>
                    <TiDelete className="h-10 w-10 text-white " aria-hidden="true" />
                </button>
            </div>
        </motion.div>


    )
}

export default SidebarOpen