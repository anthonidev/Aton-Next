import { LockClosedIcon, ShieldCheckIcon, ShoppingBagIcon, ShoppingCartIcon, TagIcon, TruckIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'

const Features = () => {
    return (

        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl ">Aton Store </h1>

                <div className="mt-2">
                    <span className="inline-block w-40 h-1 rounded-full bg-red-500"></span>
                    <span className="inline-block w-3 h-1 ml-1 rounded-full bg-red-500"></span>
                    <span className="inline-block w-1 h-1 ml-1 rounded-full bg-red-500"></span>
                </div>

                <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
                    <div className="w-full lg:w-1/2 grid grid-cols-1 gap-8 xl:gap-16 md:grid-cols-2">
                        <div className="space-y-3">
                            <span className="inline-block p-3 text-red-500 bg-red-100 rounded-xl  ">
                                <TagIcon className='w-6 h-6' />
                            </span>

                            <h1 className="text-2xl font-semibold text-gray-700 capitalize ">Productos Nuevos</h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                Todos los productos en Aton Store son 100% nuevos.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <span className="inline-block p-3 text-red-500 bg-red-100 rounded-xl  ">
                                <ShoppingBagIcon className='w-6 h-6' />
                            </span>

                            <h1 className="text-2xl font-semibold text-gray-700 capitalize ">Compra fácil</h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                Elige tu producto, la dirección de entrega y paga cuando el producto llegue a tu casa.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <span className="inline-block p-3 text-red-500 bg-red-100 rounded-xl  ">
                                <TruckIcon className='w-6 h-6' />
                            </span>

                            <h1 className="text-2xl font-semibold text-gray-700 capitalize ">Envíos a todo el país</h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                Recibe tus productos en cualquier lugar del país .
                            </p>
                        </div>

                        <div className="space-y-3">
                            <span className="inline-block p-3 text-red-500 bg-red-100 rounded-xl  ">
                                <ShieldCheckIcon className='w-6 h-6' />
                            </span>

                            <h1 className="text-2xl font-semibold text-gray-700 capitalize ">Garantia y seguridad</h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                Garantizamos la seguridad de tus productos.
                            </p>
                        </div>
                    </div>

                    <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
                        <div className='w-3/4'>
                            <Image src={`/assets/images/Portada.webp`}
                                layout="responsive"
                                width={`100`}
                                height={`100`}
                                alt={`logo`}
                                className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" />
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features