import Link from 'next/link'
import React, { useEffect } from 'react'
import AccountLayout from '../../components/layout/LayoutAccount';
import { Order } from '../../utils/types/interface';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { get_orders } from '../../redux/api/account';
import { EyeIcon } from '@heroicons/react/solid';
import ModelOrder from '../../components/account/ModelOrder';

const AccountOrders = () => {

	const dispatch: AppDispatch = useDispatch();

	useEffect(() => {
		dispatch(get_orders())
	}, [dispatch])


	const count = useSelector((state: RootState) => state.account.orders?.count)
	const next = useSelector((state: RootState) => state.account.orders?.next)
	const previous = useSelector((state: RootState) => state.account.orders?.previous)
	const orders = useSelector((state: RootState) => state.account.orders?.results)

	const [modal, setModal] = React.useState(false)
	const [oderData, setOderData] = React.useState<Order>()
	function closeModal() {
		setModal(false)
	}
	function openModal() {
		setModal(true)
	}

	const viewOrder = (order: Order) => {
		setOderData(order)
		openModal()
	}

	const closeOrder = () => {
		setOderData(undefined)
		closeModal()
	}

	const ItemTable = (order: Order) => {

		return (
			<tr key={order.id} className="border-b border-opacity-20  hover:bg-gray-100">
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
				<td className="p-3 text-left">
					<span className="px-3 py-1 font-semibold rounded-md ">
						<span>{order.status}</span>
					</span>
				</td>
				<td className="p-3 text-left">
					<button onClick={() => viewOrder(order)} className='flex text-gray-600 hover:text-rou '>
						<EyeIcon className='h-5 w-5 ' />
					</button>
				</td>
			</tr>
		)
	}


	return (
		<AccountLayout title='Mi Cuenta | ATON' content='cuenta de usuario de aton' >
			<div>
				{
					modal && oderData && (
						<ModelOrder order={oderData} close={closeOrder} />
					)
				}
				<h2 className='font-semibold text-lg'>Mis Pedidos  </h2>
				<div className="container p-2 mx-auto sm:p-4 shadow">
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
									<th className="p-3"></th>
								</tr>
							</thead>
							<tbody>
								{
									orders?.map((order: Order) => { return ItemTable(order) })
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