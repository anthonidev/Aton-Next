import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { formatterSoles } from '../../utils/helpers/prices';
import { itemCart } from '../../utils/types/interface';

const OrdenDetailConfirm = () => {
    const original_price = useSelector((state: RootState) => state.order.original_price)
    const shipping_cost = useSelector((state: RootState) => state.order.shipping_cost)
    const total_after_coupon = useSelector((state: RootState) => state.order.total_after_coupon)
    const total_amount = useSelector((state: RootState) => state.order.total_amount)
    const items = useSelector((state: RootState) => state.cart.items)

    return (
        <div className=' border-y-2 border-dashed py-3 px-2 '>

            <div className='flex  flex-col max-w-xl  '>
                <span className='my-5'>Productos </span>
                {
                    items?.map((item: itemCart) => (
                        <div className="flex justify-between bg-gray-50 px-4 rounded hover:bg-gray-100 pt-2 my-1" key={item.id} >
                            <Link href={`/product/${item.product.slug}`}>
                                <a >
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${item.product.photo_thumbnail_xm}`}
                                        alt={item.product.title}
                                        width={80}
                                        height={100}
                                        quality={100}
                                    />
                                </a>
                            </Link>
                            <div className="flex flex-col justify-center  px-4">
                                <span className='text-sm text-gray-600 '>{item.product.title}</span>

                            </div>
                            <div className="flex flex-col justify-center items-end space-y-2  px-4">
                                <span className='text-sm text-gray-600'>cantidad: <span className='font-bold ml-3'>{item.count}</span> </span>
                                <span className='text-sm text-gray-600 font-bold'>{formatterSoles.format(item.product.price * item.count)}</span>
                            </div>
                        </div>
                    ))
                }
            </div>


            <span className='text-sm text-gray-600'>Suma de la orden</span>
            <span className='flex justify-end text-gray-600 font-bold '>S/{original_price}</span>
            <span className='text-sm text-gray-600'>Delivery</span>
            <span className='flex justify-end text-pri font-semibold'>S/{shipping_cost}</span>


            <span className='text-sm text-gray-600'>Total de la orden</span>
            <span className='flex justify-end  text-gray-600 font-bold'>S/{total_amount}</span>
            {total_after_coupon > 0 && (
                <div className='col-span-2 flex justify-between'>
                    <span >Total después del coupon</span>
                    <span className='font-bold text-gray-600 '>S/{total_after_coupon}</span>
                </div>
            )}
        </div>
    )
}

export default OrdenDetailConfirm