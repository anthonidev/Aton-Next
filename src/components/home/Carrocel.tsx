import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import Link from 'next/link';

export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel width={'100%'} autoPlay infiniteLoop dynamicHeight showThumbs={false} >

                <div  >
                    <Image
                        src={`/assets/images/Portada.jpg`}
                        layout="responsive"
                        alt={`logo`}
                        className="object-cover"
                        width="100"
                        height="30"
                    />
                   <p className="absolute top-1/2 md:right-1/3 md:left-1/3" >
                        <Link href={'/store'}>
                            <a className="md:text-3xl text-lg text-gray-800 bg-white rounded-full px-5 py-2 hover:bg-red-600 hover:text-white" > Ver Catálogo</a>

                        </Link>
                    </p>
                </div>
                <div>
                    <Image
                        src={`/assets/images/Portada2.jpg`}
                        layout="responsive"
                        alt={`logo`}
                        className="object-cover"
                        width="100"
                        height="30"

                    />
                    <p className="absolute top-1/2 md:right-1/3 md:left-1/3" >
                        <Link href={'/store'}>
                            <a className="md:text-3xl text-lg text-gray-800 bg-white rounded-full px-5 py-2 hover:bg-red-600 hover:text-white" > Ver Catálogo</a>

                        </Link>
                    </p>
                </div>
                <div>
                    <Image
                        src={`/assets/images/postada3.jpg`}
                        layout="responsive"
                        alt={`logo`}
                        className="object-cover"
                        width="100"
                        height="30"

                    />
                    <p className="absolute top-1/2 md:right-1/3 md:left-1/3" >
                        <Link href={'/store'}>
                            <a className="md:text-3xl text-lg text-gray-800 bg-white rounded-full px-5 py-2 hover:bg-red-600 hover:text-white" > Ver Catálogo</a>

                        </Link>
                    </p>
                </div>
            </Carousel>
        );
    }
};



// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>