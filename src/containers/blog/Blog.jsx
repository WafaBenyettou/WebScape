import React from 'react'
import './blog.css'
import Article from '../../components/article/Article'

import blog1 from '../../assets/blog1.png'
import blog2 from '../../assets/blog2.png'
import blog3 from '../../assets/blog3.png'
import blog4 from '../../assets/blog4.png'
import blog5 from '../../assets/blog5.png'

const Blog = () => {
  return (
    <div className='webscape-blog section-padding' id='blog'>
          <div className='webscape-blog-heading'>
            <h1 className='gradient-text'>Read our blog to get update</h1>
          </div>

          <div className='webscape-blog-container'>
            <div className='webscape-blog-container-groupA'>
              <Article img={blog5} date="Jan 16, 2002" title="Mastering CSS Grid: A Guide for Web Developers" />
            </div>
            <div className='webscape-blog-container-groupB'>
              <Article img={blog1} date="Sep 09, 2001" title="The Rise of Progressive Web Apps: A Game Changer in Web Development" />
              <Article img={blog2} date="Oct 21, 2018" title="5 Tips for Writing Clean and Maintainable HTML Code" />
              <Article img={blog3} date="Jun 11, 2023" title="JavaScript Framework Showdown: React vs. Vue vs. Angular" />
              <Article img={blog4} date="Mar 15, 2019" title="Responsive Web Design: Creating Websites for All Devices" />
            </div>
          </div>
    </div>
  )
}

export default Blog