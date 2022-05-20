import { CashIcon, ChevronDownIcon, MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid"
import React, { FunctionComponent, useState } from "react"
import { prices } from "../../utils/helpers/prices"
const FilterPrice: FunctionComponent<{
    price_range: string,
    onChange: (e: React.FormEvent<HTMLInputElement>) => void,
    state:boolean


}> = ({ price_range, onChange ,state}) => {
    const [view, setView] = useState(state)

    function Drop() {
        setView(!view)
    }
    const select = "text-day-600 "
    const noselect = "text-gray-900 dark:text-day-200"
    return (
        <div className='mt-2 '>
            <div className='text-gray-900 text-sm flex justify-between items-center bg-gray-100 px-1 py-3 border-y-2 border-gray-200 '>
                    <h2 className='font-bold mx-2 '>Precios</h2>
                <a onClick={Drop} className="focus:outline-none cursor-pointer">
                    <ChevronDownIcon className='w-5 h-5 ' />
                </a>
            </div>
            {
                view && (
                    <div className="ml-4 my-3 grid md:grid-cols-2 rounded-sm   gap-0">
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