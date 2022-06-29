import { ClipboardCheckIcon, XIcon } from '@heroicons/react/solid'
import moment from 'moment'
import Image from 'next/image'
import React, { FunctionComponent } from 'react'
import { formatterSoles } from '../../utils/helpers/prices'
import { Order, OrderItem } from '../../utils/types/interface'

const ModelOrder: FunctionComponent<{
    order: Order
    close: () => void
}> = ({ order, close }) => {

    const OrderItem = (item: OrderItem) => {
        return (
            <tr key={item.id} className="border-b border-opacity-20  hover:bg-gray-100">

                <td className="p-3">
                    <Image
                        alt={item.product.title}
                        className=" object-cover object-center rounded"
                        src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${item.product.photo}`}
                        layout="intrinsic"
                        height="50"
                        width="50"
                    />
                </td>

                <td className="p-3">
                    <p>{item.product.title}</p>
                </td>
                <td className="p-3">
                    <p>{item.count}</p>
                </td>
                <td className="p-3">
                    {item.product.price}
                </td>

            </tr>
        )

    }
    return (
        <div className="fixed inset-0 z-10 overflow-y-auto ">
            <div className="min-h-screen px-4 text-center ">
                <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                >
                    &#8203;
                </span>
                <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded border">
                    <div className="flex justify-end items-end ">
                        <button onClick={close}
                            className='text-plo hover:text-pri'
                        >
                            <XIcon className='h-6 w-6' />
                        </button>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-center text-xs'>{moment(order.date_issued).format('MMMM Do YYYY, h:mm:ss a')}</span>

                        <span className='text-center mb-3 uppercase font-bold text-lg text-gray-700'>Detalle del pedido</span>
                        <div className='text-sm text-gray-800 mx-5 capitalize'>
                            <p ><span className='font-semibold '> Nombre:</span> {order.full_name}</p>
                            <p ><span className='font-semibold '> Dirección:</span> {order.address}</p>
                            <p ><span className='font-semibold '> Código:</span> {order.transaction_id}</p>
                        </div>

                        <div className="container p-2 mx-auto sm:p-4 ">
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-sm">
                                    <thead className="bg-gray-200">
                                        <tr className="text-left">
                                            <th className="p-3">Imagen</th>
                                            <th className="p-3">Producto</th>
                                            <th className="p-3">Cantidad</th>
                                            <th className="p-3">Precio/unidad</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            order.orders?.map((item) => { return OrderItem(item) })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>


                    </div>
                    <div className="flex-auto px-6 text-gray-700">
                        <div className="flex flex-wrap border-b my-2">
                            <span className="flex-auto text-base font-semibold ">
                                Cantidad de productos
                            </span>
                            <div className="text-xl font-semibold text-gray-900  ">
                                {order.orders.length}
                            </div>
                        </div>
                        <div className="flex flex-wrap border-b my-2">
                            <span className="flex-auto text-base font-semibold ">
                                Total
                            </span>
                            <div className="text-xl font-semibold text-gray-900 ">
                                {formatterSoles.format(parseInt(order.amount))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModelOrder