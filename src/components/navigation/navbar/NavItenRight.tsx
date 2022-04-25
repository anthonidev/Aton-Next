import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FunctionComponent } from 'react'
import { NavbarIten } from '../../../types/types'
import { motion } from 'framer-motion';

const NavItenRight: FunctionComponent<{ iten: NavbarIten }> = ({ iten: {
    name,
    to,
    Icon
} }) => {
    const { pathname } = useRouter()
    const noSelect = ' text-let-100  border-let '
    const select = 'text-dev  border-dev  '



    return (
        <>
            <div className='w-full '>
                <Link href={to}>
                    <a>
                        <div className={`flex justify-between mx-6  hover:text-white ${pathname === to ? select : noSelect}  `}>
                            <Icon className='h-6 w-6 ' />
                        </div>
                    </a>

                </Link>
            </div>

        </>
    )
}

export default NavItenRight