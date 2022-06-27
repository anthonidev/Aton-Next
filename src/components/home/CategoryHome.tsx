import { ChevronRightIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import React, { FunctionComponent } from 'react'
import { Category } from '../../utils/types/interface';

const CategoryHome: FunctionComponent<{
    category: Category

}> = ({
    category
}) => {
        return (
            <section >
                <Link href={`/category/${category.slug}`}>
                    <a>
                        <h2 className='text-gray-900 pl-4 flex justify-start text-lg  bg-gray-100 px-1 py-3 border-y-2 border-gray-200 hover:bg-gray-200 '>
                            {category.title}
                        </h2>
                    </a>
                </Link>
                <div className="  grid  grid-cols-3 sm:grid-cols-3  ">
                    {
                        category.children?.map(child => (
                            <Link key={child.id} href={'/category/subcategory/' + child.slug}>
                                <a className='flex justify-center items-center border hover:bg-slate-100'>
                                    <div className='py-3'>
                                        <div className='flex justify-center'>

                                            <Image
                                                className="aspect-video object-cover "
                                                src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${child.photo}`}
                                                layout="fixed"
                                                width={60}
                                                height={60}
                                                quality={50}
                                                alt={child.title}
                                            />
                                        </div>
                                        <div className='flex justify-center text-center'>


                                            <h3 className="text-gray-700 my-2 text-sm " >
                                                {child.title}
                                            </h3>
                                        </div>
                                    </div>
                                </a>


                            </Link>


                        ))
                    }

                </div>
            </section>
        )
    }

export default CategoryHome