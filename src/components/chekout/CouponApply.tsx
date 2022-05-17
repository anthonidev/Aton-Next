import React, { FunctionComponent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { check_coupon } from '../../redux/api/order'
import { AppDispatch, RootState } from '../../redux/store'

const CouponApply: FunctionComponent<{
    codeCoupon:string
    onChange: (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>) => void
    coupon_code:string
    setCoupon:(text:string)=>void
}> = ({codeCoupon,onChange,coupon_code,setCoupon}) => {
    const dispatch: AppDispatch = useDispatch()

    const coupon = useSelector((state: RootState) => state.order.coupon)
    const applyCoupon = (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispatch(check_coupon(coupon_code))
        setCoupon(coupon_code)
    }
    return (
        <div className="border-y-2 border-dashed my-2">

            <div className='my-4 flex justify-between'>
                <input type="text" name="coupon_code" onChange={e => onChange(e)} value={coupon_code} className="border rounded-md p-1 w-1/2" placeholder='COUPON CODE' />
                <button onClick={applyCoupon} className=" bg-blue-300 px-4 py-1 text-pri font-semibold rounded-md"  >Aplicar</button>
            </div>
            <div className="my-2">
                {
                    codeCoupon !== '' ? coupon?.can_use ? (<span className="bg-green-300 px-2 py-1 border border-green-600 text-green-800 rounded text-xs ">Coupon Valido!</span>) : (<span className="bg-red-300  px-2 py-1 border border-red-600 text-red-800 rounded text-xs">Coupon Fail!</span>) : <></>
                }
            </div>

        </div>
    )
}

export default CouponApply