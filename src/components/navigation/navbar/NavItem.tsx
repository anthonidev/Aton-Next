import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FunctionComponent } from 'react'
import { NavbarIten } from '../../../types/types'
import { motion } from 'framer-motion';

const NavItem: FunctionComponent<{ iten: NavbarIten, type: string }> = ({ iten: {
    name,
    to,
    Icon,
}, type }) => {
    let hover, select, noSelect
    const { pathname } = useRouter()

    if (type === "main") {
        hover = 'hover:text-pri-100'
        select = 'text-let '
        noSelect=' '

    }
    if (type === "top") {
        select = 'text-let  '
        hover = 'hover:text-white'
    }


    return (
        <>

            <div className='md:block hidden'>
                <Link href={to}>
                    <a>
                        <div className={`flex justify-center mx-3 font-semibold  ${hover} ${pathname === to ? select : noSelect}     `}>
                            <span className=' ' >{name}</span>
                        </div>
                    </a>

                </Link>
            </div>
        </>
    )
}

export default NavItem