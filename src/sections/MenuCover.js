import img from '../images/logo.png'
import '../styles/Other.css'

export const MenuCover = (props) => {
  return (
    <>
      {props.cover && <div className="menu-cover">
        <div className="menu-cover-inner">
          <button className='menu-hide-button' onClick={() => props.setCover(prev => !prev)}><i className='fa fa-chevron-up'></i></button>
          <img src={img} alt='Logo'/>
          <a href='/'>Home</a>
          <span className='menu-separater'></span>
          <a href='/about-us'>About Us</a>
          <span className='menu-separater'></span>
          <a href='/terms-and-conditions'>Terms & Conditions</a>
          <span className='menu-separater'></span>
        </div>
      </div>}
    </>
  )
}