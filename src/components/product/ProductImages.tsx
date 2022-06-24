import Image from 'next/image'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { Image as Img } from '../../utils/types/interface';
const ProductImages: FunctionComponent<{
    main: string,
    title: string,
    images: Img[] | null,
}> = ({ main, title, images }) => {
    let [viewPhoto, setViewPhoto] = useState("")
    useEffect(() => {
        setViewPhoto(main)

    }, [main]);
    const ChangePhoto = (photo: any) => {
        setViewPhoto(photo)
    }

    return (
        <div className="bg-white p-5 flex-col flex justify-center items-center  my-auto min-h-full">
            <div className='w-5/6 md:w-4/6 lg:w-3/5 flex flex-col justify-center mx-auto'>
                {viewPhoto && (
                    <Image
                        alt={title}
                        className="object-cover  rounded  "
                        src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${viewPhoto}`}
                        layout="responsive"
                        height="100"
                        width="82"
                    />
                )}
                
            </div>


            {images && images !== null && images !== undefined &&
                (<div className={`m-3  ${images.length === 0 ? " hidden" : " grid grid-cols-3 gap-2 sm:grid-cols-4  lg:grid-cols-5  "}`}>

                    <button onClick={(e) => ChangePhoto(main)} className={`border p-2 rounded-md shadow ${viewPhoto === main ? " border-plo" : ""}`}>
                        <Image
                            alt={title}
                            className=" object-cover  rounded"
                            src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${main}`}
                            layout="intrinsic"

                            height="120"
                            width="100"
                        />
                    </button>
                    {images.map((item: any) => (
                        <button
                            key={item.photo}
                            onClick={(e) => ChangePhoto(item.photo)}
                            className={`border p-2 rounded-md shadow ${viewPhoto === item.photo ? " border-plo" : ""}`}
                        >

                            <Image
                                alt={title}
                                className=" object-cover rounded"
                                src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${item.photo}`}
                                layout="intrinsic"
                                height="120"
                                width="100"
                            />
                        </button>
                    ))
                    }


                </div>)
            }




        </div>
    )
}

export default ProductImages