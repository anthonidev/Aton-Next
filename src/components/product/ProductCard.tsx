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
import Stock from './Stock'
import { cart_sidebar_on } from '../../redux/slice/cartSlice'

const ProductCard: FunctionComponent<{ product: Product }> = ({ product }) => {
  const dispatch: AppDispatch = useDispatch()

  const items = useSelector((state: RootState) => state.cart.items)
  const total_items = useSelector((state: RootState) => state.cart.total_items)
  const amount = useSelector((state: RootState) => state.cart.amount)

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
    dispatch(add_item(product));
    dispatch(cart_sidebar_on());

    setLoading(false)
  }
  return (
    <div>
    
      <div className='bg-white  rounded-sm  hover:border-black border shadow-sm'>
        <div className='flex justify-between items-center ' >
          <Stock quantity={product.quantity} />
          <HeartIcon className='h-4 w-4 mr-3  text-let' />

        </div>
        <Link href={{
          pathname: '/product/[slug]',
          query: { slug: product.slug },
        }}>
          <a >
            <Image
              className="aspect-video object-cover"
              src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${product.photo}`}
              layout="responsive"
              height="200"
              width="200"
              alt={product.slug}
            />
          </a>
        </Link>

        <div className='font-bold  w-full '>
          <div className='bg-gray-100 px-3'>
            <Link href={{
              pathname: '/product/[slug]',
              query: { slug: product.slug },
            }}>
              <a className='text-gray-800  '>{product.title.substr(0, 40)}...</a>
            </Link>
          </div>

          <div className='px-3 bg-white mt-3 flex justify-between items-center mb-2'>
            <div>
              <p className='text-let line-through font-semibold text-sm'>{formatterSoles.format(product?.compare_price)}</p>
              <p className='text-black'>{formatterSoles.format(product?.price)}</p>
            </div>

            <div className=' flex justify-center items-end   '>
              {loading ? <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-indigo-400 dark:text-coolGray-900 hover:bg-indigo-600">Añadir al carrito</button> :
                <button onClick={addToCart} className='bg-white text-gray-900 hover:text-white  rounded-md hover:bg-gray-700 flex border px-2 py-1'>
                  <ShoppingCartIcon className='h-6 w-6  ' />
                  <span>Comprar</span>
                </button>
              }
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductCard