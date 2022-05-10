import { BeakerIcon } from '@heroicons/react/solid';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Brand } from '../../utils/types/interface';


const Brands = () => {
    const brands = useSelector((state: RootState) => state.product.brands);

    const [view, setView] = useState(false)

    function Drop() {
        setView(!view)
    }
    return (
        <div className='mt-3 '>
            <div className='text-pri flex justify-between items-center '>
                <h2 className='font-medium text-lg'>Marcas</h2>
                <button onClick={Drop} className="focus:outline-none">
                    <BeakerIcon className='w-5 h-5 ' />
                </button>
            </div>
            {
                view && brands?.map((brand:Brand) => (
                    <div className='flex ml-4 mt-2 items-center' key={brand.id}>
                        <input
                            type="checkbox"
                            defaultValue="true"
                            // defaultChecked={option.checked}
                            className="h-5 w-5 focus:outline-none"
                        />
                        <label
                            htmlFor={`filter-mobile-`}
                            className="ml-2 min-w-0 flex-1 "
                        >
                            <div className='space-x-2 '>

                                <span className='text-pri'>{brand.title}</span>
                                {/* <span className='text-plo'>({category.total})</span> */}
                            </div>
                        </label>
                    </div>
                ))
            }

        </div>
    )
}

export default Brands