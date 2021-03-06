import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { get_profile } from '../../redux/api/account';
import SidebarAccount from '../../components/account/SidebarAccount';
import { Props } from '../../utils/types/types';
import { useRouter } from 'next/router';
import { logout } from '../../redux/api/auth';

const AccountLayout: React.FC<Props> = ({ title, content, children }) => {
    const dispatch: AppDispatch = useDispatch();

    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    const router = useRouter();



    useEffect(() => {
        dispatch(get_profile())
    }, [dispatch])

    useEffect(() => {
        if (!isAuthenticated && isAuthenticated !== null) {
            router.push('/auth/login')
        }
    }, [isAuthenticated])
    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <Layout title={title} content={content} >
            <div className='max-w-7xl mx-auto flex md:my-10 my-5 min-h-screen'>
                <SidebarAccount />
                <div className='md:w-3/4 w-full mx-5'>
                    {children}
                    <div className='mt-5 border flex justify-between py-2 px-4 '>
                        <Link href={'/account/main'}>
                            <a className='w-1/2   ' >Volver</a>
                        </Link>
                        <button onClick={logoutHandler} className='w-1/2 flex justify-end hover:text-red-500'>Cerrar Seccion</button>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default AccountLayout