import Link from 'next/link';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import Submit from '../../components/button/Submit';
import InputForm from '../../components/form/InputForm';
import Layout from '../../components/layout/Layout'
import { reset_password } from '../../hooks/auth';
import { IFormResetPass } from '../../types/interface';

const reset = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state: RootState) => state.auth.loading);

    const [formData, setFormData] = useState<IFormResetPass>({
        email: '',
    });
    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispatch(reset_password(formData.email));
    };

    return (
        <Layout title='Reset | ATON' content="reset password en aton">

            <div className="flex justify-center min-h-screen bg-gray-100 antialiased">
                <div className="container sm:mt-40 mt-24 my-auto max-w-md border-2 border-gray-200 p-3 bg-white">
                    <div className="text-center m-6">
                        <h1 className="text-3xl font-semibold text-gray-700">Olvidaste tu contraseña?</h1>
                        <p className="text-gray-500">¡Ingrese su dirección de correo electrónico a continuación y le enviaremos un enlace para restablecer su contraseña!</p>
                    </div>
                    <div className="m-6">
                        <form onSubmit={onSubmit} className="mb-4" >
                            <InputForm
                                name={'email'}
                                type='text'
                                onChange={onChange}
                                value={formData.email}
                                placeholder="Email"
                            />
                            <div className='mt-3'>
                                <Submit loading={loading} text='Enviar' />
                            </div >
                            <div className="text-sm text-center text-gray-400 mt-3">
                                <span> ¿Aún no tienes una cuenta?</span>
                                <Link href="/auth/signup" >
                                    <a className="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline">
                                        Regístrate
                                    </a>
                                </Link>.
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default reset