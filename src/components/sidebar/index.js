import React from 'react';
import Categories from '../categories';
import Tags from '../tags';
import './sidebar.css';
const Sidebar = () => {
  return <div className= "sidebar">
    <Categories /> 
    <Tags />
  </div>
}

export default Sidebar;