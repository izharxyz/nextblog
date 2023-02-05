import React from 'react';
import { getPosts, getPostDetails } from '$services';
import { GetStaticPaths } from 'next';

import { PostWidget, PostDetail, Author, Comments, CommentForm } from '$components';


export async function getStaticProps({ params }: any) {
    const data = (await getPostDetails(params.slug)) || [];
    return {
      props: { post: data }
    }
}

interface Post {
    post: {
      author: {
        name: string
        id: string
        bio?: string | undefined
        photo?: {
          url: string
        } | undefined
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
      }[]
      content: any
    }  
}


const postDetail = ({ post }: any) => {
  return (
    <div className='container mx-auto px-3 md:px-10 mb-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <div className='col-span-1 lg:col-span-8'>
                <PostDetail post={post} />
                <Author author={post.author} />
                <CommentForm slug={post.slug} />
                <Comments slug={post.slug} />
            </div>
            <div className='col-span-1 lg:col-span-4'>
                <PostWidget slug={post.slug} categories={post.categories.map((category: any) => category.slug)}/>
            </div>
        </div>
    </div>
  )
}

export default postDetail

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}
