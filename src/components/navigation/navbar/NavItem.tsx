import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FunctionComponent } from 'react'

import { NavbarIten } from '../../../utils/types/interface';

const NavItem: FunctionComponent<{ iten: NavbarIten, type: string }> = ({ iten: {
    name,
    to,
}, type }) => {
    let hover, select, noSelect
    const { pathname } = useRouter()

    if (type === "main") {
        hover = 'hover:text-rou '
        select = 'text-rou border-rou border-b-2 '
        noSelect=' '

    }
    if (type === "top") {
        select = 'text-rou '
        hover = 'hover:text-white'
    }


    return (
        <>

            <div className='md:block hidden'>
                <Link href={to}>
                    <a>
                        <div className={`flex justify-center  font-semibold text-white ${hover} ${pathname === to ? select : noSelect}     `}>
                            <span className=' ' >{name}</span>
                        </div>
                    </a>

                </Link>
            </div>
        </>
    )
}

export default NavItem