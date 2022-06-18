import { MinusCircleIcon, PlusCircleIcon, TrashIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store'
import { setAlert } from '../../redux/api/alert'
import { itemCart } from '../../utils/types/interface'
import { remove_item, update_item } from '../../redux/api/cart'
import { get_total_order } from '../../redux/api/order'
import { formatterSoles } from '../../utils/helpers/prices';

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

        <div className="bg-white   border-b space-x-5 border-gray-100 py-2 shadow px-3">
            <div className='flex justify-between'>
                <div className='w-1/4'>
                    <Image
                        className="object-center object-cover "
                        src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${item.product.photo}`}
                        alt={item.product.slug}
                        layout="intrinsic"
                        height="75"
                        width="75"

                    />
                </div>

                <div className='w-3/4 flex flex-col justify-between'>
                    <div className='flex justify-between items-start'>
                        <h1 className='text-sm ' >{item.product.title.substr(0, 40)}...</h1>
                        <div className="flex justify-end items-end ">
                            <button
                                className='text-red-300 hover:text-red-600'
                                onClick={removeItemHandler}
                            >
                                <TrashIcon className='h-4 w-4' />
                            </button>
                        </div>
                    </div>

                    <div className=" flex text-xs text-gray-500 justify-end italic">
                        <p className="">Marca:</p>
                        <p className="ml-3 ">sony</p>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <p className="text-gray-600 font-bold">{formatterSoles.format(item.product?.price)}</p>
                        </div>
                        <div className='flex space-x-1'>
                            <button onClick={minus} className='text-plo hover:text-pri'>
                                <MinusCircleIcon className='h-5 w-5' />
                            </button>

                            <span className='font-bold text-plo'>{item.count}</span>
                            <button onClick={plus} className='text-plo hover:text-pri'>
                                <PlusCircleIcon className='h-5 w-5' />
                            </button>

                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default CartItem