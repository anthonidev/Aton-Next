import React, { FunctionComponent } from 'react'
import { Address } from '../../utils/types/interface'

const AddressCard: FunctionComponent<{
    address: Address
    AddAdress: (address: Address) => void
    RemoveAddress: (id: number) => void
}> = ({ address, AddAdress, RemoveAddress }) => {

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
    const Delete = () => {
        RemoveAddress(address.id)
    }

    return (
        <li className=' justify-between flex flex-col max-w-md p-3 mt-3 shadow hover:border-gray-300 border'>
            <h1 className=' mb-2 font-bold border-b pb-1'>{address.first_name} {address.last_name}</h1>
            <div>
                {dataAdreess('Teléfono', address.phone)}
                {dataAdreess('Dirección', address.address)}
                {dataAdreess('Ciudad', address.city)}
                {dataAdreess('Distrito', address.district)}
                {dataAdreess('Empresa', address.enterprise)}
                {dataAdreess('Código postal', address.zipcode)}
            </div>

            <div className='flex border-t mt-2 justify-between pt-3  '>
                <button onClick={EditAdress} className='text-gray-500 hover:text-gray-700'>Actualizar</button>
                <button onClick={Delete} className='text-red-400 hover:text-red-600'>Eliminar</button>
            </div>
        </li>


    )
}

export default AddressCard