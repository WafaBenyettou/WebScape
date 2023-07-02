import React from 'react';

// imported components
import Brand from './components/brand/Brand.jsx';
import CTA from './components/cta/CTA.jsx';
import Navbar from './components/navbar/Navbar.jsx';

//imported containers
import Blog from './containers/blog/Blog.jsx';
import Footer from './containers/footer/Footer.jsx';
import Feature from './containers/feature/Feature.jsx';
import Header from './containers/header/Header.jsx';
import Possibility from './containers/possibility/Possibility.jsx';
import Webscape from './containers/webScape/Webscape.jsx';




function App() {
  return (
    <div className='App'>
     <div className='gradient-bg'>
      <Navbar />
      <Header />
      </div>
      <Brand />
      <Webscape />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
