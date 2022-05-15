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
        <div className="bg-white p-5 flex  space-x-2 ">
            {images && images !== null && images !== undefined &&
                (<div className={`m-3 w-3/12 ${images.length === 0 ? " hidden" : " grid grid-rows-3 gap-3 "}`}>

                    <button onClick={(e) => ChangePhoto(main)} className={`border p-2 rounded-md shadow ${viewPhoto === main ? " border-plo" : ""}`}>
                        <Image
                            alt={title}
                            className=" object-cover object-center rounded"
                            src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${main}`}
                            layout="intrinsic"
                            height="200"
                            width="200"
                        />
                    </button>
                    {images.map((item: any) => (
                        <button
                            key={item.photo}
                            onClick={(e) => ChangePhoto(item.photo)}
                            className={`border p-2 rounded-md shadow  ${viewPhoto === item.photo ? " border-plo" : ""}`}
                        >

                            <Image
                                alt={title}
                                className=" object-cover object-center rounded"
                                src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${item.photo}`}
                                layout="intrinsic"
                                height="200"
                                width="200"
                            />
                        </button>
                    ))
                    }


                </div>)
            }
            <div className="w-11/12 my-auto">
                {viewPhoto && (
                    <Image
                        alt={title}
                        className="object-cover object-center rounded "
                        src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${viewPhoto}`}
                        layout="responsive"
                        height="300"
                        width="300"
                    />
                )}

            </div>



        </div>
    )
}

export default ProductImages