import { useNavigate } from "react-router-dom";
import '../styles/Other.css'

export const Cancel = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="cancel">
        <div className="cancel-inner">
          <p>Oops... You have cancelled your transaction, please return to the home page.</p>
          <button className="return-home" onClick={() => (navigate('/'))}>Home</button>
          </div>
      </div>
    </div>
  )
}