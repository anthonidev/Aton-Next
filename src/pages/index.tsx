import type { NextPage } from 'next'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Banner from '../components/home/Banner';
import Layout from '../components/layout/Layout'
import ProductCard from '../components/product/ProductCard';
import { Product } from '../utils/types/interface';
import { productsHome } from '../redux/api/product';
import DemoCarousel from '../components/home/Carrocel';
import ProductNew from '../components/home/ProductNew';
import CategoryHome from '../components/home/CategoryHome';
import Features from '../components/home/Features';

const Home: NextPage = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(productsHome())
  }, [dispatch])

  const products_featured = useSelector((state: RootState) => state.product.home?.products_featured);
  const products_news = useSelector((state: RootState) => state.product.home?.products_news);
  const products_sold = useSelector((state: RootState) => state.product.home?.products_sold);
  const products_views = useSelector((state: RootState) => state.product.home?.products_views);

  const categories = useSelector((state: RootState) => state.product.categories);

  return (
    <Layout title='Aton Peru | Inicio' content='  En Aton Perú buscamos conectar y mejorar la calidad de vida de las personas con la tecnología que ofrecen todos nuestros productos.' >
      <div>
        <DemoCarousel />
        <div className="  ">
          {/* categorias */}

          <article className='bg-white '>
            <h1 className=' text-center text-3xl font-semibold uppercase tracking-wider mt-4 mb-2 text-gray-700' >Categorias</h1>
            <h2 className='text-center text-xl text-gray-700 mb-4'>Encuentra lo que buscas!</h2>
            <div className='grid md:grid-cols-2 grid-cols-1 '>
              {categories?.map((category, index) => (
                <CategoryHome key={index} category={category} />
              ))}
            </div>


          </article>

          <article className='max-w-7xl container mx-auto px-6 mt-9 '>
            <h1 className='md:text-2xl text-lg sm:text-xl lg:text-3xl font-semibold uppercase text-gray-700 mt-10 mb-5 tracking-widest underline underline-offset-8  ' >Productos Nuevos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
              {products_news?.slice(0, 4)?.map((product: Product) => (
                <ProductNew key={product.id} product={product} />
              ))}
            </div>
            

          </article>

          <article className='max-w-7xl md:mx-auto px-2'>
            <Features />
          </article>

          <article className="my-5 max-w-7xl md:mx-auto px-2">
            <h1 className="uppercase font-bold text-xl my-3 text-gray-900 " >Productos Destacados</h1>
            <div className='snap-x gap-4 p-4 w-full flex overflow-x-auto'>
              {
                products_featured?.map((product: Product) => (
                  <div className="snap-center shrink-0 lg:w-1/5 md:w-4/12 sm:w-3/6 w-5/6  rounded overflow-hidden" key={product.id}>
                    <ProductCard product={product} />

                  </div>
                ))
              }
            </div>
          </article>




          <article className="my-5 max-w-7xl md:mx-auto px-2">
            <h1 className="uppercase font-bold text-xl my-3 text-gray-900" >Productos Nuevos</h1>
            <div className='snap-x gap-4 p-4 w-full flex overflow-x-auto'>

              {
                products_news?.map((product: Product) => (
                  <div className="snap-center shrink-0 lg:w-1/5 md:w-4/12 sm:w-3/6 w-5/6  rounded overflow-hidden" key={product.id}>
                    <ProductCard product={product} />

                  </div>
                ))
              }
            </div>
          </article>
          <article className="my-5 max-w-7xl md:mx-auto px-2">
            <h1 className="uppercase font-bold text-xl my-3 text-gray-900" >Productos Más vendidos</h1>
            <div className='snap-x gap-4 p-4 w-full flex overflow-x-auto'>

              {
                products_sold?.map((product: Product) => (
                  <div className="snap-center shrink-0 lg:w-1/5 md:w-4/12 sm:w-3/6 w-5/6  rounded overflow-hidden" key={product.id}>
                    <ProductCard product={product} />

                  </div>
                ))
              }
            </div>
          </article>
          <article className="my-5 max-w-7xl md:mx-auto px-2 ">
            <h1 className="uppercase font-bold text-xl my-3 text-gray-900" >Productos Más vistos</h1>
            <div className='snap-x gap-4 p-4 w-full flex overflow-x-auto'>

              {
                products_views?.map((product: Product) => (
                  <div className="snap-center shrink-0 lg:w-1/5 md:w-4/12 sm:w-3/6 w-5/6  rounded overflow-hidden" key={product.id}>
                    <ProductCard product={product} />

                  </div>
                ))
              }
            </div>
          </article>

          <article className=" my-5 lg:my-10">
            <div className="container  mx-auto  text-center p y-5">
              <div className="flex flex-wrap  justify-around text-plo">
                <div className=" px-4 shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 192.756 192.756"><path fill="#fff" d="M0 0h192.756v192.756H0z" /><path d="M52.979 135.844c21.796 0 39.467-17.67 39.467-39.466s-17.67-39.466-39.467-39.466-39.467 17.67-39.467 39.466 17.67 39.466 39.467 39.466z" fill="#a70b52" /><path fill="#fff" d="M62.589 110.267h-8.173v-30.89h-3.031v33.938h3.031v-.02h8.173z" /><path d="M82.989 97.642H62.637v-3.031H85.97c.031.586.046 1.173.046 1.767 0 18.247-14.792 33.038-33.038 33.038S19.94 114.625 19.94 96.378 34.732 63.34 52.979 63.34c.481 0 .961.01 1.438.031l-.004 3.008a31.023 31.023 0 0 0-1.434-.033c-16.586 0-30.033 13.446-30.033 30.032 0 16.587 13.446 30.032 30.033 30.032 16.134 0 29.296-12.722 30.002-28.683l.008-.085z" fill="#fff" /><path d="M40.655 88.521a4.642 4.642 0 1 0 0-9.285 4.642 4.642 0 0 0 0 9.285z" fill="#fff" /><path fill="#808183" d="M112.043 115.75h28.201v-8.517h-17.847V76.735h-10.354zM174.317 79.482c-3.233-2.505-7.396-3.775-12.364-3.775-5.899 0-10.828 1.812-14.255 5.236-3.577 3.579-5.471 8.851-5.471 15.246 0 6.832 2.002 12.597 5.637 16.229 2.854 2.853 6.656 4.358 11.007 4.358 9.551 0 11.748-5.725 11.748-5.725V115.748h8.625V93.714h-17.169v6.895H169.977s.076 8.681-8.08 8.681c-2.072 0-3.918-.752-5.338-2.172-2.213-2.211-3.383-5.937-3.383-10.767 0-8 3.18-12.776 8.504-12.776 3.326 0 5.826 2.042 6.467 5.137h10.984c-.569-4.497-1.803-6.841-4.814-9.23z" /></svg>

                </div>
                <div className=" px-4 shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 192.744 192.744"><g fillRule="evenodd" clipRule="evenodd"><path fill="#fff" d="M0 0h192.744v192.744H0V0z" /><path d="M187.035 106.442a2.852 2.852 0 1 0 0 5.703 2.847 2.847 0 0 0 2.844-2.858 2.844 2.844 0 0 0-2.844-2.845zm0 5.36a2.505 2.505 0 0 1-2.508-2.515 2.502 2.502 0 0 1 2.508-2.501 2.5 2.5 0 0 1 2.5 2.501 2.503 2.503 0 0 1-2.5 2.515z" /><path d="M188.498 108.54c0-.269-.119-.552-.357-.687-.24-.142-.508-.156-.777-.156h-1.389v3.187h.389v-1.47h.717l.91 1.47h.463l-.963-1.47c.568-.016 1.007-.247 1.007-.874zm-1.537.567h-.598v-1.127h.91c.396 0 .83.06.83.553.001.649-.695.574-1.142.574zM170.32 93.132l5.83-6.225c.338-.457.506-.777.506-1.051 0-.457-.393-.64-1.629-.64h-1.471v-3.93h15.922v3.93h-2.092c-2.416 0-2.865.365-6.236 4.615l-9.223 9.96v6.078c0 1.555.785 2.102 3.033 2.102h3.482v3.792h-22.301v-3.792h3.482c2.246 0 3.033-.547 3.033-2.102v-6.078l-10.863-12.017c-1.795-2.101-1.547-2.558-6.545-2.558v-3.93h20.168v3.93h-1.436c-1.461 0-2.08.274-2.08.822 0 .458.449.823.73 1.188l5.496 5.99c.653.679 1.45.767 2.194-.084zM35.003 81.285h4.865v10.966h-4.493c-.398-2.192-1.77-3.045-3.021-4.195-2.257-2.074-7.145-3.801-11.256-3.801-5.306 0-9.784 1.646-9.784 4.066 0 6.718 30.345 1.372 30.345 14.074 0 6.625-6.5 10.326-18.173 10.326-4.041 0-10.156-1.254-13.764-3.17-1.131-.653-1.611.618-1.823 2.211H2.911V100.43h4.512c.995 2.879 2.366 3.472 3.627 4.615 2.188 2.011 7.396 3.474 12.172 3.427 7.201-.071 9.677-1.645 9.677-3.93 0-2.284-2.449-2.833-10.34-4.066l-6.7-1.097c-7.561-1.143-13.066-2.833-13.066-8.864 0-6.26 6.964-10.19 17.975-10.19 4.64 0 8.522.62 12.248 2.726 1.032.671 2 .751 1.987-1.766zM129.947 99.645l.096-12.188c0-1.599-.832-2.147-3.209-2.147h-2.793v-3.792h17.77v3.792h-2.316c-2.379 0-3.211.549-3.211 2.147v24.537l-6.955-.055-22.524-21.329v15.49c0 1.554.832 2.147 3.209 2.147h3.092v3.747H94.651v-3.747h3.058c2.377 0 3.209-.594 3.209-2.147V87.457c0-1.599-.832-2.147-3.209-2.147h-3.058v-3.792h15.956l19.34 18.127zM70.424 80.095c-14.162 0-23.027 6.261-23.027 16.312 0 9.871 8.742 16.084 22.595 16.084 14.714 0 23.273-6.122 23.273-16.586.001-9.412-9.235-15.81-22.841-15.81zm-.322 28.422c-7.839 0-12.345-4.524-12.345-12.338 0-7.63 4.702-12.154 12.737-12.154 7.708 0 12.214 4.616 12.214 12.475 0 7.676-4.572 12.017-12.606 12.017z" /></g></svg>

                </div>
                <div className=" px-4 shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 200.777 66.659"><path d="M200.653 15.87C197.923.194 150.822-4.698 95.446 4.943 72.19 8.994 51.191 14.969 34.838 21.691c2.512.055 4.375.631 5.507 1.76.885.886 1.332 2.102 1.332 3.617v1.555h-5.43V27.25c0-1.144-.686-1.853-1.901-1.853-1.021 0-1.65.461-1.853 1.369a2.63 2.63 0 0 0 .022 1.084c.581 2.375 8.644 3.85 9.521 8.233.115.564.271 1.771.025 3.498-.503 3.535-3.609 4.899-7.563 4.899-5.519 0-7.761-2.614-7.761-6.218l.004-1.705h5.821l.003 2.124c0 1.194.868 1.853 2.05 1.853 1.12 0 1.774-.451 2-1.373.105-.424.151-1.049-.04-1.527-1.077-2.702-8.606-3.964-9.533-8.333-.207-.982-.224-1.818-.052-2.875a5.606 5.606 0 0 1 .482-1.511C9.333 33.398-1.278 42.732.124 50.791c2.733 15.678 49.833 20.565 105.208 10.924 24.342-4.237 46.226-10.58 62.881-17.688-.241.012-.475.038-.725.038-3.79 0-7.174-1.42-7.525-5.294-.062-.705-.073-1-.075-1.402l.002-8.906c0-.384.045-1.058.088-1.406.449-3.744 3.409-5.288 7.512-5.288 3.175 0 7.068.911 7.496 5.291.057.55.051 1.137.05 1.33v.841h-5.484v-1.255c0-.027-.008-.496-.068-.789-.09-.447-.471-1.483-2.033-1.483-1.543 0-1.943 1.038-2.043 1.484-.057.245-.084.597-.084.987v9.679c-.005.336.012.599.046.792.027.152.304 1.486 2.1 1.486 1.783 0 2.059-1.334 2.084-1.486.047-.262.053-.574.051-.792v-2.999h-2.158v-3.23h7.631v5.746c-.002.391-.008.68-.074 1.4-.092 1.016-.412 1.876-.914 2.611 17.663-8.387 27.947-17.57 26.563-25.512zM57.065 43.653l-2.778-18.876h-.1l-2.849 18.876h-5.855l3.938-21.317h9.553l3.914 21.317h-5.823zm28.162 0l-.129-18.511h-.094l-3.445 18.511h-5.495l-3.428-18.511h-.098l-.125 18.511h-5.445l.472-21.317h8.758l2.55 15.835h.125l2.557-15.835h8.754l.47 21.317h-5.427zm25.641-4.131c-.586 4.129-4.631 4.851-7.49 4.851-4.747 0-7.683-2.029-7.683-6.158l.003-1.684h5.751l.004 2.098c0 1.139.803 1.836 2.043 1.836 1.106 0 1.754-.444 1.979-1.356.104-.425.147-1.045-.037-1.513-1.06-2.651-8.53-3.95-9.438-8.251-.208-.975-.223-1.803-.052-2.849.632-3.899 4.374-4.709 7.386-4.709 2.694 0 4.655.588 5.831 1.764.877.878 1.321 2.083 1.321 3.582v1.538h-5.378v-1.357c0-1.162-.721-1.834-1.88-1.834-1.028 0-1.65.457-1.854 1.356a2.59 2.59 0 0 0 .026 1.072c.576 2.364 8.568 3.809 9.443 8.151.113.554.268 1.743.025 3.463zm19.918-1.937c.008.4-.031 1.199-.053 1.404-.328 3.512-2.84 5.297-7.447 5.297-4.625 0-7.139-1.785-7.465-5.297a16.957 16.957 0 0 1-.053-1.4V22.331h5.502V38.07c-.006.352.012.612.047.793.068.35.416 1.486 1.969 1.486 1.548 0 1.896-1.137 1.969-1.482.031-.186.05-.459.05-.798V22.331h5.481v15.254zm23.705 5.851h-7.656l-5.139-16.885h-.086l.285 16.885h-5.336v-21.1h7.977l4.75 16.22h.111l-.281-16.22h5.375v21.1z" fill="#2d4f9e" /></svg>

                </div>
                <div className=" px-4 shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 399.809 73.31"><path d="M40.602 27.084c0 9.129-4.415 15.312-15.596 15.312h-3.533V13.322c1.256-.071 2.429-.071 3.533-.071 10.587-.001 15.596 5.003 15.596 13.833M29.125 55.055c20.006 0 32.655-10.307 32.655-28.262C61.779 7.064 48.247 0 26.183 0 17.65 0 7.353.587 0 1.47v70.37h21.474V55.055h7.651zm287.718-27.971c0 9.129-4.409 15.312-15.593 15.312h-3.521V13.322c1.245-.071 2.42-.071 3.521-.071 10.588-.001 15.593 5.003 15.593 13.833m-11.464 27.971c19.99 0 32.646-10.307 32.646-28.262C338.025 7.064 324.495 0 302.429 0c-8.531 0-18.834.587-26.188 1.47v70.37h21.485V55.055h7.653zm60.59-35.626c0-3.826 3.829-5.595 10.001-5.595 6.769 0 14.129 1.473 19.126 3.542l-1.763-15.315C387.74.883 382.739 0 373.622 0c-17.359 0-29.123 6.848-29.123 21.201 0 24.725 33.543 19.724 33.543 31.206 0 4.412-3.241 6.766-11.188 6.766-7.05 0-17.943-2.354-24.414-5.591l2.36 16.198c6.466 2.355 15.292 3.529 22.355 3.529 17.94 0 32.653-5.89 32.653-23.558 0-23.545-33.839-19.133-33.839-30.322M260.067 1.47h-21.474v70.37h21.474V1.47zm-87.083 0h-21.476v70.37h21.476V1.47zm37.362 56.233V1.47H188.87v70.37h38.837l3.233-14.137h-20.594zM135.623 1.47h-21.476v27.97H91.788V1.47h-21.48v70.37h21.479V44.161h22.359V71.84h21.476l.001-70.37z" fill="#1978be" /></svg>

                </div>
              </div>
            </div>
          </article>
          <Banner />


        </div>
      </div>

    </Layout >
  )
}

export default Home
