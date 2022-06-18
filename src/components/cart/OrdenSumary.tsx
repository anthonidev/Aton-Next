import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const OrdenSumary = () => {
    const original_price = useSelector((state: RootState) => state.order.original_price)
    const shipping_cost = useSelector((state: RootState) => state.order.shipping_cost)
    const total_after_coupon = useSelector((state: RootState) => state.order.total_after_coupon)
    const total_amount = useSelector((state: RootState) => state.order.total_amount)
    const items = useSelector((state: RootState) => state.cart.items)

    return (
        <div className=' grid grid-cols-2 gap-3 border-y-2 border-dashed py-3 '>
            <div className="col-span-2 bg-blue-200 py-2 text-center rounded border-blue-300 border">
                <span className='text-blue-800  font-semibold' > hay  {items?.length} {items && items?.length > 1 ? "productos" : "producto"}  en su carrito</span>

            </div>
            <span className='text-sm text-gray-600'>Suma de la orden</span>
            <span className='flex justify-end text-gray-600 font-bold '>S/{original_price}</span>
            <span className='text-sm text-gray-600'>Delivery</span>
            <span className='flex justify-end text-pri font-semibold'>S/{shipping_cost}</span>


            <span  className='text-sm text-gray-600'>Total de la orden</span>
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

export default OrdenSumary