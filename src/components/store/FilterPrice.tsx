import { CashIcon, ChevronDownIcon, MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid"
import React, { FunctionComponent, useState } from "react"
import { prices } from "../../utils/helpers/prices"
const FilterPrice: FunctionComponent<{
    price_range: string,
    onChange: (e: React.FormEvent<HTMLInputElement>) => void,

}> = ({ price_range, onChange }) => {
    const [view, setView] = useState(false)

    function Drop() {
        setView(!view)
    }
    const select = "text-day-600 "
    const noselect = "text-gray-900 dark:text-day-200"
    return (
        <div className='mt-2 '>
            <div className='text-pri flex justify-between items-center '>
                <h2 className='font-medium text-lg'>Precios</h2>
                <a onClick={Drop} className="focus:outline-none cursor-pointer">
                    <ChevronDownIcon className='w-5 h-5 ' />
                </a>
            </div>
            {
                view && (
                    <div className="grid md:grid-cols-2 rounded-sm   gap-0">
                        {
                            prices && prices.map((price, index) => {
                                return (
                                    <div key={index} className='form-check my-1'>
                                        <input
                                            onChange={e => onChange(e)}
                                            value={price.name}
                                            name='price_range'
                                            type='radio'
                                            className=' h-4 w-4  radio radio-primary checked:bg-blue-500'
                                        />
                                        <label className={`ml-3 min-w-0 flex-1  font-sofiapro-light text-sm ${price.name === price_range ? select : noselect}  `} >{price.name}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }


        </div>
    )
}

export default FilterPrice