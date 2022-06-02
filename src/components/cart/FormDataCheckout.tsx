import { QuestionMarkCircleIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import { cities } from '../../utils/helpers/cities';
const FormDataCheckout: FunctionComponent<{
    onChange: (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>) => void;
    full_name: string
    address: string
    zipcode: string
    phone: string
    city: string,
    district: string
}> = ({

    onChange,
    full_name,
    address,
    zipcode,
    phone,
    city,
    district
}) => {


        return (


            <div className="">

                <h2 className='font-semibold text-lg my-4'>Datos de envio</h2>

                <dl className=" bg-white rounded-lg p-1 w-full flex justify-center">

                    <div className="leading-loose">
                        <div className="max-w-xl m-1 ">
                            <div className="">
                                <label className="block text-sm text-gray-600" htmlFor="full_name">Nombre completo</label>
                                <input
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-pri-100 rounded-t-md focus:outline-none  sm:text-sm"
                                    type="text"
                                    required
                                    placeholder="Nombre y apellidos"
                                    aria-label="full_name"
                                    onChange={e => onChange(e)}
                                    value={full_name}
                                    pattern="[a-zA-Z\s]{1,25}"
                                    name='full_name'
                                />
                            </div>

                            <div className="mt-2">
                                <label className=" block text-sm text-gray-600" htmlFor="address_line_1">Dirección</label>
                                <input
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-pri-100 rounded-t-md focus:outline-none  sm:text-sm"
                                    type="text"
                                    required
                                    placeholder="Dirección de envio"
                                    onChange={e => onChange(e)}
                                    value={address}
                                    minLength={5}
                                    name='address'
                                    aria-label="address"

                                />
                            </div>

                            <div className="inline-block mt-2 w-1/2 pr-1">
                                <label className=" block text-sm text-gray-600" htmlFor="country_region">Departamento</label>
                                <select
                                    className="w-full px-2 py-2 text-gray-600 bg-gray-100 rounded focus:outline-indigo-400 focus:border-indigo-500 transition-colors"
                                    name='city'
                                    onChange={e => onChange(e)}
                                >
                                 
                                    {
                                        cities && cities.map((city, index) => (
                                            <option key={index} value={city.name}>{city.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                                <label className=" block text-sm text-gray-600" htmlFor="state_province_region">Distrito</label>
                                <input
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-pri-100 rounded-t-md focus:outline-none  sm:text-sm"
                                    minLength={2}

                                    type="text"
                                    required
                                    placeholder="Distrito"
                                    onChange={e => onChange(e)}
                                    value={district}
                                    name='district'
                                />
                            </div>

                            <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                                <label className=" block text-sm text-gray-600" htmlFor="postal_zip_code">Código Postal</label>
                                <input
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-pri-100 rounded-t-md focus:outline-none  sm:text-sm"
                                    type="text"
                                    required
                                    minLength={1}
                                    placeholder="Código Postal"
                                    onChange={e => onChange(e)}
                                    value={zipcode}
                                    name='zipcode'
                                />
                            </div>
                            <div className="mt-2">
                                <label className=" text-sm block text-gray-600" htmlFor="telephone_number">Número de Teléfono</label>
                                <input
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-pri-100 rounded-t-md focus:outline-none  sm:text-sm"
                                    type="text"
                                    required
                                    placeholder="Número de Teléfono"
                                    onChange={e => onChange(e)}
                                    value={phone}
                                    pattern="[0-9]{0,9}"
                                    name='phone'
                                />
                            </div>
                        </div>
                    </div>
                </dl>

            </div>


        )
    }

export default FormDataCheckout