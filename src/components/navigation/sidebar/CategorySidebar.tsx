import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React, { FunctionComponent, useState } from 'react'
import { Category } from '../../../utils/types/interface';

const CategorySidebar: FunctionComponent<{
    category: Category
}> = ({
    category: {
        id,
        photo,
        slug,
        children,
        title,
    },

}) => {
        const [view, setView] = useState(false)
        return (
            <div className='mt-3 '>
                <div className='text-gray-900 text-sm flex justify-between items-center bg-gray-100 px-1 py-3 border-y-2 border-gray-200 '>

                    <Link href={'/category/' + slug}>

                        <a className="font-bold mx-2 focus:text-rou" >
                            <span className=''>  {title}</span>
                        </a>
                    </Link>
                    <a onClick={() => setView(!view)} className="focus:outline-none cursor-pointer">
                        <ChevronDownIcon className='w-5 h-5 ' />
                    </a>
                </div>
                <div className="ml-4 my-3">
                    {
                        view && children?.map(category => (

                            <Link key={category.id} href={'/category/subcategory/' + category.slug}>

                                <a className="text-gray-700 my-2 flex justify-start items-center hover:text-rou" >
                                    <ChevronRightIcon className='h-4 w-4' />
                                    <span className='uppercase'>  {category.title}</span>
                                </a>
                            </Link>

                        ))
                    }
                </div>
            </div>
        )
    }

export default CategorySidebar