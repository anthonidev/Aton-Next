import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { LockClosedIcon, UserCircleIcon, PlusIcon } from '@heroicons/react/solid';
import AccountLayout from '../../components/layout/LayoutAccount';
import { IFormUpdateInfo, Order } from '../../utils/types/interface';
import Submit from '../../components/button/Submit';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { get_orders, update_profile } from '../../redux/api/account';
import { setAlert } from '../../redux/api/alert';

const AccountOrders = () => {

	const dispatch: AppDispatch = useDispatch();

	useEffect(() => {
		dispatch(get_orders())
	}, [dispatch])


	const count = useSelector((state: RootState) => state.account.orders?.count)
	const next = useSelector((state: RootState) => state.account.orders?.next)
	const previous = useSelector((state: RootState) => state.account.orders?.previous)
	const orders = useSelector((state: RootState) => state.account.orders?.results)

	const ItemTable = (order: Order) => {

		return (
			<tr key={order.id} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
				<td className="p-3">
					<p>{order.transaction_id}</p>
				</td>
				<td className="p-3">
					<p>{order.full_name}</p>
				</td>
				<td className="p-3">
					{order.address}
				</td>
				<td className="p-3">
					{order.date_issued}
				</td>
				<td className="p-3 text-right">
					<p>{order.amount}</p>
				</td>
				<td className="p-3 text-right">
					<span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
						<span>{order.status}</span>
					</span>
				</td>
			</tr>
		)
	}




	return (
		<AccountLayout title='Mi Cuenta | ATON' content='cuenta de usuario de aton' >
			<div>
				<h2 className='font-semibold text-lg'>Mis Pedidos  </h2>
				<div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
					<div className="overflow-x-auto">
						<table className="min-w-full text-sm">
							<thead className="">
								<tr className="text-left">
									<th className="p-3">Codigo</th>
									<th className="p-3">Nombre Completo</th>
									<th className="p-3">Dirección</th>
									<th className="p-3">Fecha</th>
									<th className="p-3">Total</th>
									<th className="p-3">Estado</th>
								</tr>
							</thead>
							<tbody>
								{
									orders?.map((order: Order) => {
										return ItemTable(order)
									}
									)
								}

							</tbody>
						</table>
					</div>
				</div>

			</div>

		</AccountLayout>

	)
}

export default AccountOrders