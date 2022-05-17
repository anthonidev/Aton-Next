import React, { FunctionComponent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_shipping_options } from '../../redux/api/shipping'
import { AppDispatch, RootState } from '../../redux/store'
import { shipping_option } from '../../utils/types/interface'
import ShippingOption from '../cart/ShippingOption'

const SelectShipping: FunctionComponent<{
    onChange: (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>) => void
    shipping_id: number
}> = ({ onChange, shipping_id }) => {
    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        dispatch(get_shipping_options())
    }, [])
    const shipping_options = useSelector((state: RootState) => state.shipping.shipping_options)

    return (
        <div> <h1 className=' font-semibold text-lg my-4'>Servicio de entrega</h1>

            <div className="grid grid-cols-1  gap-x-2 sm:gap-x-2 md:gap-x-5 lg:gap-x-9 gap-y-4 ">
                {
                    shipping_options?.map((item: shipping_option) => (
                        <div className="flex justify-center" key={item.id} >
                            <ShippingOption item={item} onChange={onChange} shipping_id={shipping_id} />
                        </div>
                    ))
                }
            </div></div>
    )
}

export default SelectShipping