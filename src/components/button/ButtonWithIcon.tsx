
import React, { FunctionComponent } from 'react'

export const ButtonWithIcon: FunctionComponent<{
    Icom: any
    funtion: () => void
    children: (JSX.Element | null)
}> = ({ Icom, funtion, children }) => {
    return (
        <button onClick={funtion} className="flex ml-auto mt-3  text-gray-500 bg-white border-2 border-gray-800 hover:bg-gray-700 hover:text-white    w-full h-10 items-center justify-around  ">
            {children}
            <Icom className='w-6 h-6' />
        </button>
    )
}
