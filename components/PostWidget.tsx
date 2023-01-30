import React, { useState, useEffect} from 'react'
import moment from 'moment';
import Link from 'next/link';

import { getRecentPosts, getSimilarPosts } from '$services';

interface Props {
  categories: string;
  slug: string;
}

interface Post {
  
    author: {
      name: string
      id: string
      bio?: string
      photo?: {
        url: string
      }
    }
    title: string
    excerpt: string
    createdAt: string
    slug: string
    featuredImage: {
      url: string
    }
    categories: {
      name: string
      slug: string
    }
    content: any
  
}


const PostWidget = ({ categories, slug}: Props) => {
  const [relatedPosts, setrelatedPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts (categories, slug)
        .then((result: any) => setrelatedPosts(result));
    } else {
      getRecentPosts ()
        .then((result) => setrelatedPosts(result));
    }
  }, [slug])
  
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug? "Related posts": "Recent posts"}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className='flex items-center w-full mb-4'>
          <div className='w-16 flex-none'>
            <img 
            src={post.featuredImage.url} 
            alt={post.title}
            height="60px"
            width="60px"
            className='align-middle rounded-full'
            />
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-gray-500 text-xs'>
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title}>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget