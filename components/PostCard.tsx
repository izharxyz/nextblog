import React from 'react'

type post = {
    title: string;
    excerpt: string;
}

type custom = {
    post: post
}

const PostCard = ({ post }: custom) => {
  return (
    <div>
        {post.title}
        {post.excerpt}
    </div>
  )
}

export default PostCard