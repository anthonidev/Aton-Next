import type { NextPage } from 'next'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import Banner from '../components/home/Banner';
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
        <Banner />
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
