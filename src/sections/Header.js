import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import img from '../images/logo.png'

export const Header = (props) => {

  const navigate = useNavigate();

  return (
    <div className='header'>
      <div className='header-left'>
        <img src = {img}/>
      </div>

      <div className='header-right'>
        <a href='/'>Home</a>
        <a href='/about-us'>About Us</a>
        <a href='/terms-and-conditions'>Terms & Conditions</a>
        <button onClick={() => (navigate('/payments'))} className="header-buy">Buy Now</button>
        <button className='menu-cover-button' onClick={() => props.setCover(prev => !prev)}><i className='fa fa-chevron-down'></i></button>
      </div>
    </div> 
  )
}