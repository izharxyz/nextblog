import React from 'react';
import Link from 'next/link';

import { Categories, Subscribe } from './'

const Footer = () => {
  return (
    <div className="container mx-auto px-3 md:px-10 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-white shadow-lg rounded-lg mb-8 pb-12">
            <div className='col-span-1 p-4 m-4'>
                <h1 className='text-xl mb-2 font-semibold'>
                    ZED.CODES
                </h1>
                <p>
                    Hi, I'm second year student at Ajeenkya DY Patil University pursuing my BTech. 
                    I'm self taught full stack dev as well as coding and security enthusiast. 
                </p>
            </div>
            <div className='col-span-1 p-4 m-4'>
                <Categories/>
            </div>
            <div className='col-span-1 p-4 m-4'>
                <Subscribe/>
            </div>
            <div className='md:col-span-3 mx-8 p-4 bg-gray-200 rounded-lg'>
                <ul className='flex flex-row'>
                    <li className='mr-4'>
                        <Link href='https://github.com/zzedddd' className='cursor-pointer'>
                            <img src="/github.svg" height="40px" width="40px" alt="github" />
                        </Link>
                    </li>
                    <li>
                        <Link href='/' className='cursor-pointer'>
                            <img src="/linkedin.svg" height="40px" width="40px" alt="linkedin" />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer