import type { NextPage } from 'next'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import Layout from '../components/layout/Layout'
import ProductCard from '../components/product/ProductCard';
import { productsHome } from '../hooks/product';


const Home: NextPage = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(productsHome())
  }, [dispatch])

  const products = useSelector((state: RootState) => state.product.products);

  return (
    <Layout title='Home' content='home content' >
      <div>
        <div className='flex flex-col md:flex-row   bg-white ' >
          
          <div className="w-full md:w-1/2 relative hidden md:block">
            <Image
              src={`/assets/images/imageP.jpg`}
              layout="fill"
            />
          </div>
          <div className="w-full    md:hidden">
            <Image
              src={`/assets/images/imageP.jpg`}
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
        <div className="max-w-7xl container mx-auto px-6 mt-9   ">


          <div className='grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>

            {
              products?.map(product => (
                <ProductCard product={product} />
              ))
            }
          </div>

        </div>
      </div>

    </Layout>
  )
}

export default Home
