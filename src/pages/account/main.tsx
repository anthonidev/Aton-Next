import Link from 'next/link'
import React from 'react'
import { HeartIcon, LocationMarkerIcon, PresentationChartLineIcon, ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/solid';
import AccountLayout from '../../components/layout/LayoutAccount';

export const AccountMain = [
    { "url": "/account/info", "text": "Información", "icon": <UserCircleIcon /> },
    { "url": "/account/address", "text": "Direcciones", "icon": <LocationMarkerIcon /> },
    { "url": "/account/order", "text": "Pedidos", "icon": <ShoppingBagIcon /> },
    { "url": "/account/wishlist", "text": "Lista de deseos", "icon": <HeartIcon /> },
    { "url": "/report/main", "text": "Reportes", "icon": <PresentationChartLineIcon /> },
]


const Account = () => {


    return (
        <AccountLayout title='Mi Cuenta | ATON' content='cuenta de usuario de aton' >
            <div>
                <h1 className='my-5 text-xl font-bold text-gray-700'>Mi cuenta</h1>
                <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-600'>

                    {
                        AccountMain.map((item, index) => (
                            <li className='border flex justify-center  py-6 ' key={index}>
                                <Link href={item.url}>
                                    <a className='flex-col justify-center flex hover:text-rou '>
                                        <span className='flex justify-center h-12 w-12 mx-auto'>
                                            {item.icon}
                                        </span>
                                        <span className='font-semibold uppercase'>{item.text}</span>
                                    </a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </AccountLayout>

    )
}

export default Account