import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row   bg-white ' >
          
          <div className="w-full md:w-1/2 relative hidden md:block">
            <Image
              src={`/assets/images/controlPortada.jpg`}
              layout="fill"
            />
          </div>
          <div className="w-full    md:hidden">
            <Image
              src={`/assets/images/controlPortada.jpg`}
              layout="responsive"
              width="100"
              height="100"
            />
          </div>
          <div className="w-full md:w-1/2 md:py-36 py-4  ">
            <div className='w-4/6 m-auto'>
              <h1 className='text-4xl text-pri font-bold my-3  '>Slogan No tan largo y preciso
                largo y  largo y </h1>
              <p className='text-let '>mollitia in nemo quidem errormollitia in nemo quidem e maxime asperiores quos molestias explicabo provident repudiandae! Ad suscipit repudiandae autem eligendi.</p>
            </div>

          </div>
        </div>

  )
}

export default Banner