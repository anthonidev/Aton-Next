import React from 'react'

const Stock: React.FC<{
    quantity: number
}> = ({ quantity }) => {

    return (
        <>
            {quantity > 0 ?
                (< div className='bg-green-600 p-2 text-xs' >
                    <span className='text-green-200 font-semibold'>Disponible</span>
                </div>) : (
                    < div className='bg-red-600 p-2 text-xs' >
                        <span className='text-red-200 font-semibold'>Sin Stock</span>
                    </div>
                )
            }
        </>
    )
}

export default Stock