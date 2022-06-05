import Link from 'next/link'
import React, { useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { get_profile } from '../../redux/api/account';
import SidebarAccount from '../../components/account/SidebarAccount';
import { Props } from '../../utils/types/types';

const AccountLayout: React.FC<Props> = ({ title, content, children }) => {
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(get_profile())
    }, [dispatch])

    return (
        <Layout title={title} content={content} >
            <div className='max-w-7xl mx-auto flex md:my-10 my-5'>
                <SidebarAccount />
                <div className='md:w-3/4 w-full mx-5'>
                    {children}
                    <div className='mt-5 border flex justify-between py-2 px-4 '>
                        <Link href={'/account/main'}>
                            <a className='w-1/2   ' >Volver</a>
                        </Link>
                        <button className='w-1/2 flex justify-end'>Cerrar Seccion</button>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default AccountLayout