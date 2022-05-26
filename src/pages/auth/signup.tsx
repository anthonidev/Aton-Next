import Layout from '../../components/layout/Layout'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import React from 'react'
import { useRouter } from 'next/router';
import { AppDispatch, RootState } from '../../redux/store';
import Submit from '../../components/button/Submit';
import { IFormSignUp } from '../../utils/types/interface';
import { signup } from '../../redux/api/auth';
import Image from 'next/image';

const Signup = () => {
    const loading = useSelector((state: RootState) => state.auth.loading);
    const dispatch: AppDispatch = useDispatch()
    const router = useRouter();
    const [accountCreated, setAccountCreated] = useState(false);

    const [formData, setFormData] = useState<IFormSignUp>({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        re_password: ''
    })
    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
        const item = e.currentTarget.classList
        const esValido = e.currentTarget.validity.valid
        console.log(esValido);

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
        dispatch(signup(formData.first_name, formData.last_name, formData.email, formData.password, formData.re_password))
        setAccountCreated(true);
        window.scrollTo(0, 0)
    }
    if (accountCreated)
        router.push('/auth/login');

    return (
        <Layout title='Registrarse | Auth' content="registrar usuario">
            <div className=" max-w-7xl flex mx-auto items-center justify-center m-auto bg-gradient-to-br from-gray-100  to-gray-300/50 my-10 shadow ">

                <div className="md:w-1/2 w-full">
                    <div className=" mx-auto lg:w-3/4 ">
                        <div className="sm:mx-auto sm:w-full sm:max-w-md">
                            <h2 className=" text-center text-3xl font-extrabold text-gray-900 ">Registrate es gratis y lo seguira siendo</h2>
                        </div>
                        <div className=" sm:mx-auto sm:w-full sm:max-w-md">
                            <div className=" py-8 px-4  sm:px-10">
                                <form onSubmit={onSubmit} className="space-y-6">

                                    <div>
                                        <label htmlFor={'name'} className="block text-sm font-medium text-gray-700 capitalize">
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
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-pri-100 rounded-t-md focus:outline-none  sm:text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor={'last_name'} className="block text-sm font-medium text-gray-700 capitalize">
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
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-pri-100 rounded-t-md focus:outline-none  sm:text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor={'email'} className="block text-sm font-medium text-gray-700 capitalize">
                                            Correo Electrónico
                                        </label>
                                        <input
                                            type='email'

                                            name='email'

                                            onChange={onChange}
                                            value={formData.email}
                                            placeholder="Correo Electrónico"
                                            required
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-pri-100 rounded-t-md focus:outline-none  sm:text-sm"

                                        />
                                    </div>
                                    <div>
                                        <label htmlFor={'password'} className="block text-sm font-medium text-gray-700 capitalize">
                                            Contraseña
                                        </label>
                                        <input
                                            name={'password'}
                                            type='password'
                                            onChange={onChange}
                                            value={formData.password}
                                            placeholder="Contraseña"
                                            required
                                            minLength={8}
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-pri-100 rounded-t-md focus:outline-none   sm:text-sm"

                                        />
                                    </div>
                                    <div>
                                        <label htmlFor={'re_password'} className="block text-sm font-medium text-gray-700 capitalize">
                                            Repetir Contraseña
                                        </label>

                                        <input
                                            name={'re_password'}
                                            type='password'
                                            onChange={onChange}
                                            value={formData.re_password}
                                            placeholder="Repetir Contraseña"

                                            required
                                            minLength={8}
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-pri-100 rounded-t-md focus:outline-none   sm:text-sm"

                                        />
                                    </div>





                                    <Submit loading={loading} text="Registrar" />
                                </form>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="w-1/2 hidden lg:block ">
                    <Image
                        className="object-cover"
                        src={`/assets/images/loginPortada.jpg`}
                        layout="responsive"
                        width="100"
                        height="100"
                        alt={`logo`}

                    />
                </div >
            </div>
        </Layout>
    )
}

export default Signup