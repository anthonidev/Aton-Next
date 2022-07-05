import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import Layout from '../components/layout/Layout'
import { IFormCheckout } from '../utils/types/interface';
import { get_total_order, process_payment } from '../redux/api/order'
import { setAlert } from '../redux/api/alert'
import FormDataCheckout from '../components/cart/FormDataCheckout'
import OrdenSumary from '../components/cart/OrdenSumary'
import { useRouter } from 'next/router'
import SelectShipping from '../components/chekout/SelectShipping'
import CouponApply from '../components/chekout/CouponApply'
import { LockClosedIcon } from '@heroicons/react/solid'
import Steps from '../components/chekout/Steps'
import OrdenDetailConfirm from '../components/chekout/OrdenDetailConfirm';

export enum Modulo {
    SHIPPING = "SHIPPING",
    PERSONAL_DATES = "PERSONAL_DATES",
    MAKEORDER = "MAKEORDER",
    CONFIRM = "CONFIRM",
}

const Checkout = () => {
    const router = useRouter();
    const dispatch: AppDispatch = useDispatch()


    const amount = useSelector((state: RootState) => state.cart.amount)
    const coupon = useSelector((state: RootState) => state.order.coupon)

    const [modulo, setModulo] = useState<Modulo>(Modulo.SHIPPING)
    const [chekTC, setChekTC] = useState(false)
    const [codeCoupon, setCoupon] = useState('')
    const [formData, setFormData] = useState<IFormCheckout>({
        coupon_code: '',
        address_id: 0,
        shipping_id: 0,
    });

    const onChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>) => {
        setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
        const item = e.currentTarget.classList
        const esValido = e.currentTarget.validity.valid
        console.log(esValido);

        if (esValido) {
            item.replace("border-gray-300", "border-green-300")
            item.replace("border-red-300", "border-green-300")
        } else {
            item.replace("border-gray-300", "border-red-300")
            item.replace("border-green-300", "border-red-300")
        }

    }
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
            setModulo(Modulo.PERSONAL_DATES)
        } else {
            dispatch(setAlert("Debe seleccionar un metodo de entrega", "yellow"))
        }
        if (modulo === Modulo.PERSONAL_DATES) {
            if (formData.address_id !== 0) {
                setModulo(Modulo.MAKEORDER)

            } else {
                dispatch(setAlert("Debe seleccionar una dirección", "yellow"))
            }

        } else if (modulo === Modulo.MAKEORDER) {
            if (chekTC) {

                dispatch(process_payment(
                    formData.shipping_id,
                    formData.coupon_code,
                    formData.address_id
                )
                )
                dispatch(setAlert("Gracias por su compra", "green"))
                setModulo(Modulo.CONFIRM)
                router.push('/thanks');
            } else {
                dispatch(setAlert("Debe aceptar los terminos y condiciones", "yellow"))
                setModulo(Modulo.MAKEORDER)

            }
        }
    }

   

    return (
        <Layout title='Aton Store | Pedido' content='Realiza tus pedido facilmente en aton store' >
            <div className={`max-w-7xl mx-auto px-2 pb-20 md:pb-10  min-h-screen`}>
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
                                        address_id={formData.address_id}
                                    />

                                </div>
                            )
                        }
                        {
                            modulo === Modulo.MAKEORDER && (
                                <div className='w-full '>

                                    <OrdenDetailConfirm />

                                    <div className='flex items-center justify-center mt-4'>
                                        <input
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded  focus:outline-none checkbox checkbox-primary "
                                            onClick={() => setChekTC(!chekTC)}
                                            defaultChecked={chekTC}

                                        />
                                        <label
                                            htmlFor={`filter`}
                                            className="ml-3 text-sm dark:text-day-500 text-gray-600 "
                                        >
                                            Acepto los <a href='/terms' className='text-blue-600'>terminos y condiciones</a>
                                        </label>
                                    </div>
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