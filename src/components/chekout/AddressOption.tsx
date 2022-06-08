import React, { FunctionComponent } from 'react'
import { Address } from '../../utils/types/interface'

const AddressOption: FunctionComponent<{
    item: Address,
    onChange: (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>) => void;
    address_id: number
    AddAdress: (address: Address) => void
    RemoveAddress: (id: number) => void
}> = ({ item, onChange, address_id, AddAdress, RemoveAddress }) => {
    const dataAdreess = (title: string, value: string,) => {
        return (
            <div className='flex w-full items-center'>
                <span className='text-gray-700 font-semibold w-1/2'>{title}</span>
                <span className='ml-2 text-gray-700  w-1/2'>{value ? value : "_"}</span>
            </div>
        )
    }

    const EditAdress = () => {
        AddAdress(item)
    }
    const Delete = () => {
        RemoveAddress(item.id)
    }
    return (

        <div className={`flex-col flex justify-between rounded px-1 border-2 ${address_id == item.id ? "border-blue-400 " : "border-plo"}`}>

            <input
                className='mt-2'
                type="radio"
                onChange={e => onChange(e)}
                value={item.id}
                name='address_id'
            />
            <div className=' justify-between flex flex-col max-w-md p-3 mt-3 hover:border-gray-300 '>
                <h1 className=' mb-2 font-bold border-b pb-1'>{item.first_name} {item.last_name}</h1>
                <div>
                    {dataAdreess('Teléfono', item.phone)}
                    {dataAdreess('Dirección', item.address)}
                    {dataAdreess('Ciudad', item.city)}
                    {dataAdreess('Distrito', item.district)}
                    {dataAdreess('Empresa', item.enterprise)}
                    {dataAdreess('Código postal', item.zipcode)}
                </div>


            </div>
            <div className='flex border-t mt-2 justify-between p-2  '>
                <button onClick={EditAdress} className='text-gray-500 hover:text-gray-700'>Editar</button>
                <button onClick={Delete} className='text-red-400 hover:text-red-600'>Eliminar</button>
            </div>
        </div >
    )
}
export default AddressOption