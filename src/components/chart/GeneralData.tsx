import React, { FunctionComponent } from 'react'
import { generalData } from '../../redux/slice/reportSlice'
import { UserGroupIcon, EyeIcon, ShoppingCartIcon, ViewGridIcon, ShoppingBagIcon, ArchiveIcon } from '@heroicons/react/outline'

const GeneralData: FunctionComponent<{
    data: generalData
}> = ({ data: {
    products,
    orders,
    subcategories,
    sales_products,
    visits,
    clients
} }) => {

        const pushdata = [
            {
                svg: <ArchiveIcon className='w-6 h-6' />,
                title: 'Productos',
                id: 1,
                value: products
            },
            {
                svg: <ShoppingBagIcon className='w-6 h-6' />,
                title: 'Ordenes',
                id: 2,
                value: orders
            },
            {
                svg: <ViewGridIcon className='w-6 h-6' />,
                title: 'Categorias',
                id: 3,
                value: subcategories
            },
            {
                svg: <ShoppingCartIcon className='w-6 h-6' />,
                title: 'Productos vendidos',
                id: 4,
                value: sales_products
            },
            {
                svg: <EyeIcon className='w-6 h-6' />,
                title: 'Total de visitas',
                id: 5,
                value: visits
            },
            {
                svg: <UserGroupIcon className='w-6 h-6' />,
                title: 'Clientes',
                id: 6,
                value: clients
            }


        ]

        return (
            <section className=" my-6  ">
                <div className="container grid grid-cols-1 gap-6 m-4 mx-auto md:m-0 md:grid-cols-2 xl:grid-cols-2">
                    {
                        pushdata.map(({ id, title, svg, value }) => {
                            return (
                                <div key={id} className="flex overflow-hidden rounded-lg border shadow-sm">
                                    <div className="flex items-center justify-center px-4 ">
                                        {svg}
                                    </div>
                                    <div className="flex flex-col p-3">
                                        <p className='text-xs text-gray-500'>{title}</p>
                                        <p className="text-3xl font-semibold text-gray-800">{value}</p>

                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </section>

        )
    }

export default GeneralData