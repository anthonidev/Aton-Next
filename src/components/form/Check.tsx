import React, { FunctionComponent, useEffect } from 'react'
import { Brand, CategoryChildren } from '../../utils/types/interface'

const Check: FunctionComponent<{
    option: CategoryChildren | Brand
    formdata: number[]
    setFilter: (arg: boolean) => void
}> = ({
    option,
    formdata,
    setFilter
}) => {
        const i = formdata.indexOf(option.id);
        let state = i !== -1 ? true : false


        const AddCheck = (id: number) => {
            if (i !== -1) {
                formdata.splice(i, 1)
            } else {
                formdata.push(id)
            }
            setFilter(true)

        }
        function isCategoryChildren(object: any): object is CategoryChildren {
            return 'get_total' in object;
        }
        return (
            <div className=' className="flex items-center"'>
                <input
                    id={`filter-${option.id}-${option.title}`}
                    name={`${option.id}`}
                    type="checkbox"
                    onClick={() => AddCheck(option.id)}
                    defaultChecked={state}
                    className="h-4 w-4 border-gray-300 rounded  focus:outline-none checkbox checkbox-primary "

                />
                <label
                    htmlFor={`filter-${option.id}-${option.title}`}
                    className="ml-3 text-sm dark:text-day-500 text-gray-600 "
                >
                    {option.title}
                </label>
                {

                    isCategoryChildren(option) && option?.get_total !== 0 && option.get_total && (<span className='text-plo mx-2'>({option.get_total})</span>)
                }


            </div>
        )
    }

export default Check