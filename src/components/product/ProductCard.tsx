import Image from 'next/image'
import React, { FunctionComponent, useState } from 'react'
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/solid'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { itemCart, Product } from '../../utils/types/interface'
import { add_item } from '../../redux/api/cart'
import { setAlert } from '../../redux/api/alert'

const ProductCard: FunctionComponent<{ product: Product }> = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const items = useSelector((state: RootState) => state.cart.items)


  const dispatch: AppDispatch = useDispatch()
  const addToCart = async () => {

    setLoading(true)
    const MoreThatOne = items !== null && items.find((element: itemCart) => element.product.id === product.id);

    MoreThatOne === undefined ? dispatch(setAlert('Producto Agregado', 'green')) : dispatch(setAlert('Producto actualizado', 'green'))

    dispatch(add_item(product));
    setLoading(false)


  }
  return (
    <div className='bg-white  rounded-sm pb-3'>
      <div className='flex justify-between items-center' >
        <div className='bg-ver p-2 text-xs' >
          <span className='text-white'>Disponible</span>
        </div>
        <HeartIcon className='h-4 w-4 mr-3  text-let' />

      </div>
      <div className='m-4'>
        <Image
          src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${product.photo}`}
          layout="responsive"
          height="200"
          width="200"
          alt={product.slug}
        />
      </div>
      <div className='flex'>
        <div className='font-bold ml-4 w-4/5 '>
          <h1 className='text-pri '>{product.title}</h1>
          <div className='flex space-x-2 mt-2'>
            <p className='text-let'>S/{product.compare_price}</p>
            <p className='text-rou'>S/{product.price}</p>

          </div>


        </div>

        <div className=' flex justify-center items-end mb-2   w-1/5 '>
        {loading ? <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-indigo-400 dark:text-coolGray-900 hover:bg-indigo-600">Añadir al carrito</button> :
            <button onClick={addToCart} className='bg-rou p-2 rounded-md hover:bg-pri'>
              <ShoppingCartIcon className='h-6 w-6  text-white' />
            </button>
          }

        </div>

      </div>

    </div>
  )
}

export default ProductCard