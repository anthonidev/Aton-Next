import { ChevronDownIcon } from "@heroicons/react/outline"
import { AdjustmentsIcon, ArrowDownIcon, ArrowSmDownIcon, MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid"
import React, { FunctionComponent, useState } from 'react'

const MoreFilters: FunctionComponent<{
    order: string,
    sort_by: string,
    onChange: (e: React.FormEvent<HTMLSelectElement>) => void,
    state:boolean

}> = ({ order, sort_by, onChange ,state}) => {
    const [view, setView] = useState(state)

    function Drop() {
        setView(!view)
    }
    return (
        <div className='mt-3 '>

            <div className='text-gray-900 text-sm flex justify-between items-center bg-gray-100 px-1 py-3 border-y-2 border-gray-200 '>
                <h2 className='font-bold mx-2 '>Más filtros</h2>
                <a onClick={Drop} className="focus:outline-none cursor-pointer">
                    <ChevronDownIcon className='w-5 h-5 ' />
                </a>
            </div>
            <div className="ml-4 my-3">
            {
                view && (
                    <div className="space-y-1  rounded-sm   ">
                        <div className='form-group  '>
                            <label htmlFor='sort_by' className='mr-3 min-w-0 flex-1 text-gray-500'
                            >Ver por</label>
                            <select
                                className='font-sofiapro-light   inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none '
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
                        <div className='form-group'>
                            <label htmlFor='order' className='mr-3 min-w-0 flex-1 text-gray-500'
                            >Orden</label>
                            <select
                                className=' font-sofiapro-light inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none '
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
            </div>
          


        </div>
    )
}

export default MoreFilters