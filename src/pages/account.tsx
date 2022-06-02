import Link from 'next/link'
import React from 'react'
import Layout from '../components/layout/Layout'
import { UserCircleIcon, UserIcon, ChevronRightIcon } from '@heroicons/react/solid';

const Account = () => {
    return (
        <Layout title='Mi Cuenta | ATON' content='cuenta de usuario de aton' >
            <div className='max-w-7xl mx-auto flex md:my-10 my-5'>
                <div className='w-1/4 md:block hidden'>
                    <div className='border ml-5 p-5'>
                        <h1 className='border-b my-2 text-lg'>Mi Cuenta</h1>
                        <ul>
                            <li>
                                <Link href='/account/profile'>
                                    <a >
                                        <ChevronRightIcon className='inline-block h-5 w-5 mr-2' />
                                        <span className=''>Informacion</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/account/profile'>
                                    <a >
                                        <ChevronRightIcon className='inline-block h-5 w-5 mr-2' />
                                        <span className=''>Informacion</span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className='md:w-3/4 w-full mx-5'>
                    <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-600'>
                        <li className='border flex justify-center  py-6 '>
                            <Link href={"/account"}>
                                <a className='flex-col justify-center flex hover:text-rou '>
                                    <span className='flex justify-center'>
                                        <UserCircleIcon className='h-12 w-12 ' />
                                    </span>
                                    <span className='font-semibold uppercase'>Información</span>
                                </a>
                            </Link>
                        </li>
                        <li className='border flex justify-center  py-6 '>
                            <Link href={"/account"}>
                                <a className='flex-col justify-center flex hover:text-rou '>
                                    <span className='flex justify-center'>
                                        <UserCircleIcon className='h-12 w-12 ' />
                                    </span>
                                    <span className='font-semibold uppercase'>Información</span>
                                </a>
                            </Link>
                        </li>
                        <li className='border flex justify-center  py-6 '>
                            <Link href={"/account"}>
                                <a className='flex-col justify-center flex hover:text-rou '>
                                    <span className='flex justify-center'>
                                        <UserCircleIcon className='h-12 w-12 ' />
                                    </span>
                                    <span className='font-semibold uppercase'>Información</span>
                                </a>
                            </Link>
                        </li>
                        <li className='border flex justify-center  py-6 '>
                            <Link href={"/account"}>
                                <a className='flex-col justify-center flex hover:text-rou '>
                                    <span className='flex justify-center'>
                                        <UserCircleIcon className='h-12 w-12 ' />
                                    </span>
                                    <span className='font-semibold uppercase'>Información</span>
                                </a>
                            </Link>
                        </li>
                        <li className='border flex justify-center  py-6 '>
                            <Link href={"/account"}>
                                <a className='flex-col justify-center flex hover:text-rou '>
                                    <span className='flex justify-center'>
                                        <UserCircleIcon className='h-12 w-12 ' />
                                    </span>
                                    <span className='font-semibold uppercase'>Información</span>
                                </a>
                            </Link>
                        </li>
                        <li className='border flex justify-center  py-6 '>
                            <Link href={"/account"}>
                                <a className='flex-col justify-center flex hover:text-rou '>
                                    <span className='flex justify-center'>
                                        <UserCircleIcon className='h-12 w-12 ' />
                                    </span>
                                    <span className='font-semibold uppercase'>Información</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>

    )
}

export default Account