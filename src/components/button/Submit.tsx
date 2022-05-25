import { LockClosedIcon } from '@heroicons/react/solid'
import React, { FunctionComponent } from 'react'
import { SpinnerCircularFixed } from 'spinners-react'

const Submit: FunctionComponent<{
    loading: boolean,
    text: string


}> = ({
    loading,
    text

}) => {
        return (
            <div> {
                loading ? (<button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded text-gray-900 uppercase hover:text-white bg-white border-indigo-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <SpinnerCircularFixed size={37} thickness={115} speed={151} color="rgba(0, 0, 168, 1)" secondaryColor="rgba(255, 255, 255, 1)" />
                </button>) : (
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded text-gray-900 uppercase hover:text-white bg-white border-indigo-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <div className="absolute left-0 inset-y-0 flex items-center pl-3">
                            <span className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true"><LockClosedIcon /></span>
                        </div>
                        {text}
                    </button>
                )
            }</div>
        )
    }

export default Submit