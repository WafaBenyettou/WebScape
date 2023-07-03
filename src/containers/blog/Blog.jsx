import React from 'react'
import './blog.css'
import Article from '../../components/article/Article'

const Blog = () => {
  return (
    <div className='webscape-blog section-padding' id='blog'>
          <div className='webscape-blog-heading'>
            <h1 className='gradient-text'>Read our blog to get update</h1>
          </div>

          <div className='webscape-blog-container'>
            <div className='webscape-blog-container-groupA'>
              <Article />
            </div>
            <div className='webscape-blog-container-groupB'>
              <Article />
              <Article />
              <Article />
              <Article />
            </div>
          </div>
    </div>
  )
}

export default Blog