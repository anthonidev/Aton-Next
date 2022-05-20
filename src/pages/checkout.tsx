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

enum Modulo {
    SHIPPING = "SHIPPING",
    MAKEORDER = "MAKEORDER",
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
        full_name: 'anthoni',
        address_line_1: 'dir1',
        address_line_2: 'dir2',
        city: 'Lima',
        district: 'lima',
        zipcode: '234',
        phone: '4325324534',
        coupon_code: '',
        shipping_id: 0,
    });

    const onChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>): void => setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });

    useEffect(() => {
        if (amount !== 0 && amount !== null)
            dispatch(get_total_order())
    }, [amount,dispatch])

    useEffect(() => {
        if (coupon?.can_use)
            dispatch(get_total_order(formData.shipping_id, codeCoupon));
        else
            dispatch(get_total_order(formData.shipping_id, ''));
    }, [formData.shipping_id, codeCoupon, coupon?.can_use,dispatch]);

    const verify = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (formData.shipping_id !== 0) {
            dispatch(setAlert("good", "green"))
            setRenderForm(true)
        } else {
            dispatch(setAlert("Debe seleccionar un metodo de entrega", "yellow"))
        }

        if (modulo === Modulo.SHIPPING) {
            setModulo(Modulo.MAKEORDER)
        } else {
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
            {
                items?.length ?
                    (<div className={`max-w-7xl mx-auto px-2`}>
                        <div className='flex flex-col md:flex-row md:space-x-5'>
                            <div className=' w-full md:w-4/6 '>
                                <h1 className='font-semibold text-lg my-4'>Orden <span className="text-plo"> ({items?.length})</span></h1>
                                {
                                    items?.map((item: itemCart) => (
                                        <div key={item.product.id} className="flex flex-col px-8 m-2 bg-white rounded-lg ">
                                            <CartItem item={item} />
                                        </div>
                                    ))
                                }
                            </div>

                            <div className=' w-full md:w-2/6 '>
                                <h1 className='font-semibold text-lg my-4'>Suma de la orden</h1>

                                <div className='bg-white rounded-lg  shadow px-4 py-3'>
                                    <OrdenSumary />
                                    <SelectShipping
                                        onChange={onChange}
                                        shipping_id={formData.shipping_id}
                                    />
                                    <CouponApply
                                        codeCoupon={codeCoupon}
                                        onChange={onChange}
                                        coupon_code={formData.coupon_code}
                                        setCoupon={setCoupon}
                                    />
                                    {renderForm && (
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

                                    )}

                                    <div className="w-full">
                                        {authenticated &&
                                            (<button onClick={verify} className=' hover:bg-indigo-500 bg-indigo-400 px-5 py-4 w-full mt-5 rounded-md font-semibold text-gray-800 text-lg' >Procesar Pedido</button>)
                                        }
                                        {!authenticated &&
                                            (<div className='hover:bg-indigo-500 text-center bg-indigo-400 px-5 py-4 w-full mt-5 rounded-md font-semibold text-gray-800 text-lg'> <Link href={'/auth/login'}  ><a  >Iniciar Sesion</a></Link></div>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>) :
                    (<div className=" flex justify-center items-center flex-col pt-10 space-y-8 ">
                        <h3 className="font-semibold text-lg ">No hay productos en el carrito</h3>
                        <Link href={'/store'}><a className="bg-pri px-4 py-3 rounded hover:bg-indigo-600 text-gray-100 ">Ver Productos</a></Link>
                    </div>)
            }

        </Layout>
    )
}
export default Checkout