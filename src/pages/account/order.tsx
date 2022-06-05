import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { LockClosedIcon, UserCircleIcon, PlusIcon } from '@heroicons/react/solid';
import AccountLayout from '../../components/layout/LayoutAccount';
import { IFormUpdateInfo } from '../../utils/types/interface';
import Submit from '../../components/button/Submit';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { update_profile } from '../../redux/api/account';
import { setAlert } from '../../redux/api/alert';

const AccountOrders = () => {

    const [chekTC, setChekTC] = useState(false)
    const loading = useSelector((state: RootState) => state.auth.loading);
    const dispatch: AppDispatch = useDispatch();


    const dniNow = useSelector((state: RootState) => state.account?.dni);
    const firstName = useSelector((state: RootState) => state.auth.user?.first_name);
    const lastName = useSelector((state: RootState) => state.auth.user?.last_name);
    const Dob = useSelector((state: RootState) => state.account?.dob);
    const Treatment = useSelector((state: RootState) => state.account?.treatment);
    const IdUser = useSelector((state: RootState) => state.auth.user?.id);



    const [formData, setFormData] = useState<IFormUpdateInfo>({
        user: 0,
        first_name: '',
        last_name: '',
        treatment: '',
        dob: '',
        dni: '',
    })

    useEffect(() => {
        setFormData({
            ...formData,
            last_name: lastName || '',
            first_name: firstName || '',
            dob: Dob || '',
            treatment: Treatment || '',
            dni: dniNow || '',
            user: IdUser || 0,

        })

    }, [firstName, lastName, dniNow, Dob, Treatment, IdUser])





    const onChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>) => {
        setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
        const item = e.currentTarget.classList
        const esValido = e.currentTarget.validity.valid

        if (esValido) {
            item.replace("border-gray-300", "border-green-300")
            item.replace("border-red-300", "border-green-300")
        } else {
            item.replace("border-gray-300", "border-red-300")
            item.replace("border-green-300", "border-red-300")

        }

    }

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(chekTC);

        if (chekTC) {
            window.scrollTo(0, 0)
            dispatch(update_profile(formData.first_name, formData.last_name, formData.dni, formData.dob, formData.treatment))
        } else {
            dispatch(setAlert('Debes aceptar los términos y condiciones', 'red'))
        }

    }

    return (
        <AccountLayout title='Mi Cuenta | ATON' content='cuenta de usuario de aton' >
            <div>
                <h2 className='font-semibold text-lg'>Mis direcciones  </h2>
                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
	<h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<colgroup>
				<col/>
				<col/>
				<col/>
				<col/>
				<col/>
				<col className="w-24"/>
			</colgroup>
			<thead className="dark:bg-gray-700">
				<tr className="text-left">
					<th className="p-3">Invoice #</th>
					<th className="p-3">Client</th>
					<th className="p-3">Issued</th>
					<th className="p-3">Due</th>
					<th className="p-3 text-right">Amount</th>
					<th className="p-3">Status</th>
				</tr>
			</thead>
			<tbody>
				<tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Microsoft Corporation</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$15,792</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
							<span>Pending</span>
						</span>
					</td>
				</tr>
				<tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Tesla Inc.</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$275</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
							<span>Pending</span>
						</span>
					</td>
				</tr>
				<tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Coca Cola co.</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$8,950,500</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
							<span>Pending</span>
						</span>
					</td>
				</tr>
				<tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Nvidia Corporation</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$98,218</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
							<span>Pending</span>
						</span>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
                <button className='bg-gray-600 text-white px-5 py-2 hover:bg-gray-800 my-3 flex items-center' >
                    <PlusIcon className='w-5 h-5' />
                    <span className='ml-2'>Agregar dirección</span>
                </button>
            </div>

        </AccountLayout>

    )
}

export default AccountOrders