import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'

import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { AppDispatch, RootState } from '../../redux/store';
import InputForm from '../../components/form/InputForm';
import Submit from '../../components/button/Submit';
import Link from 'next/link';
import { IFormLogin } from '../../utils/types/interface';
import { login } from '../../redux/api/auth';
import Image from 'next/image';
import { setAlert } from '../../redux/api/alert';

const Login = () => {
    const dispatch: AppDispatch = useDispatch();
    const router = useRouter();

    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const loading = useSelector((state: RootState) => state.auth.loading);

    const [formData, setFormData] = useState<IFormLogin>({
        email: '',
        password: '',
    });

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
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
        dispatch(login(formData.email, formData.password));

    };
    if (typeof window !== 'undefined' && isAuthenticated)

        router.push('/');

    return (
        <Layout title='Ingresar | ATON' content="Iniciar sesion en Aton">
            <div className="lg:min-h-screen min-h-fit bg-white flex">
                <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm">
                        <div>
                            <div>

                                <h2 className="mt-6 text-center text-4xl font-extrabold  text-gray-700  ">Inicia sesión con tu cuenta</h2>
                                <p className="mt-2 text-center text-sm text-gray-600">
                                    O{' '}
                                    <Link href="/auth/signup" >
                                        <a className='className="font-medium text-indigo-700 hover:underline hover:text-indigo-500"'>crea una cuenta gratuitamente.</a>
                                    </Link>
                                </p>
                            </div>
                        </div>

                        <div className="mt-8">

                            <div className="mt-6">
                            <form onSubmit={onSubmit} className="mt-8 space-y-6">
                                        <div className="rounded-md shadow-sm -space-y-px">

                                            <InputForm
                                                name={'email'}
                                                type='text'
                                                onChange={onChange}
                                                value={formData.email}
                                                placeholder="Email"

                                            />
                                            <InputForm
                                                name={'password'}
                                                type='password'
                                                onChange={onChange}
                                                value={formData.password}
                                                placeholder="Password"

                                            />
                                        </div>
                                        <div className="flex items-center justify-between">

                                            <div className="text-sm">
                                                <Link href="/auth/reset">
                                                    <a className="font-medium text-indigo-600 hover:underline">
                                                        Olvidaste tu contraseña?
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                        <div>
                                            <Submit loading={loading} text='Ingresar' />
                                        </div>
                                    </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block relative w-0 flex-1">
                    <Image
                        className="absolute inset-0 h-full w-full object-cover"
                        src={`/assets/images/login_portada.webp`}
                        layout="fill"
                        alt={`Portada de login Aton`}
                        quality={100}

                    />
                </div>
            </div>
        </Layout>
    )
}

export default Login