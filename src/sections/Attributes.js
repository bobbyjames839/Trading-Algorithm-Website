import img from '../images/img1.png'
import img1 from '../images/img2.png'
import { useNavigate } from 'react-router-dom'

export const Attributes = () => {

  const navigate = useNavigate();

  return (
    <div className="attributes" id='attributes'>
      <div className="attributes-inner ai-top">
        <div className="attributes-left ai-left-top">
          <p className='attributes-title-top'>The <span>AI solution</span> to all your trading troubles</p>
          <div className='attributes-left-inner'>
            <p>Easy to use software</p>
            <p>Advanced alerts</p>
            <p>Exceptional risk management</p>
          </div>
          <button className='access-btn-top' onClick={() => (navigate('/payments'))}>Gain access now</button>
        </div>
        <div className="attributes-right">
          <img className='img-top' src={img}/>
        </div>
      </div>

      <div className="attributes-inner">
        <div className="attributes-right-bottom">
          <img className='img-bottom' src={img1}/>
        </div>
      
        <div className="attributes-left ai-left-bottom">
          <p className='attributes-title-bottom'><span>Maximize profits</span> with precision trading tools</p>
          <div className='attributes-left-inner'>
            <p>Streamlined analysis for informed decisions</p>
            <p>Real-time market insights</p>
            <p>Tailored strategies for every trader</p>
          </div>
          <button className='access-btn-bottom' onClick={() => (navigate('/payments'))}>Gain access now</button>
        </div>
      </div>
    </div>
  )
}