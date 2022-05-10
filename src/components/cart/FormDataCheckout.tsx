import { QuestionMarkCircleIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import { cities } from '../../utils/helpers/cities';
const FormDataCheckout: FunctionComponent<{
    onChange: (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>) => void;
    full_name: string
    address_line_1: string
    address_line_2: string
    zipcode: string
    phone: string
    city: string,
    district: string
}> = ({

    onChange,
    full_name,
    address_line_1,
    address_line_2,
    zipcode,
    phone,
    city,
    district
}) => {


        return (


            <div className="">
             
                <h2 className='font-semibold text-lg my-4'>Datos de envio</h2>

                <dl className=" bg-white rounded-lg p-2">

                    <div className="leading-loose">
                        <div className="max-w-xl m-4 ">
                            <div className="">
                                <label className="block text-sm text-gray-600" htmlFor="full_name">Nombre completo</label>
                                <input
                                    className="w-full px-5 py-1 text-gray-700 bg-gray-100 rounded focus:outline-indigo-400 focus:border-indigo-500 transition-colors"
                                    type="text"
                                    required
                                    placeholder="Nombre y apellidos"
                                    aria-label="full_name"
                                    onChange={e => onChange(e)}
                                    value={full_name}
                                    name='full_name'
                                />
                            </div>

                            <div className="mt-2">
                                <label className=" block text-sm text-gray-600" htmlFor="address_line_1">Dirección</label>
                                <input
                                    className="w-full px-5 py-1 text-gray-700 bg-gray-100 rounded focus:outline-indigo-400 focus:border-indigo-500 transition-colors"
                                    type="text"
                                    required
                                    placeholder="Dirección 1"
                                    onChange={e => onChange(e)}
                                    value={address_line_1}
                                    name='address_line_1'
                                    aria-label="address_line_1"

                                />
                            </div>
                            <div className="mt-2">
                                <label className=" text-sm block text-gray-600" htmlFor="address_line_2">Linea 2</label>
                                <input
                                    className="w-full px-5 py-1 text-gray-700 bg-gray-100 rounded focus:outline-indigo-400 focus:border-indigo-500 transition-colors"
                                    type="text"
                                    required
                                    placeholder="Dirección 2"
                                    onChange={e => onChange(e)}
                                    value={address_line_2}
                                    name='address_line_2'
                                />
                            </div>
                            <div className="inline-block mt-2 w-1/2 pr-1">
                                <label className=" block text-sm text-gray-600" htmlFor="country_region">Country</label>
                                <select
                                    className="w-full px-2 py-2 text-gray-700 bg-gray-100 rounded focus:outline-indigo-400 focus:border-indigo-500 transition-colors"
                                    name='city'
                                    onChange={e => onChange(e)}
                                >
                                    <option value={city}>Lima
                                    </option>
                                    {
                                        cities && cities.map((city, index) => (
                                            <option key={index} value={city.name}>{city.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                                <label className=" block text-sm text-gray-600" htmlFor="state_province_region">Provincia</label>
                                <input
                                    className="w-full px-5 py-1 text-gray-700 bg-gray-100 rounded focus:outline-indigo-400 focus:border-indigo-500 transition-colors"
                                    type="text"
                                    required
                                    placeholder="Provincia"
                                    onChange={e => onChange(e)}
                                    value={district}
                                    name='district'
                                />
                            </div>

                            <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                                <label className=" block text-sm text-gray-600" htmlFor="postal_zip_code">Código Postal</label>
                                <input
                                    className="w-full px-5 py-1 text-gray-700 bg-gray-100 rounded focus:outline-indigo-400 focus:border-indigo-500 transition-colors"
                                    type="text"
                                    required
                                    placeholder="Código Postal"
                                    onChange={e => onChange(e)}
                                    value={zipcode}
                                    name='zipcode'
                                />
                            </div>
                            <div className="mt-2">
                                <label className=" text-sm block text-gray-600" htmlFor="telephone_number">Número de Teléfono</label>
                                <input
                                    className="w-full px-5 py-1 text-gray-700 bg-gray-100 rounded focus:outline-indigo-400 focus:border-indigo-500 transition-colors"
                                    type="text"
                                    required
                                    placeholder="Número de Teléfono"
                                    onChange={e => onChange(e)}
                                    value={phone}
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