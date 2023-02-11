import React, { useState, useEffect } from 'react';
import { getCategories } from '$services';
import Link from 'next/link';


interface Category {
  name: string;
  slug: string;
}

const Header = () => {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, [])  

  return (
    <div className="container mx-auto px-4 md:px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-3xl text-white">ZED.CODES</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
            <Link href='/'>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer pr-1">HOME
              </span>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
