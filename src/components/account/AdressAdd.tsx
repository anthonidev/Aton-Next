import React, { FunctionComponent } from 'react'
import { Address } from '../../utils/types/interface'
import { cities } from '../../utils/helpers/cities';

const AdressAdd: FunctionComponent<{
    formData: Address
    onChange: (e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>) => void
    onSubmit: (e: React.FormEvent) => void
}> = ({ formData, onChange, onSubmit }) => {

    const dataForm = (
        name: string,
        value: string,
        placeHolver: string,
        required: boolean,
        pattern: string = "") => {
        return (
            <div className='flex flex-col md:flex-row justify-between my-4'>
                <label htmlFor={name} className=" text-sm font-medium text-gray-700 capitalize w-1/4 flex justify-start md:justify-end  mr-10  items-center">
                    {placeHolver}
                </label>
                <input
                    name={name}
                    type='text'
                    onChange={onChange}
                    value={value}
                    placeholder={placeHolver}
                    required={required}
                    pattern={pattern ? pattern : undefined}
                    className="appearance-none rounded-none w-full  md:w-2/4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-pri-100 rounded-t-md focus:outline-none  sm:text-sm"
                />
                <div className='w-1/4 flex  md:justify-center text-xs items-center'>
                    {!required && (<span className='text-gray-600' >Opcional</span>)}
                </div>
            </div>
        )

    }


    return (
        <form onSubmit={onSubmit} className='border p-4 shadow '>
            {dataForm('first_name', formData.first_name, 'Nombre', true, '[a-zA-Z\s]{1,25}')}
            {dataForm('last_name', formData.last_name, 'Apellidos', true, '[a-zA-Z\s]+[ ]+[a-zA-Z\s]{1,25}')}
            {dataForm('address', formData.address, 'Dirección', true)}
            <div className="flex flex-col md:flex-row  my-4">
                <label className="text-sm font-medium text-gray-700 capitalize w-1/4 flex justify-start md:justify-end  mr-10  items-center" htmlFor="city">Departamento</label>
                <select
                    className="appearance-none bg-white rounded-none w-full  md:w-2/4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-pri-100 rounded-t-md focus:outline-none  sm:text-sm"
                    name='city'
                    onChange={onChange}
                >

                    {
                        cities && cities.map((city, index) => (
                            <option key={index} value={city.name}>{city.name}</option>
                        ))
                    }
                </select>
                <div className='w-1/4 flex  md:justify-center text-xs items-center'>
                </div>
            </div>
            {dataForm('district', formData.district, 'Distrito', true, '[a-zA-Z0-9\s]{1,25}')}
            {dataForm('phone', formData.phone, 'Teléfono', true, '[0-9]{9}')}
            {dataForm('enterprise', formData.enterprise, 'Empresa', false, '[a-zA-Z0-9\s]{1,25}')}
            {dataForm('zipcode', formData.zipcode, 'Código Postal', false, '[0-9]{5}')}



            <div className='flex justify-center'>
                <button type='submit' className='text-white px-5 py-1 rounded-sm hover:bg-gray-600 bg-gray-400'>Guardar</button>
            </div>





        </form>
    )
}

export default AdressAdd