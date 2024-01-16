import img from '../images/logo.png'
import { useNavigate } from 'react-router-dom'

export const Footer = (props) => {

  const navigate = useNavigate();

  return (
    <div className="footer" id='footer'>
      
      <div className="footer-top">
        <p>Trade the better way</p>
      </div>

      <div className="footer-middle">
        <div className="footer-middle-left">
          <div className="sections">
            <p>COMPANY</p>
            <a href = '/Payments'>Pricing</a>
            <a href = '/about-us'>About Us</a>
            <a href = '/terms-and-conditions'>Terms & Conditions</a>
            <a href='#footer' onClick={() => props.setEmail(true)}>Contact</a>
          </div>
          <div className="sections">
            <p>SECTIONS</p>
            <a href = '#home'>Home</a>
            <a href = '#attributes'>Attributes</a>
            <a href = '#reviews'>Reviews</a>
          </div>
        </div>

        <div className="footer-middle-right">
          <div className="footer-logo">
            <img src = {img} alt='Logo'/>
          </div>
          <div className="socials">
            <i className="fa fa-instagram"></i>
            <i className="fa fa-facebook"></i>
            <i className="fa fa-twitter"></i>
          </div>
          <button onClick = {() => (navigate('/payments'))}>Buy Now</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="disclaimer">DISCLAIMER: The EdgeAlgo team are not registered financial advisors and hold no formal qualifications 
          to give financial advice. Everything that is provided on the EdgeAlgo website or by EdgeAlgo is purely for educational purposes only. EdgeAlgo are not accountable or liable for
            any losses or damages. You are responsible for all the risks you take. Any content provided here should not be construed
             as financial advice. <span className='read-more-disclaimer' onClick={() => (navigate('/terms-and-conditions'))}>Read more...</span></p>
        <p className="end-line">Designed & Developed by EdgeAlgo All rights reserved</p>
      </div>
    </div>
  )
}