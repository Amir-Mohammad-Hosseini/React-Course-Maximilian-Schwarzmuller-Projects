import React from 'react'

const BlogPostPage = async ({params}) => {
    const {slug} = await params
  return (
    <main>
      <h1>Blog Post</h1>
      <p>{slug}</p>
    </main>
  )
}

export default BlogPostPage
