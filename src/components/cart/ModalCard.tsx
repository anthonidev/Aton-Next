import { XIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import { Product } from '../../utils/types/interface'

const ModalCard:FunctionComponent<{
    product:Product, 
    total_items: number
    amount: number
    closeModal: ()=>void,
}> = ({product,total_items,amount,closeModal}) => {
    return (
        <div className="fixed inset-0 z-10 overflow-y-auto ">
            <div className="min-h-screen px-4 text-center ">
                <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                >
                    &#8203;
                </span>
                <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <div className="flex justify-end items-end ">
                        <button onClick={closeModal}
                            className='text-plo hover:text-pri'
                        >
                            <XIcon className='h-6 w-6' />
                        </button>
                    </div>
                    <div className='flex'>
                        <div className="flex-none w-24 md:w-48  relative">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${product?.photo}`}
                                alt={product?.photo}
                                className="absolute rounded-lg inset-0 w-full h-full object-cover"
                                width={300}
                                height={300}
                                layout="responsive"

                            />
                        </div>
                        <div className="flex-auto p-6">
                            <div className="flex flex-wrap border-b-2 my-4">
                                <h1 className="flex-auto text-xl font-semibold ">
                                    {product?.title}
                                </h1>
                                <div className="text-xl font-semibold text-gray-500 ">
                                    ${product?.price}
                                </div>

                            </div>
                            <div className="flex flex-wrap border-b-2 my-2">
                                <h1 className="flex-auto text-base font-semibold ">
                                    Cantidad de productos en el carrito
                                </h1>
                                <div className="text-xl font-semibold text-gray-500 ">
                                    {total_items}
                                </div>

                            </div>

                            <div className="flex flex-wrap border-b-2 my-2">
                                <h1 className="flex-auto text-base font-semibold ">
                                    Total a pagar
                                </h1>
                                <div className="text-xl font-semibold text-gray-500 ">
                                    ${amount}
                                </div>

                            </div>

                            <div className="flex mb-4 text-sm font-medium">
                                <button onClick={closeModal}
                                    className="px-4 py-2  text-base  rounded-lg  text-indigo-500 border border-indigo-500 ease-in duration-200 text-center  font-semibold shadow-md w-full hover:bg-slate-600 hover:text-white transition"
                                >
                                    Continuar Comprando
                                </button>
                            </div>
                            <div className="flex mb-4 text-sm font-medium">
                                <Link href='/cart/cartinfo' >
                                    <a className=" px-4 py-2  text-base  rounded-lg  text-indigo-500 border border-indigo-500 ease-in duration-200 text-center  font-semibold shadow-md w-full hover:bg-slate-600 hover:text-white transition">
                                        Ver Carrito
                                    </a>
                                </Link>
                            </div>
                            <div className="flex mb-4 text-sm font-medium">
                                <Link href={'/checkout'}  >
                                    <a className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        Pagar Ahora
                                    </a>

                                </Link>
                            </div>
                            <p className="text-sm text-gray-600 ">
                                El precio de envio no esta incluido.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalCard