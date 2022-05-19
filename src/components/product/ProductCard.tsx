import Image from 'next/image'
import React, { FunctionComponent, useState } from 'react'
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/solid'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { itemCart, Product } from '../../utils/types/interface'
import { add_item } from '../../redux/api/cart'
import { setAlert } from '../../redux/api/alert'
import Link from 'next/link'
import { formatterSoles } from '../../utils/helpers/prices'
import ModalCard from '../cart/ModalCard'

const ProductCard: FunctionComponent<{ product: Product }> = ({ product }) => {

  const items = useSelector((state: RootState) => state.cart.items)
  const total_items = useSelector((state: RootState) => state.cart.total_items)
  const amount = useSelector((state: RootState) => state.cart.amount)

  const dispatch: AppDispatch = useDispatch()

  let [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false);


  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }

  const addToCart = async () => {

    setLoading(true)
    const MoreThatOne = items !== null && items.find((element: itemCart) => element.product.id === product.id);

    if (MoreThatOne === undefined) openModal()
    else if (MoreThatOne !== false && MoreThatOne !== undefined) {
      if (product.quantity !== 1) MoreThatOne.count - product.quantity === 0 ? dispatch(setAlert('No hay stock', 'yellow')) : dispatch(setAlert('Producto actualizado', 'green'))
      else MoreThatOne.count - product.quantity !== 0 ? dispatch(setAlert('Producto actualizado', 'green')) : dispatch(setAlert('No hay stock', 'red'))
    }

    dispatch(add_item(product));
    setLoading(false)
  }

  return (
    <div>
      {
        isOpen && total_items !== null && amount !== null && <ModalCard product={product} total_items={total_items} amount={amount} closeModal={closeModal} />
      }
      <div className='bg-white  rounded-sm pb-3'>
        <div className='flex justify-between items-center' >
          <div className='bg-ver p-2 text-xs' >
            <span className='text-white'>Disponible</span>
          </div>
          <HeartIcon className='h-4 w-4 mr-3  text-let' />

        </div>
        <Link href={{
          pathname: '/product/[slug]',
          query: { slug: product.slug },
        }}>
          <a className='m-4'>
            <Image
              src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${product.photo}`}
              layout="responsive"
              height="200"
              width="200"
              alt={product.slug}
            />
          </a>
        </Link>
        <div className='flex'>
          <div className='font-bold ml-4 w-4/5 '>
            <h1 className='text-pri '>{product.title}</h1>
            <div className='flex space-x-2 mt-2'>
              <p className='text-let line-through font-semibold'>{formatterSoles.format(product?.compare_price)}</p>
              <p className='text-black'>{formatterSoles.format(product?.price)}</p>

            </div>


          </div>

          <div className=' flex justify-center items-end mb-2   w-1/5 '>
            {loading ? <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-indigo-400 dark:text-coolGray-900 hover:bg-indigo-600">Añadir al carrito</button> :
              <button onClick={addToCart} className='bg-black p-2 rounded-md hover:bg-pri'>
                <ShoppingCartIcon className='h-6 w-6  text-white' />
              </button>
            }

          </div>

        </div>

      </div>
    </div>

  )
}

export default ProductCard