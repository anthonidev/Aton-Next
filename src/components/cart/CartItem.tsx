import { MinusCircleIcon, PlusCircleIcon, XIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store'
import { setAlert } from '../../redux/api/alert'
import { itemCart } from '../../utils/types/interface'
import { remove_item, update_item } from '../../redux/api/cart'
import { get_total_order } from '../../redux/api/order'
import { formatterSoles } from '../../utils/helpers/prices'

const CartItem: FunctionComponent<{
    item: itemCart
}> = ({ item }) => {
    const dispatch: AppDispatch = useDispatch();
    const [countItem, setCountItem] = useState<number>(item.count)
    const [add, setAdd] = useState<boolean>(false)
    useEffect(() => {
        if (add) {
            dispatch(update_item(item.product, countItem));
            setAdd(false)
        }
    }, [countItem, add, dispatch, item.product]);

    function minus() {
        if (item.product.quantity >= countItem && countItem - 1 !== 0) {
            setCountItem(countItem - 1)
            dispatch(setAlert('Carrito actualizado', 'green'));
            setAdd(true)
        } else if (countItem - 1 === 0) {
            dispatch(remove_item(item));
        }
    }
    function plus() {
        if (item.product.quantity >= countItem && countItem + 1 < item.product.quantity) {
            setCountItem(countItem + 1)
            dispatch(setAlert('Carrito actualizado', 'green'));
            setAdd(true)

        } else {
            dispatch(setAlert('Not enough in stock', 'red'));
        }
    }
    const removeItemHandler = () => {
        dispatch(remove_item(item));
        dispatch(get_total_order())

    };
    return (

        <div className="bg-white grid grid-cols-2 sm:grid-cols-3 py-1  md:grid-cols-4   border-b space-x-5 border-gray-100">
            <div className='flex col-span-2 sm:col-span-1 justify-center items-center'>
                <Image
                    className="object-center object-cover "
                    src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${item.product.photo}`}
                    alt={item.product.slug}
                    layout="intrinsic"
                    height="100"
                    width="100"

                />
            </div>
            <div className='col-span-2  flex flex-col justify-center items-start '>
                <h2 className='text-base font-semibold'>{item.product.title}</h2>
                <div className=" flex text-sm text-gray-500 ">
                    <p className="">Marca:</p>
                    <p className="ml-3 ">sony</p>
                </div>
                <div className="flex  justify-center items-center space-x-3 ">
                    <span className="font-bold text-rou">{formatterSoles.format(item.product?.price)}</span>
                    <span className="font-semibold text-plo line-through ">{formatterSoles.format(item.product?.compare_price)}</span>
                </div>
            </div>
            <div className='flex  col-span-3 md:col-span-1  justify-between items-center'>
                <div className='w-16 flex justify-center items-center space-x-3'>
                    <span className='font-bold text-plo'>{countItem}</span>
                    <div className='flex flex-col space-y-3 '>
                        <button onClick={plus} className='text-plo hover:text-pri'>
                            <PlusCircleIcon className='h-6 w-6' />
                        </button>
                        <button onClick={minus} className='text-plo hover:text-pri'>
                            <MinusCircleIcon className='h-6 w-6 ' />
                        </button>

                    </div>
                </div>
                <div className="flex justify-end items-end ">
                    <button
                        className='text-plo hover:text-pri'
                        onClick={removeItemHandler}
                    >
                        <XIcon className='h-6 w-6' />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default CartItem