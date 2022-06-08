import { QuestionMarkCircleIcon } from '@heroicons/react/outline'
import { PlusIcon } from '@heroicons/react/solid';
import Link from 'next/link'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add_account, get_address_profile, remove_address } from '../../redux/api/account';
import { AppDispatch, RootState } from '../../redux/store';
import { cities } from '../../utils/helpers/cities';
import { Address } from '../../utils/types/interface';
import AddressCard from '../account/AddressCard';
import AdressAdd from '../account/AdressAdd';
import AddressOption from '../chekout/AddressOption';
const FormDataCheckout: FunctionComponent<{
    onChange: (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>) => void;
    address_id: number

}> = ({

    onChange,
    address_id
}) => {
        const dispatch: AppDispatch = useDispatch()

        useEffect(() => {
            dispatch(get_address_profile())
        }, [dispatch])
        const addresses = useSelector((state: RootState) => state.account.address)
        const [formData, setFormData] = useState<Address>({
            first_name: '',
            last_name: '',
            enterprise: '',
            address: '',
            zipcode: '',
            district: '',
            city: '',
            phone: '',
            id: 0
        })

        const [view, setView] = useState(true)
        const AddAdress = (address: Address) => {
            setFormData(address)
            setView(false);
        }

        const EditAdress = () => {
            setView(false);

        }
        const RemoveAddress = (id: number) => {
            dispatch(remove_address(id));
        }
        const onChangeF = (e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>) => {
            setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
            const item = e.currentTarget.classList
            const esValido = e.currentTarget.validity.valid

            if (esValido) {
                item.replace("border-gray-300", "border-green-300")
                item.replace("border-red-300", "border-green-300")
            } else {
                item.replace("border-gray-300", "border-red-300")
                item.replace("border-green-300", "border-red-300")

            }
        }
        const onSubmit = (e: React.SyntheticEvent) => {
            e.preventDefault();
            dispatch(add_account(formData.id, formData.first_name, formData.last_name, formData.enterprise, formData.address, formData.zipcode, formData.district, formData.city, formData.phone));
            setView(true);
            setFormData({
                first_name: '',
                last_name: '',
                enterprise: '',
                address: '',
                zipcode: '',
                district: '',
                city: '',
                phone: '',
                id: 0
            })
            window.scrollTo(0, 0)
        }
        return (
            <div className="">
                <h2 className='font-semibold text-lg my-4'>Datos de envio</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {
                        view && addresses && addresses.length > 0 && addresses.map((address) => (
                            <AddressOption
                                key={address.id}
                                item={address}
                                onChange={onChange}
                                address_id={address_id}
                                AddAdress={AddAdress}
                                RemoveAddress={RemoveAddress} />
                        ))
                    }
                </div>

                {
                    !view && (
                        <AdressAdd formData={formData} onChange={onChangeF} onSubmit={onSubmit} />
                    )
                }
                {
                    view && (
                        <button onClick={EditAdress} className='bg-gray-600 text-white px-5 py-2 hover:bg-gray-800 my-3 flex items-center' >
                            <PlusIcon className='w-5 h-5' />
                            <span className='ml-2'>Agregar dirección</span>
                        </button>
                    )
                }
            </div>
        )
    }

export default FormDataCheckout