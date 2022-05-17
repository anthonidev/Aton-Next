import Link from 'next/link'
import React from 'react'
import Layout from '../components/layout/Layout'

const Thanks = () => {
    return (
        <Layout title='Aton | Checkout' content='home content' >
            <div className='max-w-7xl mx-auto h-96' >
                <h1 className='text-center text-5xl font-bold text-plo mt-32'>Gracias por su compra</h1>
                <div className='flex justify-center'>
                    <Link href={'/'}  ><a className='mt-3 text-rou text-center font-semibold text-lg border-b-2 hover:border-rou' >Ir al inicio</a></Link>
                </div>
            </div>
        </Layout>
    )
}

export default Thanks