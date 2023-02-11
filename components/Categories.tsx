import React, { useState, useEffect} from 'react';
import Link from 'next/link';
import { getCategories } from '$services';
import { Category } from '$interface';

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, [])
  

  return (
    <div className='container text-left'>
      <h3 className='text-xl mb-2 font-semibold pb-4'>
        Categories
      </h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className='cursor-pointer mb-3 block'>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories