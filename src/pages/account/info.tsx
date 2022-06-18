import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { LockClosedIcon, UserCircleIcon } from '@heroicons/react/solid';
import AccountLayout from '../../components/layout/LayoutAccount';
import { IFormUpdateInfo } from '../../utils/types/interface';
import Submit from '../../components/button/Submit';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { update_profile } from '../../redux/api/account';
import { SpinnerCircularFixed } from 'spinners-react';
import { setAlert } from '../../redux/api/alert';

const AccountInfo = () => {

    const [chekTC, setChekTC] = useState(false)
    const loading = useSelector((state: RootState) => state.auth.loading);
    const dispatch: AppDispatch = useDispatch();


    const dniNow = useSelector((state: RootState) => state.account?.dni);
    const firstName = useSelector((state: RootState) => state.auth.user?.first_name);
    const lastName = useSelector((state: RootState) => state.auth.user?.last_name);
    const Dob = useSelector((state: RootState) => state.account?.dob);
    const Treatment = useSelector((state: RootState) => state.account?.treatment);
    const IdUser = useSelector((state: RootState) => state.auth.user?.id);

    const [image, setImage] = useState(null);
    const onFileChange = (e: any) => setImage(e.target.files[0]);
    const [formData, setFormData] = useState<IFormUpdateInfo>({
        user: 0,
        first_name: '',
        last_name: '',
        treatment: '',
        dob: '',
        dni: '',
    })

    useEffect(() => {
        setFormData({
            ...formData,
            last_name: lastName || '',
            first_name: firstName || '',
            dob: Dob || '',
            treatment: Treatment || '',
            dni: dniNow || '',
            user: IdUser || 0,

        })

    }, [firstName, lastName, dniNow, Dob, Treatment, IdUser])





    const onChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>) => {
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
        if (chekTC) {
            window.scrollTo(0, 0)
            dispatch(update_profile(formData.first_name, formData.last_name, formData.dni, formData.dob, formData.treatment, image))
        } else {
            dispatch(setAlert('Debes aceptar los términos y condiciones', 'red'))
        }

    }

    return (
        <AccountLayout title='Mi Cuenta | ATON' content='cuenta de usuario de aton' >
            <div className='shadow p-3'>
                <h2 className='font-semibold text-lg'>Sus datos personales </h2>
                <div className='mt-5 '>
                    <form onSubmit={onSubmit} className="space-y-6 flex flex-col ">
                        <div className='flex flex-col md:flex-row  items-start md:items-center max-w-lg space-x-4'>
                            <label htmlFor={'tra'} className="block w-1/2 text-sm font-medium text-gray-700 capitalize">
                                Tratamiento
                            </label>
                            <div className="w-full  ">
                                <div>
                                    <div className="form-check">
                                        <input
                                            className='mr-2'
                                            type="radio"
                                            name="treatment"
                                            id="treatment"
                                            value={'Sr.'}
                                            checked={formData.treatment === 'Sr.'}
                                            onChange={onChange}

                                        />
                                        <label className="form-check-label inline-block text-gray-800" htmlFor='treatment' >
                                            Sr.
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className='mr-2'
                                            type="radio"
                                            name="treatment"
                                            id="treatment"
                                            value={'Sra.'}
                                            onChange={onChange}
                                            checked={formData.treatment === 'Sra.'}

                                        />
                                        <label className="form-check-label inline-block text-gray-800" htmlFor="treatment">
                                            Sra.
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row  items-start md:items-center max-w-lg space-x-4'>
                            <label htmlFor={'name'} className="block w-1/2 text-sm font-medium text-gray-700 capitalize">
                                Nombres
                            </label>
                            <input
                                name='first_name'
                                type='text'
                                onChange={onChange}
                                value={formData.first_name}
                                placeholder="Nombres"
                                required
                                pattern="[a-zA-Z\s]{1,25}"
                                className="appearance-none capitalize rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-pri-100 rounded-t-md focus:outline-none  sm:text-sm"
                            />
                        </div>
                        <div className='flex flex-col md:flex-row items-start md:items-center max-w-lg space-x-4'>
                            <label htmlFor={'last_name'} className="w-1/2 block text-sm font-medium text-gray-700 capitalize">
                                Apellidos
                            </label>
                            <input
                                name='last_name'
                                type='text'
                                onChange={onChange}
                                value={formData.last_name}
                                placeholder="Apellidos"
                                required
                                pattern="[a-zA-Z\s]{1,25}"
                                className="appearance-none capitalize rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-pri-100 rounded-t-md focus:outline-none  sm:text-sm"
                            />
                        </div>

                        <div className='flex flex-col md:flex-row  items-start md:items-center max-w-lg space-x-4'>
                            <label htmlFor={'dni'} className="w-1/2 block text-sm font-medium text-gray-700 capitalize">
                                Dni
                            </label>
                            <input
                                name={'dni'}
                                type='text'
                                onChange={onChange}
                                value={formData.dni}
                                placeholder="DNI"
                                required
                                minLength={8}
                                maxLength={8}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-pri-100 rounded-t-md focus:outline-none   sm:text-sm"

                            />
                        </div>
                        <div className='form-group'>
                            <label className='form-label' htmlFor='image'>
                                Image Upload
                            </label>
                            <input
                                className='form-control'
                                type='file'
                                name='image'
                                onChange={onFileChange}
                                required
                            />
                        </div>
                        <div className='flex flex-col md:flex-row  items-start md:items-center max-w-lg space-x-4'>
                            <label htmlFor={'dob'} className="block w-1/2 text-sm font-medium text-gray-700 capitalize">
                                Fecha de nacimiento
                            </label>

                            <input
                                name='dob'
                                type='date'
                                onChange={onChange}
                                value={formData.dob}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-pri-100 rounded-t-md focus:outline-none   sm:text-sm"
                            />

                        </div>
                        <div className='flex '>
                            <div className='flex items-center justify-center'>
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 border-gray-300 rounded  focus:outline-none checkbox checkbox-primary "
                                    onChange={() => setChekTC(!chekTC)}

                                />
                                <label
                                    className="ml-3 text-sm dark:text-day-500 text-gray-600 "
                                >
                                    Acepto los <a href='/terms' className='text-blue-600'>terminos y condiciones</a>
                                </label>
                            </div>
                        </div>
                        <div className='max-w-xs'>
                            <div> {
                                loading ? (<button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded text-gray-900 uppercase hover:text-white bg-white border-indigo-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <SpinnerCircularFixed size={37} thickness={115} speed={151} color="rgba(0, 0, 168, 1)" secondaryColor="rgba(255, 255, 255, 1)" />
                                </button>) : (
                                    <button
                                        type="submit"
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded text-gray-900 uppercase hover:text-white bg-white border-indigo-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <div className="absolute left-0 inset-y-0 flex items-center pl-3">
                                            <span className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true"><LockClosedIcon /></span>
                                        </div>
                                        Guardar
                                    </button>
                                )
                            }</div>
                        </div>

                    </form>
                </div>
            </div>
        </AccountLayout>

    )
}

export default AccountInfo