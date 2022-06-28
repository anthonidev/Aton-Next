import { XIcon } from '@heroicons/react/solid'
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

                        <div>
                            <h2 className='font-semibold text-lg'>Código de la orden: {order.transaction_id}</h2>
                            <p className='text-sm'>{order.full_name}</p>
                            <p className='text-sm'>{order.address}</p>
                            <p className='text-sm'>{moment(order.date_issued).format('MMMM Do YYYY, h:mm:ss a')}</p>

                        </div>

                        <div className="container p-2 mx-auto sm:p-4 ">
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-sm">
                                    <thead className="">
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
                    <div className="flex-auto p-6">

                        <div className="flex flex-wrap border-b-2 my-2">
                            <h1 className="flex-auto text-base font-semibold ">
                                Cantidad de productos
                            </h1>
                            <div className="text-xl font-semibold text-gray-500 ">
                                {order.orders.length}
                            </div>
                        </div>
                        <div className="flex flex-wrap border-b-2 my-2">
                            <h1 className="flex-auto text-base font-semibold ">
                                Total
                            </h1>
                            <div className="text-xl font-semibold text-gray-500 ">
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