import React, { FunctionComponent } from 'react'
import { Address } from '../../utils/types/interface'

const AddressCard: FunctionComponent<{
    address: Address
    AddAdress: (address: Address) => void
}> = ({ address, AddAdress }) => {

    const dataAdreess = (title: string, value: string,) => {
        return (
            <div className='flex w-full items-center'>
                <span className='text-gray-700 font-semibold w-1/2'>{title}</span>
                <span className='ml-2 text-gray-700  w-1/2'>{value ? value : "_"}</span>
            </div>
        )
    }

    const EditAdress = () => {
        AddAdress(address)
    }

    return (
        <section>
            <div className=' flex flex-col max-w-md p-3 mt-3 shadow hover:border-gray-300 border'>
                <h1 className='mb-2 font-bold border-b pb-1'>{address.first_name} {address.last_name}</h1>

                {dataAdreess('Teléfono', address.phone)}
                {dataAdreess('Dirección', address.address)}
                {dataAdreess('Ciudad', address.city)}
                {dataAdreess('Distrito', address.district)}
                {dataAdreess('Empresa', address.enterprice)}
                {dataAdreess('Código postal', address.zipcode)}
                <div className='flex border-t mt-2 justify-between pt-3 '>
                    <button onClick={EditAdress} className='text-gray-500 hover:text-gray-700'>Actualizar</button>
                    <button className='text-red-400 hover:text-red-600'>Eliminar</button>
                </div>
            </div>


        </section>
    )
}

export default AddressCard