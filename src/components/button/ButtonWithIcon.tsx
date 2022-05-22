
import React, { FunctionComponent } from 'react'

export const ButtonWithIcon: FunctionComponent<{
    Icom: any
    funtion: () => void
    children: (JSX.Element | null)
}> = ({ Icom, funtion, children }) => {
    return (
        <button onClick={funtion} className="flex px-3 rounded  text-gray-500 bg-white border border-gray-800 hover:bg-gray-700 hover:text-white   h-10 items-center justify-around  ">
            <Icom className='w-5 h-5' />

            {children}
        </button>
    )
}
