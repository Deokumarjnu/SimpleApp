import React from 'react';
import Posts from '../../components/posts';
import './home.css';
import Sidebar from '../../components/sidebar';

const Home = () => {
  return (<div className="container">
    <figure className="banner-wrapper">
      <img src = "https://truecaller.blog/wp-content/uploads/2017/03/cropped-blog-header.png" alt="Blog page trucaller banner" className = "banner_img"/>
    </figure>
    <div className="wrapper">
      <Posts />
      <Sidebar />
    </div>
  </div>)
}

export default Home;