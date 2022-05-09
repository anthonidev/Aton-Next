import React, { FunctionComponent } from 'react'
import { shipping_option } from '../../types/interface'

const ShippingOption: FunctionComponent<{
    item: shipping_option
}> = ({ item }) => {

    return (

        <div className="bg-white w-full md:w-3/4 flex-col lg:flex-row text-center justify-center flex lg:justify-around items-center rounded-lg p-3 border-2 border-blue-400 py-3">
            <input type="radio" />
            <div>
                <h2 className="font-semibold">{item.name}</h2>
                <h3 className="text-plo text-sm">{item.time_to_delivery}</h3>
            </div>

            <span className="font-semibold">S/{item.price}</span>
        </div>
    )
}

export default ShippingOption