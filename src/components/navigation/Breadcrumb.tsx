import Link from 'next/link'
import React, { FunctionComponent } from 'react'

export const Breadcrumb: FunctionComponent<{ children: (JSX.Element | null) }> = ({ children }) => {
    return (
        <nav aria-label="breadcrumb" className="overflow-x-auto">
            <ol className="flex justify-start items-center mt-4 space-x-2 px-4 bg-gray-100 rounded-sm  ">
                <li className="flex items-center  ">
                    <Link href="/">
                        <a rel="noopener noreferrer" title="Back to homepage" className="hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 pr-1  hover:text-red-600 ">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                            </svg>
                        </a>
                    </Link>
                </li>
                {children}
            </ol>
        </nav>
    )
}
