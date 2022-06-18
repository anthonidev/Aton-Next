import { ChevronDownIcon } from "@heroicons/react/outline"
import { AdjustmentsIcon, ArrowDownIcon, ArrowSmDownIcon, MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid"
import React, { FunctionComponent, useState } from 'react'

const MoreFilters: FunctionComponent<{
    order: string,
    sort_by: string,
    onChange: (e: React.FormEvent<HTMLSelectElement>) => void,
    state: boolean

}> = ({ order, sort_by, onChange, state }) => {
    const [view, setView] = useState(state)

    function Drop() {
        setView(!view)
    }
    return (
        <div className=" md:flex-row flex-col flex md:space-x-10  space-y-2 md:space-y-0  ">
            <div className=' flex items-end'>
                <label htmlFor='sort_by' className='mr-1  w-full md:w-auto italic  text-sm tracking-wide font-semibold text-gray-600'>Clasificar: </label>
                <select
                    className='bg-white border rounded w-full md:w-auto'
                    id='sort_by'
                    name='sort_by'
                    value={sort_by}
                    onChange={e => onChange(e)}
                >
                    <option value='date_created'>Fecha</option>
                    <option value='price'>Precio</option>
                    <option value='sold'>Sold</option>
                    <option value='title'>Nombre</option>

                </select>
            </div>
            <div className='flex items-end'>
                <label htmlFor='order' className='mr-1  w-full md:w-auto italic  text-sm tracking-wide font-semibold text-gray-600'>Ordenar:</label>
                <select
                    className='  bg-white border rounded w-full md:w-auto'
                    id='order'
                    name='order'
                    value={order}
                    onChange={e => onChange(e)}
                >
                    <option value='asc'>A - Z</option>
                    <option value='desc'>Z - A</option>
                </select>
            </div>
        </div>


    )
}

export default MoreFilters