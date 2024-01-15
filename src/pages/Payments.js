import { useNavigate } from 'react-router-dom';
import img from '../images/img1.png'
import '../styles/Response.css'

export const Payments = () => {

  const navigate = useNavigate();

  const handleCheckout = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/.netlify/functions/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const session = await response.json();
      // Redirect to Stripe Checkout
      window.location.href = session.url;
    } catch (error) {
      console.error('Error redirecting to checkout:', error);
    }
  };

  return (
    <div className="App">
      <div className='payments'>
        <div className='sale-payments'>
          <i className='fa fa-chevron-left' onClick = {() => (navigate('/'))}></i>
          <p>Sale now live! Get 30% off EdgeAlgo.</p>
        </div>

        <span className='background-image'></span>
        <span className='background-image-1'></span>
        <div className='payments-inner'>

          <div className='payments-left'>

            <div className='payments-left-top'>
              <p className='payments-sub-title'>Elevate your trading today.</p>
              <p className='payments-price'><span>£39.99</span>£27.99</p>
            </div>

            <p className='payments-title'>EdgeAlgo Indicator</p>
            <p className='payments-para'>Experience a revolution in trading with the EdgeAlgo trading indicator. Designed to simplify your trading journey, EdgeAlgo works seamlessly across all time frames. With robust risk management features you can protect your investments while maximizing potential returns. This innovative tool not only enhances your trading strategy but also empowers you to make informed decisions with confidence. With EdgeAlgo, you're not just trading; you're trading smarter. Discover the EdgeAlgo difference today.</p>

            <form action="/.netlify/functions/create-checkout-session" method="POST">
                <button onClick={(event) => handleCheckout(event)} className='checkout'>
                Go to Checkout <i className='fa fa-long-arrow-right'></i>
                </button>
            </form>

            <p className='payments-terms'>Please read our terms & conditions <span onClick={() => (navigate('/terms-and-conditions'))}>here.</span></p>
          </div>

          <div className='payments-right'>
            <img className='payments-image' src={img}></img>
          </div>
        </div>
      </div>

    </div>
  )
}