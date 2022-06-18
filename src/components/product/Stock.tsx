import React from 'react'

const Stock: React.FC<{
    quantity: number
}> = ({ quantity }) => {

    return (
        <>
            {quantity > 0 ?
                (< div className='bg-gray-700 p-1 text-xs ' >
                    <span className='text-gray-200 tracking-wide'>Disponible</span>
                </div>) : (
                    < div className='bg-red-600 p-1 text-xs' >
                        <span className='text-red-200 tracking-wide'>Sin Stock</span>
                    </div>
                )
            }
        </>
    )
}

export default Stock