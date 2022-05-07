import { MinusCircleIcon, PlusCircleIcon, PlusIcon, RefreshIcon, XIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../app/store'
import { setAlert } from '../../hooks/alert'
import { update_item } from '../../hooks/cart'
import { itemCart } from '../../types/interface'

const CartItem: FunctionComponent<{
    item: itemCart
}> = ({ item }) => {
    const dispatch: AppDispatch = useDispatch();
    const { pathname } = useRouter();

    const [formData, setFormData] = useState({
        item_count: item.count
    });

    const { item_count } = formData;

    useEffect(() => {
        if (item.count)
            setFormData({ ...formData, item_count: item.count });
    }, [item.count]);

    const onChange = (e: React.FormEvent<HTMLSelectElement>): void => setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (dispatch && dispatch !== null && dispatch !== undefined) {
            try {
                if (item.product.quantity >= item_count) {
                    dispatch(update_item(item.product, item_count));
                    dispatch(setAlert('Carrito actualizado', 'green'));
                }
                else {
                    dispatch(setAlert('Not enough in stock', 'red'));
                }
            } catch (err) {

            }
        }

    };
    return (



        <div className="bg-white grid grid-cols-2 sm:grid-cols-3 py-3  md:grid-cols-4   border-b space-x-5 border-gray-100">
            <div className='flex flex-col justify-center items-start'>

                <Image
                    className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                    src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${item.product.photo}`}
                    alt={item.product.slug}
                    layout="intrinsic"
                    height="150"
                    width="150"
                />
            </div>
            <div className='col-span-2  flex flex-col justify-center items-start '>
                <h2 className='text-lg font-semibold'>{item.product.title}</h2>
                <div className="my-3 flex text-sm text-gray-500 ">
                    <p className="">Marca:</p>
                    <p className="ml-3 ">sony</p>
                </div>
                <div className="flex  justify-center items-center space-x-3 ">
                    <span className="font-bold text-rou">S/{item.product.price}</span>
                    <span className="font-bold text-plo line-through ">S/{item.product.compare_price}</span>
                </div>
            </div>
            <div className='flex  col-span-2 md:col-span-1  justify-between items-center'>
                <form onSubmit={e => onSubmit(e)} className='w-16 flex justify-center items-center space-x-3'>
                    <span className='font-bold text-plo'>{item_count}</span>
                    <div className='flex flex-col space-y-3 '>
                        <button className='text-plo hover:text-pri'>
                            <MinusCircleIcon className='h-6 w-6 ' />
                        </button>
                        <button className='text-plo hover:text-pri'>
                            <PlusCircleIcon className='h-6 w-6' />
                        </button>
                    </div>
                </form>
                <div className="flex justify-end items-end ">
                    <button className='text-plo hover:text-pri'>
                        <XIcon className='h-6 w-6' />
                    </button>
                </div>


            </div>


        </div>
    )
}

export default CartItem