import { ChevronRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux';
import { AccountMain } from '../../pages/account/main';
import { RootState } from '../../redux/store';

const SidebarAccount = () => {

    const short_name = useSelector((state: RootState) => state.auth.user?.get_short_name)
    const treatment = useSelector((state: RootState) => state.account.treatment)
    return (
        <div className='w-1/4 md:block hidden'>
            <div className='border ml-5 p-5'>
                <h1 className='border-b my-2 text-lg uppercase'>{treatment} {short_name}</h1>
                <ul>
                    {
                        AccountMain.map((item, index) => {
                            return (
                                <li className='my-4' key={index}>
                                    <Link href={item.url}>
                                        <a className='hover:text-gray-900 text-gray-600' >
                                            <ChevronRightIcon className='inline-block h-5 w-5 mr-2' />
                                            <span >{item.text}</span>
                                        </a>

                                    </Link>
                                </li>

                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default SidebarAccount