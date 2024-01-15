import { useNavigate } from "react-router-dom";

export const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="success">
        <div className="success-inner">
          <p>Congratulations, your purchase was successful, you should recieve the indicator via email within the next 48 hours.</p>
          <button className="return-home" onClick={() => (navigate('/'))}>Home</button>
          </div>
      </div>
    </div>
  )
}