import React, { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store';

const Alert = () => {
    const alert = useSelector((state: RootState) => state.alert);

    useEffect(() => {
        console.log(alert);
        
        if (alert.type === "green") {
            toast.custom((t) => (
                <div
                    className={`${t.visible ? 'animate-enter' : 'animate-leave'
                        } max-w-md w-full bg-green-200 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                >
                    <div className="flex-1 w-0 p-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 pt-0.5">

                            </div>
                            <div className="ml-3 flex-1">
                                <p className="text-sm font-medium text-green-600">
                                    Correcto
                                </p>
                                <p className="mt-1 text-lg tracking-wider font-semibold text-green-900">
                                    {alert.msg}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex border-gray-200">
                        <button
                            onClick={() => toast.dismiss(t.id)}
                            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none "
                        >
                            <svg className="h-5 w-5 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>

                        </button>
                    </div>
                </div>
            ))
        } else if (alert.type === "red") {
            toast.custom((t) => (
                <div
                    className={`${t.visible ? 'animate-enter' : 'animate-leave'
                        } max-w-md w-full bg-red-200 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                >
                    <div className="flex-1 w-0 p-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 pt-0.5">

                            </div>
                            <div className="ml-3 flex-1">
                                <p className="text-sm font-medium text-red-600">
                                    Ocurrio un erro
                                </p>
                                <p className="mt-1 text-lg tracking-wider font-semibold text-red-900">
                                    {alert.msg}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex ">
                        <button
                            onClick={() => toast.dismiss(t.id)}
                            className="w-full focus:outline-none  border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-600 "
                        >
                            <div>
                                <svg className="h-5 w-5 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>

                            </div>
                        </button>
                    </div>
                </div>
            ))
        } else if (alert.type === "yellow") {
            toast.custom((t) => (
                <div
                    className={`${t.visible ? 'animate-enter' : 'animate-leave'
                        } max-w-md w-full bg-yellow-200 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                >
                    <div className="flex-1 w-0 p-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 pt-0.5">

                            </div>
                            <div className="ml-3 flex-1">
                                <p className="text-sm font-medium text-yellow-600">
                                    Correcto
                                </p>
                                <p className="mt-1 text-lg tracking-wider font-semibold text-yellow-900">
                                    {alert.msg}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex border-gray-200">
                        <button
                            onClick={() => toast.dismiss(t.id)}
                            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-yellow-600 hover:text-indigo-500 focus:outline-none "
                        >
                            <svg className="h-5 w-5 text-yellow-700" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>

                        </button>
                    </div>
                </div>
            ))
        }

    }, [alert])


    return (
        <React.Fragment>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </React.Fragment>
    )
}

export default Alert

