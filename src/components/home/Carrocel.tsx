import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import Link from 'next/link';

export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel width={'100%'} autoPlay  infiniteLoop dynamicHeight showThumbs={false} >
                   <div className='relative'  >
                    <div className='hidden md:block'>
                        <Image
                            src={`/assets/images/team_banner.webp`}
                            layout="responsive"
                            alt={`logo`}
                            className="object-cover"
                            width="100"
                            height="30"
                        />
                        <div className='absolute  top-0 bottom-0 left-0  bg-gradient-to-b from-red-500 via-orange-500 to-red-500 '>
                            <div className='flex flex-col items-center justify-center h-full p-3'>
                                <div className='text-center max-w-sm'>
                                    <p className='text-xs'>
                                        <span className='text-orange-800 font-bold tracking-wider'>
                                            Del 20 al 26 de junio
                                        </span>
                                    </p>
                                    <h1 className='text-3xl font-bold'>
                                        <Link href='/store'>
                                            <a className='text-white uppercase '>
                                                <span className=''>Semana de Ofertones en Aton Store
                                                </span>
                                            </a>
                                        </Link>
                                    </h1>
                                  
                                    {/* button for the store */}
                                    <div className='mt-4'>
                                        <Link href='/'>
                                            <a className='bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-4 rounded'>
                                                <span className='text-white text-xl uppercase'>
                                                    Ir a la tienda
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>

                    <div className='md:hidden block '>
                        <Image
                            src={`/assets/images/team_banner.webp`}
                            layout="responsive"
                            alt={`logo`}
                            className="object-cover"
                            width="100"
                            height="60"
                        />
                        <div className='absolute  top-0 bottom-0 left-0  bg-gradient-to-b from-red-500 via-orange-500 to-red-500 w-1/2'>
                            <div className='flex flex-col items-center justify-center h-full p-3'>
                                <div className='text-center '>
                                    <p className='text-xs'>
                                        <span className='text-orange-100 font-bold tracking-wider'>
                                            Del 20 al 26 de junio
                                        </span>
                                    </p>
                                    <h1 className=' font-bold leading-loose  '>
                                        <Link href='/store'>
                                            <a className='text-white  uppercase'>
                                                <span className=''>Semana de Ofertones en Aton Store
                                                </span>
                                            </a>
                                        </Link>
                                    </h1>
                                 
                                    {/* button for the store */}
                                    <div className='mt-4 '>
                                        <Link href='/'>
                                            <a className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded'>
                                                <span className='text-white  uppercase'>
                                                    Ir a la tienda
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>


                </div>

                 <div className='relative'  >
                    <div className='hidden md:block'>
                        <Image
                            src={`/assets/images/loginPortada.webp`}
                            layout="responsive"
                            alt={`logo`}
                            className="object-cover"
                            width="100"
                            height="30"
                        />
                        <div className='absolute  top-0 bottom-0 left-0  bg-gradient-to-b from-blue-400 via-violet-400 to-sky-400'>
                            <div className='flex flex-col items-center justify-center h-full p-3'>
                                <div className='text-center max-w-sm'>
                                    <h1 className='text-3xl font-bold'>
                                        <Link href='/store'>
                                            <a className='text-gray-800'>
                                                <span className=''> LAS MEJORES PROMOCIONES DEL MES
                                                </span>
                                            </a>
                                        </Link>
                                    </h1>
                                    <p className='text-xl'>
                                        <span className='text-gray-600'>
                                            Apúrate, son por tiempo limitado
                                        </span>
                                    </p>
                                    {/* button for the store */}
                                    <div className='mt-4'>
                                        <Link href='/'>
                                            <a className='bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-4 rounded'>
                                                <span className='text-white text-xl uppercase'>
                                                    Ir a la tienda
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>

                    <div className='md:hidden block '>
                        <Image
                            src={`/assets/images/loginPortada.webp`}
                            layout="responsive"
                            alt={`logo`}
                            className="object-cover"
                            width="100"
                            height="60"
                        />
                        <div className='absolute  top-0 bottom-0 left-0  bg-gradient-to-b from-blue-400 via-violet-400 to-sky-400 w-1/2'>
                            <div className='flex flex-col items-center justify-center h-full p-3'>
                                <div className='text-center '>
                                    <h1 className='text-xl font-bold'>
                                        <Link href='/store'>
                                            <a className='text-gray-800'>
                                                <span className=''> LAS MEJORES PROMOCIONES DEL MES
                                                </span>
                                            </a>
                                        </Link>
                                    </h1>
                                    <p className='text-sm'>
                                        <span className='text-gray-600'>
                                            Apúrate, son por tiempo limitado
                                        </span>
                                    </p>
                                    {/* button for the store */}
                                    <div className='mt-4 '>
                                        <Link href='/'>
                                            <a className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded'>
                                                <span className='text-white  uppercase'>
                                                    Ir a la tienda
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>


                </div>
                <div className='relative'  >
                    <div className='hidden md:block'>
                        <Image
                            src={`/assets/images/red_banner.webp`}
                            layout="responsive"
                            alt={`logo`}
                            className="object-cover"
                            width="100"
                            height="30"
                        />
                        <div className='absolute  top-0 bottom-0 left-0 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 '>
                            <div className='flex flex-col items-center justify-center h-full p-3'>
                                <div className='text-center max-w-sm'>
                                    <h1 className='text-3xl font-bold'>
                                        <Link href='/store'>
                                            <a className='text-white hover:text-red-50'>
                                                <span className=''> LAS MEJORES PROMOCIONES DEL MES
                                                </span>
                                            </a>
                                        </Link>
                                    </h1>
                                    <p className='text'>
                                        <span className='text-red-100'>
                                            Apúrate, son por tiempo limitado
                                        </span>
                                    </p>
                                    {/* button for the store */}
                                    <div className='mt-4'>
                                        <Link href='/'>
                                            <a className='bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-4 rounded'>
                                                <span className='text-white text-xl uppercase'>
                                                    Ir a la tienda
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>

                    <div className='md:hidden block '>
                        <Image
                            src={`/assets/images/red_banner.webp`}
                            layout="responsive"
                            alt={`logo`}
                            className="object-cover"
                            width="100"
                            height="60"
                        />
                        <div className='absolute  top-0 bottom-0 left-0 bg-gradient-to-b from-red-500 via-orange-500 to-red-500 w-1/2'>
                            <div className='flex flex-col items-center justify-center h-full p-3'>
                                <div className='text-center '>
                                    <h1 className='text-xl font-bold'>
                                        <Link href='/store'>
                                            <a className='text-white'>
                                                <span className=''> LAS MEJORES PROMOCIONES DEL MES
                                                </span>
                                            </a>
                                        </Link>
                                    </h1>
                                    <p className='text-sm'>
                                        <span className='text-red-100'>
                                            Apúrate, son por tiempo limitado
                                        </span>
                                    </p>
                                    {/* button for the store */}
                                    <div className='mt-4 '>
                                        <Link href='/'>
                                            <a className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded'>
                                                <span className='text-white  uppercase'>
                                                    Ir a la tienda
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>


                </div>

               
             



            </Carousel>
        );
    }
};



