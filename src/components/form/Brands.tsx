import { ChevronDownIcon } from '@heroicons/react/solid';
import React, { FunctionComponent, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Brand } from '../../utils/types/interface';
import Check from './Check';



const Brands: FunctionComponent<{
    formdata: number[]
    setFilter:(arg:boolean) =>void
}> = ({ formdata,setFilter }) => {
    const brands = useSelector((state: RootState) => state.product.brands);

    const [view, setView] = useState(false)

    return (
        <div className='mt-3 '>
            <div className='text-gray-900 text-sm flex justify-between items-center bg-gray-100 px-1 py-3 border-y-2 border-gray-200 '>
                <h2 className='font-bold mx-2 '>Marcas</h2>
                <a onClick={() => setView(!view)} className="focus:outline-none cursor-pointer">
                    <ChevronDownIcon className='w-5 h-5 ' />
                </a>
            </div>
            <div className="ml-4 my-3">
                {
                    view && brands?.map((brand: Brand) => (
                        <Check option={brand} formdata={formdata} key={brand.id} setFilter={setFilter} />


                    ))
                }
            </div>

        </div>
    )
}

export default Brands