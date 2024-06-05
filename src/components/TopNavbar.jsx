import React from 'react';
import "./TopNavbar.css"
import image from "../assets/Component.png"
import filter from "../assets/filter.png"



function TopNavBar() {
  return (
    <div className="top-nav-bar">
        <div className='header'>
        <div className="logo">
            <div className='div-logo'> <h1> LOGO</h1></div>    
            </div>
     <div className='placeholder'>
        <div className='inp-div'>
            <img src={image} height={20} alt="" /> 
        <input className='inp' type="search" placeholder="Search here..." />
        </div>
        <div className='filters'>
            <div className='filters-div'><img src={filter} height={20} alt=""  /> <div> Filters</div> </div>
           
        </div>
      </div> 
      <div className='btn'>
        <div className='btn-div'>
            Become a seller
        </div>
       
      </div>
        </div>
     
    </div>
  );
}

export default TopNavBar;
