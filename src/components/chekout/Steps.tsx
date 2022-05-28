import React, { FunctionComponent } from 'react'
import { Modulo } from '../../pages/checkout'

const Steps: FunctionComponent<{ modulo: Modulo }> = ({ modulo }) => {

    return (
        <div className="max-w-xl mx-auto my-4 border-b-2 pb-4">
            <div className="flex pb-3">
                <div className="flex-1">
                </div>
                <div className="w-1/4 items-center align-middle content-center flex">
                    <div className="w-full  rounded items-center align-middle flex-1">
                        <div className={`bg-green-400 text-xs leading-none py-1 text-center  w-full `} >
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="w-10 h-10 bg-green mx-auto rounded-full text-lg text-white flex items-center">
                        <span className="text-gray-800 border-2 border-green-500 text-center w-full">1</span>
                    </div>
                </div>
                <div className="w-1/4 items-center align-middle content-center flex">
                    <div className="w-full  rounded items-center align-middle flex-1">
                        <div className={`${modulo !== Modulo.SHIPPING ? "bg-green-400" : "bg-gray-400"}  text-xs leading-none py-1 text-center  w-full `} >
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="w-10 h-10 bg-green mx-auto rounded-full text-lg text-white flex items-center">
                        <span className={`text-gray-800 border-2 ${modulo !== Modulo.SHIPPING ? "border-green-500" : "border-gray-500"}   text-center w-full`}>2</span>
                    </div>
                </div>

                <div className="w-1/4 items-center align-middle content-center flex">
                    <div className="w-full  rounded items-center align-middle flex-1">
                        <div className={`${modulo !== Modulo.SHIPPING && modulo !== Modulo.PERSONAL_DATES ? "bg-green-400" : "bg-gray-400"}  text-xs leading-none py-1 text-center  w-full `} >
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="w-10 h-10 bg-green mx-auto rounded-full text-lg text-white flex items-center">
                    <span className={`text-gray-800 border-2 ${modulo !== Modulo.SHIPPING && modulo !== Modulo.PERSONAL_DATES ?  "border-green-500" : "border-gray-500"}   text-center w-full`}>3</span>
                    </div>
                </div>

                <div className="w-1/4 items-center align-middle content-center flex">
                    <div className="w-full  rounded items-center align-middle flex-1">
                        <div className={`${modulo === Modulo.MAKEORDER ? "bg-green-400" : "bg-gray-400"}  text-xs leading-none py-1 text-center  w-full `} >
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex text-xs content-center text-center ">
                <div className="w-1/3  flex justify-center mx-auto">
                    <span> Servicio de entrega</span>
                </div>

                <div className="w-1/3 flex justify-center mx-auto">
                    <span>   Datos Personales</span>
                </div>

                <div className="w-1/3 flex justify-center mx-auto">
                    <span>  Confirmación</span>
                </div>
            </div>
        </div>
    )
}

export default Steps