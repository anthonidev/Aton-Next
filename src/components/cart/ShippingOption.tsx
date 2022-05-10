import React, { FunctionComponent } from 'react'
import { shipping_option } from '../../utils/types/interface'

const ShippingOption: FunctionComponent<{
    item: shipping_option,
    onChange: (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>) => void;
    shipping_id: number;
}> = ({ item ,onChange,shipping_id}) => {
    
    return (

        <div className={`bg-white w-full md:w-3/4 text-center flex justify-around items-center rounded-lg px-1 border-2 ${shipping_id==item.id?"border-blue-400 ":"border-plo"}`}>
            <input 
            type="radio"
            onChange={e => onChange(e)}
            value={item.id}
            name='shipping_id'
             />
            <div>
                <h2 className="font-semibold">{item.name}</h2>
                <h3 className="text-plo text-sm">{item.time_to_delivery}</h3>
            </div>

            <span className="font-semibold">S/{item.price}</span>
        </div>
    )
}

export default ShippingOption