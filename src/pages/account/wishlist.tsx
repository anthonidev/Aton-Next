import Link from 'next/link'
import React, { useEffect } from 'react'
import AccountLayout from '../../components/layout/LayoutAccount';
import { Order } from '../../utils/types/interface';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { get_orders } from '../../redux/api/account';
import { EyeIcon } from '@heroicons/react/solid';
import ModelOrder from '../../components/account/ModelOrder';
import { getWishlist } from '../../redux/api/wishlist';
import ProductCard from '../../components/product/ProductCard';

const AccountWishList = () => {

    const dispatch: AppDispatch = useDispatch();


    const count = useSelector((state: RootState) => state.wishlist.count)
    const next = useSelector((state: RootState) => state.wishlist.next)
    const previous = useSelector((state: RootState) => state.wishlist.previous)
    const items = useSelector((state: RootState) => state.wishlist.results)

    return (
        <AccountLayout title='Mi Cuenta | ATON' content='cuenta de usuario de aton' >
            <div>
                <h2 className='font-semibold text-lg'>Mi lista de deseos </h2>


                <div className='grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8'>
                    {
                        items?.map(item => (
                            <ProductCard product={item.product} key={item.id} />
                        ))
                    }
                </div>


            </div>

        </AccountLayout>

    )
}

export default AccountWishList