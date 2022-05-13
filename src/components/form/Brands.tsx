import { ChevronDownIcon } from '@heroicons/react/solid';
import React, { FunctionComponent, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Brand } from '../../utils/types/interface';
import Check from './Check';



const Brands: FunctionComponent<{
    formdata: number[]
}> = ({ formdata }) => {
    const brands = useSelector((state: RootState) => state.product.brands);

    const [view, setView] = useState(false)

    return (
        <div className='mt-3 '>
            <div className='text-pri flex justify-between items-center '>
                <h2 className='font-medium text-lg'>Marcas</h2>
                <a onClick={()=>setView(!view)} className="focus:outline-none cursor-pointer">
                    <ChevronDownIcon className='w-5 h-5 ' />
                </a>
            </div>
            {
                view && brands?.map((brand: Brand) => (
                    <Check option={brand} formdata={formdata} key={brand.id} />
                    
                   
                ))
            }

        </div>
    )
}

export default Brands