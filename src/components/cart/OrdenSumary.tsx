import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const OrdenSumary = () => {
    const original_price = useSelector((state: RootState) => state.order.original_price)
    const shipping_cost = useSelector((state: RootState) => state.order.shipping_cost)
    const total_after_coupon = useSelector((state: RootState) => state.order.total_after_coupon)
    const total_amount = useSelector((state: RootState) => state.order.total_amount)
    
    return (
        <div className=' grid grid-cols-2 gap-3 border-y-2 border-dashed py-3 text-plo'>
            <span>Suma de la orden</span>
            <span className='flex justify-end'>S/{original_price}</span>
            <span>Delivery</span>
            <span className='flex justify-end text-pri font-semibold'>S/{shipping_cost}</span>
           
            {total_after_coupon > 0 && (
                <div className='col-span-2 flex justify-between'>
                    <span >Total antes del coupon</span>
                    <span className='font-bold'>S/{total_after_coupon}</span>
                </div>
            )}
            <span >Total de la orden</span>
            <span className='flex justify-end font-bold'>S/{total_amount}</span>
        </div>
    )
}

export default OrdenSumary