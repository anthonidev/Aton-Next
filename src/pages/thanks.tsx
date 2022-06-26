import Image from 'next/image'

import React from 'react'
import Layout from '../components/layout/Layout'

const Thanks = () => {
    return (
        <Layout title='Gracias | Aton' content='Gracias por su compra Aton' >
            <div className='max-w-7xl mx-auto lg:min-h-screen min-h-fill ' >
                <div className='flex flex-col justify-center items-center'>
                    <div className="lg:w-3/5 w-full">
                        <Image
                            className="object-cover"
                            src={`/assets/images/frame_thanks.gif`}
                            layout="responsive"
                            width={200}
                            height={100}
                            alt={`Portada de login Aton`}
                            quality={100}

                        />
                    </div>
                    <div className=' mx-10 my-5'>
                        <h1 className='text-center text-3xl max-w-lg text-gray-600 '>¡Gracias por su compra!</h1>
                        <h2 className='text-center max-w-lg  text-gray-400 '>Su pedido ha sido creado correctamente.</h2>
                    </div>
                    {/* button for orders */}
                    <div>
                        <a href='/account/order' className='text-center text-lg text-gray-600 max-w-lg mx-auto'>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                                Ver mis pedidos
                            </button>
                        </a>
                    </div>

                </div>

            </div>
        </Layout>
    )
}

export default Thanks