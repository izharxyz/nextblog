import React from 'react';
import { getPosts, getPostDetails } from '$services';
import { GetStaticPaths } from 'next';

import { Categories, PostWidget, PostDetail, Author, Comments, CommentForm } from '$components';


export async function getStaticProps({ params }) {
    const data = (await getPostDetails(params.slug)) || [];
    return {
      props: { post: data }
    }
}

const postDetail = ({ post }) => {
  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <div className='col-span-1 lg:col-span-8'>
                <PostDetail post={post} />
                <Author author={post.author} />
                <CommentForm slug={post.slug} />
                <Comments slug={post.slug} />
            </div>
            <div className='col-span-1 lg:col-span-4'>
                <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)}/>
                <Categories/>
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
