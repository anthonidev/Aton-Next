import React, { FunctionComponent, useEffect } from 'react'

const StateOrder: FunctionComponent<{
    status: string
}> = ({ status }) => {

    useEffect(() => {
        console.log('state')
    }
        , [])

    switch (status) {
        case 'Enviado':
            return <span className="px-3 py-1 font-semibold rounded-md bg-orange-300 text-orange-700">Enviado</span>
        case 'Entregado':
            return <span className="px-3 py-1 font-semibold rounded-md bg-green-300 text-green-700">Entregado</span>
        case 'Cancelado':
            return <span className="px-3 py-1 font-semibold rounded-md bg-red-300 text-red-700">Cancelado</span>
        case 'Procesado':
            return <span className="px-3 py-1 font-semibold rounded-md bg-blue-300 text-blue-700">Procesado</span>
        default:
            return <span className="px-3 py-1 font-semibold rounded-md bg-yellow-300 text-yellow-700">Pendiente</span>
    }
}




export default StateOrder