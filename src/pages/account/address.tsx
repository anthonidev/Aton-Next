import React, { useEffect, useState } from 'react'
import { PlusIcon } from '@heroicons/react/solid';
import AccountLayout from '../../components/layout/LayoutAccount';
import { Address } from '../../utils/types/interface';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import AddressCard from '../../components/account/AddressCard';
import AdressAdd from '../../components/account/AdressAdd';
import { add_account, get_address_profile, remove_address } from '../../redux/api/account';

const AccountAddress = () => {

    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(get_address_profile());
    }, [dispatch])

    const addresses = useSelector((state: RootState) => state.account.address);

    const [view, setView] = useState(true);

    const EditAdress = () => {
        setView(false);

    }

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

    const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>) => {
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

    const AddAdress = (address: Address) => {
        setFormData(address)
        setView(false);

    }

    const RemoveAddress = (id: number) => {
        dispatch(remove_address(id));
    }
    return (
        <AccountLayout title='Mi Cuenta | ATON' content='cuenta de usuario de aton' >
            <section>
                <h2 className='font-semibold text-lg'>Mis direcciones  </h2>
                <ul className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {
                        view && addresses && addresses.length > 0 && addresses.map((address) => (
                            <AddressCard key={address.id} address={address} AddAdress={AddAdress} RemoveAddress={RemoveAddress} />
                        ))
                    }
                </ul>

                {
                    addresses?.length == 0 && <div className='my-5 text-gray-700'>No tienes direcciones!</div>
                }
                {
                    !view && (
                        <AdressAdd formData={formData} onChange={onChange} onSubmit={onSubmit} />
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

            </section>

        </AccountLayout>

    )
}

export default AccountAddress