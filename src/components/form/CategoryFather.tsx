import { ChevronDownIcon } from '@heroicons/react/solid';
import React, { FunctionComponent, useState } from 'react'
import { Category } from '../../utils/types/interface';
import Check from './Check';

const CategoryFat: FunctionComponent<{
    category: Category
    formdata: number[]
    setFilter: (arg: boolean) => void

}> = ({
    category: {
        children,
        title,
    },
    formdata,
    setFilter
}) => {
        const [view, setView] = useState(true)
        return (
            <div className='mt-3 '>
                <div className='text-gray-900 text-sm flex justify-between items-center bg-gray-100 px-1 py-3 border-y-2 border-gray-200 '>
                    <h2 className='font-bold mx-2 '>{title}</h2>
                    <a onClick={() => setView(!view)} className="focus:outline-none cursor-pointer">
                        <ChevronDownIcon className='w-5 h-5 ' />
                    </a>
                </div>
                <div className="ml-4 my-3">
                    {
                        view && children?.map(category => (

                            <Check option={category} formdata={formdata} key={category.id} setFilter={setFilter} />

                        ))
                    }
                </div>
            </div>
        )
    }

export default CategoryFat