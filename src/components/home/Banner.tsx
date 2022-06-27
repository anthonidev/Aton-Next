import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row   bg-white mt-10' >

      <div className="w-full md:w-1/2 relative hidden md:block">
        <Image
          src={`/assets/images/Portada.webp`}
          layout="fill"
          alt={`logo`}
          className="object-cover"
        />
      </div>
      <div className="w-full    md:hidden">
        <Image
          src={`/assets/images/loginPortada.webp`}
          layout="responsive"
          width="100"
          height="100"
          alt={`logo`}
        />
      </div>
      <div className="w-full md:w-1/2 md:py-36 py-4  ">
        <div className='w-4/6 m-auto'>
          <h2 className='text-4xl text-red-600 font-bold my-3  '>Aton  Store </h2>
          <h3 className='text-gray-700 '>
            En Aton Perú buscamos conectar y mejorar la calidad de vida de las personas con la tecnología que ofrecen todos nuestros productos.
          </h3>
        </div>

      </div>
    </div>

  )
}

export default Banner