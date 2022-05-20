import React, { FunctionComponent, useEffect } from 'react'

const Check: FunctionComponent<{
    option: {
        id: number,
        title: string
        total: number | undefined
    }
    formdata: number[]
    setFilter:(arg:boolean) =>void
}> = ({
    option: {
        id,
        title,
        total
    },
    formdata,
    setFilter
}) => {
        const i = formdata.indexOf(id);
        let state = i !== -1 ? true : false


        const AddCheck = (id: number) => {
            if (i !== -1) {
                formdata.splice(i, 1)
            } else{
                formdata.push(id)
            } 
            setFilter(true)

        }
        return (
            <div className=' className="flex items-center"'>
                <input
                    id={`filter-${id}-${title}`}
                    name={`${id}`}
                    type="checkbox"
                    onClick={() => AddCheck(id)}
                    defaultChecked={state}
                    className="h-4 w-4 border-gray-300 rounded  focus:outline-none checkbox checkbox-primary "

                />
                <label
                    htmlFor={`filter-${id}-${title}`}
                    className="ml-3 text-sm dark:text-day-500 text-gray-600 "
                >
                    {title}
                </label>
                {
                    total !==0&& total&&( <span className='text-plo mx-2'>({total})</span>)
                }
               

            </div>
        )
    }

export default Check