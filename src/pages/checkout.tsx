import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import CartItem from '../components/cart/CartItem'
import Layout from '../components/layout/Layout'
import { IFormCheckout, itemCart } from '../utils/types/interface';
import { get_total_order, process_payment } from '../redux/api/order'
import Link from 'next/link'
import { setAlert } from '../redux/api/alert'
import FormDataCheckout from '../components/cart/FormDataCheckout'
import OrdenSumary from '../components/cart/OrdenSumary'
import { useRouter } from 'next/router'
import SelectShipping from '../components/chekout/SelectShipping'
import CouponApply from '../components/chekout/CouponApply'
import { LockClosedIcon } from '@heroicons/react/solid'
import Steps from '../components/chekout/Steps'

export enum Modulo {
    SHIPPING = "SHIPPING",
    PERSONAL_DATES = "PERSONAL_DATES",
    MAKEORDER = "MAKEORDER",
    CONFIRM = "CONFIRM",
}

const Checkout = () => {
    const router = useRouter();
    const dispatch: AppDispatch = useDispatch()

    const items = useSelector((state: RootState) => state.cart.items)
    const amount = useSelector((state: RootState) => state.cart.amount)
    const authenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
    const coupon = useSelector((state: RootState) => state.order.coupon)

    const [modulo, setModulo] = useState<Modulo>(Modulo.SHIPPING)
    const [renderForm, setRenderForm] = useState(false)
    const [success, setSuccess] = useState(false)
    const [codeCoupon, setCoupon] = useState('')
    const [formData, setFormData] = useState<IFormCheckout>({
        full_name: '',
        address_line_1: '',
        address_line_2: '',
        city: '',
        district: '',
        zipcode: '',
        phone: '',
        coupon_code: '',
        shipping_id: 0,
    });

    const onChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>): void => setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });

    useEffect(() => {
        if (amount !== 0 && amount !== null)
            dispatch(get_total_order())
    }, [amount, dispatch])

    useEffect(() => {
        if (coupon?.can_use)
            dispatch(get_total_order(formData.shipping_id, codeCoupon));
        else
            dispatch(get_total_order(formData.shipping_id, ''));
    }, [formData.shipping_id, codeCoupon, coupon?.can_use, dispatch]);

    const verify = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (formData.shipping_id !== 0) {
            dispatch(setAlert("good", "green"))
            setRenderForm(true)
            setModulo(Modulo.PERSONAL_DATES)
        } else {
            dispatch(setAlert("Debe seleccionar un metodo de entrega", "yellow"))
        }

        if (modulo === Modulo.PERSONAL_DATES) {
            setModulo(Modulo.MAKEORDER)
        } else if (modulo === Modulo.MAKEORDER) {
            dispatch(process_payment(formData.shipping_id,
                formData.coupon_code,
                formData.full_name,
                formData.address_line_1,
                formData.address_line_2,
                formData.district,
                formData.city,
                formData.zipcode,
                formData.phone
            )
            )
            dispatch(setAlert("good", "green"))
            setSuccess(true)
        }
    }

    if (typeof window !== 'undefined' && success)
        router.push('/thanks');

    return (
        <Layout title='Aton | Checkout' content='home content' >
            <div className={`max-w-7xl mx-auto px-2`}>
                <div className='flex flex-col md:flex-row md:space-x-5'>
                    <div className=' w-full md:w-4/6 '>
                        <h1 className='font-semibold text-lg my-4'>Orden</h1>
                        {
                            modulo && (<Steps modulo={modulo} />)
                        }
                        {
                            modulo === Modulo.SHIPPING && (
                                <div>
                                    <CouponApply
                                        codeCoupon={codeCoupon}
                                        onChange={onChange}
                                        coupon_code={formData.coupon_code}
                                        setCoupon={setCoupon}
                                    />
                                    <SelectShipping
                                        onChange={onChange}
                                        shipping_id={formData.shipping_id}
                                    />
                                </div>
                            )
                        }
                        {
                            modulo === Modulo.PERSONAL_DATES && (
                                <div className='w-full '>

                                    <FormDataCheckout
                                        onChange={onChange}
                                        full_name={formData.full_name}
                                        address_line_1={formData.address_line_1}
                                        address_line_2={formData.address_line_2}
                                        zipcode={formData.zipcode}
                                        phone={formData.phone}
                                        city={formData.city}
                                        district={formData.district}
                                    />

                                </div>
                            )
                        }



                        <div className="flex justify-end mt-5 md:mt-10  ">
                            <button
                                onClick={verify}
                                className="group  mt-5 relative w-1/3  flex justify-center py-2 px-4 border border-transparent md:text-lg text-sm  font-medium rounded text-gray-900 uppercase hover:text-white bg-white border-indigo-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <div className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <span className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 md:block hidden" aria-hidden="true"><LockClosedIcon /></span>
                                </div>
                                Continuar
                            </button>
                        </div>
                    </div>

                    <div className=' w-full md:w-2/6 '>
                        <h1 className='font-semibold text-lg my-4'>Suma de la orden</h1>

                        <div className='bg-white rounded-lg  shadow px-4 py-3'>
                            <OrdenSumary />





                        </div>
                    </div>
                </div>


            </div>

        </Layout>
    )
}
export default Checkout