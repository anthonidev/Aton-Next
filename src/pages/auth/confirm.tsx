import Image from 'next/image'

import React from 'react'
import Layout from '../../components/layout/Layout'

const Confirm = () => {
    return (
        <Layout title='Activar | Aton ' content='correo enviado para activar cuenta ATON' >
            <div className='max-w-7xl mx-auto lg:min-h-screen min-h-fill ' >
                <div className='flex flex-col justify-center items-center'>
                    <div className="lg:w-3/5 w-full">
                        <Image
                            className="object-cover"
                            src={`/assets/images/send_mail.png`}
                            layout="responsive"
                            width={200}
                            height={100}
                            alt={`Portada de login Aton`}
                            quality={100}

                        />
                    </div>
                    <h1 className='text-center text-2xl max-w-lg m-10 text-gray-600 '>Se ha enviado un correo para confirmar tu cuenta, por favor revise su bandeja de entrada.</h1>

                </div>

            </div>
        </Layout>
    )
}

export default Confirm