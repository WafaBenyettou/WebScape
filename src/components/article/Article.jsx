import React from 'react';
import './article.css';

const Article = ({img}) => {
  return (
    <div className='webscape-blog-container-article'> 
    <div className='webscape-blog-container-article-image'>
      <img src={img} alt='article' />
    </div>
    </div>
  )
}

export default Article