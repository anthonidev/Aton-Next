import React, { FunctionComponent, useState } from 'react'
import { AiFillCaretDown } from "react-icons/ai";
import { Category } from '../../types/insterfaces/Product';


const CategoryFat: FunctionComponent<{
    category: Category
}> = ({
    category: {
        id,
        description,
        photo,
        slug,
        sub_categories,
        title,
        total
    }
}) => {
        const [view, setView] = useState(false)

        function Drop() {
            setView(!view)
        }
        return (
            <div className='mt-3 '>
                <div className='text-pri flex justify-between items-center '>
                    <h2 className='font-medium text-lg'>{title}</h2>
                    <button onClick={Drop} className="focus:outline-none">
                        <AiFillCaretDown className='w-5 h-5 ' />
                    </button>
                </div>
                {
                    view && sub_categories?.map(category => (
                        <div className='flex ml-4 mt-2 items-center' key={category.id}>
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

                                    <span className='text-pri'>{category.title}</span>
                                    <span className='text-plo'>({category.total})</span>
                                </div>
                            </label>
                        </div>
                    ))
                }

            </div>
        )
    }

export default CategoryFat