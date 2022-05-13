import { BeakerIcon, ChevronDownIcon } from '@heroicons/react/solid';
import React, { FunctionComponent, useState } from 'react'
import { Category } from '../../utils/types/interface';
import Check from './Check';

const CategoryFat: FunctionComponent<{
    category: Category
    formdata: number[]

}> = ({
    category: {
        id,
        description,
        photo,
        slug,
        sub_categories,
        title,
        total
    },
    formdata
}) => {
        const [view, setView] = useState(true)
    

        return (
            <div className='mt-3 '>
                <div className='text-pri flex justify-between items-center '>
                    <h2 className='font-medium text-lg'>{title}</h2>
                    <a onClick={()=>setView(!view)} className="focus:outline-none cursor-pointer">
                        <ChevronDownIcon className='w-5 h-5 ' />
                    </a>
                </div>
                {
                    view && sub_categories?.map(category => (

                        <Check option={category} formdata={formdata} key={category.id} />
                    
                    ))
                }

            </div>
        )
    }

export default CategoryFat