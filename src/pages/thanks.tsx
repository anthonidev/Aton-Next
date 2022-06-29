import Image from 'next/image'
import Link from 'next/link'

import React from 'react'
import Layout from '../components/layout/Layout'

const Thanks = () => {
    return (
        <Layout title='Gracias | Aton' content='Gracias por su compra Aton' >
            <div className='max-w-7xl mx-auto lg:min-h-screen min-h-fill flex  justify-center items-center' >
                <div className='flex flex-col justify-center items-center lg:-mt-60 pb-36 sm:pb-0'>
                    <div className=' mx-10 my-5'>
                        <h1 className='text-center text-3xl md:text-4xl max-w-lg text-gray-600 font-bold '>¡Gracias por su compra!</h1>
                        <h2 className='text-center max-w-lg md:mt-5  md:text-lg  text-gray-400 '>Su pedido ha sido creado correctamente.</h2>
                    </div>
                    {/* button for orders */}
                    <div>
                        <Link href='/account/order' >
                            <a className='text-center text-lg text-gray-600 max-w-lg mx-auto'>
                                <span className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
                                    Ver mis pedidos
                                </span>
                            </a>
                        </Link>
                    </div>

                </div>

            </div>
        </Layout>
    )
}

export default Thanks