import { useNavigate } from "react-router-dom"
import home1 from '../images/home.png'
import home2 from '../images/home1.png'
import home3 from '../images/home2.png'
import home4 from '../images/home3.png'

export const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="home" id="home">
      <img src={home1} alt='trading-icon' className='home-img home-img-1'/>
      <img src={home2} alt='trading-icon' className='home-img home-img-2'/>
      <img src={home3} alt='trading-icon' className='home-img home-img-3'/>
      <img src={home4} alt='trading-icon' className='home-img home-img-4'/>

      <p className="home-header">Discover your <span>edge</span> in trading</p>
      <p className="home-desc">Designing advanced trading tools for enhanced market clarity.</p>
      <button onClick={() => (navigate('/payments'))}>Apply Now</button>
    </div>
  )
}