import './styles/App.css';
import './styles/Main.css'
import './styles/Response.css'
import './styles/Other.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main';
import { Payments } from './pages/Payments';
import { Success } from './pages/Success';
import { Cancel } from './pages/Cancel';
import { AboutUs } from './pages/AboutUs';
import { TermsConditions } from './pages/TermsConditions';
import { useState } from 'react';


function App() {

  const [cover, setCover] = useState(false)

  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<Main setCover = {setCover} cover = {cover}/>}/>
        <Route path = '/payments' element = {<Payments/>}/>
        <Route path = '/success' element = {<Success/>}/>
        <Route path = '/cancel' element = {<Cancel/>}/>
        <Route path = '/about-us' element = {<AboutUs setCover = {setCover} cover = {cover}/>}/>
        <Route path = '/terms-and-conditions' element = {<TermsConditions setCover = {setCover} cover = {cover}/>}/>
      </Routes>
    </Router>
  );
}

export default App;

