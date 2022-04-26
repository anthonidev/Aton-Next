import Image from 'next/image'
import React, { FunctionComponent } from 'react'
import { Product } from '../../types/insterfaces/Product'
import { RiShoppingCartFill } from 'react-icons/ri'
import { FaHeart } from 'react-icons/fa'

const ProductCard: FunctionComponent<{ product: Product }> = ({ product: {
  id,
  title,
  price,
  compare_price,
  quantity,
  slug,
  photo
}
}) => {
  return (
    <div className='bg-white  rounded-sm pb-3'>
      <div className='flex justify-between items-center' >
        <div className='bg-ver p-2 text-xs' >
          <span className='text-white'>Disponible</span>
        </div>
        <FaHeart className='h-4 w-4 mr-3  text-let' />

      </div>
      <div className='m-4'>
        <Image
          src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${photo}`}
          layout="responsive"
          height="200"
          width="200"
          alt={slug}
        />
      </div>
      <div className='flex'>
        <div className='font-bold ml-4 w-4/5 '>
          <h1 className='text-pri '>{title}</h1>
          <div className='flex space-x-2 mt-2'>
            <p className='text-let'>S/{compare_price}</p>
            <p className='text-rou'>S/{price}</p>

          </div>


        </div>

        <div className=' flex justify-center items-end mb-2   w-1/5 '>
          <button className='bg-rou p-2 rounded-md'>
            <RiShoppingCartFill className='h-6 w-6  text-white' />
          </button>

        </div>

      </div>

    </div>
  )
}

export default ProductCard