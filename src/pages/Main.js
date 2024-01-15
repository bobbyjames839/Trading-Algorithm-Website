import { useState } from 'react';
import { Attributes } from '../sections/Attributes';
import { Email } from '../sections/Email';
import { Footer } from '../sections/Footer';
import { Header } from '../sections/Header';
import { Home } from '../sections/Home';
import { MenuCover } from '../sections/MenuCover';
import { Reviews } from '../sections/Reviews';


export const Main = (props) => {

  const [email, setEmail] = useState(false)

  return (
    <div className="App">
      <div className='sale'>
        <p>Sale now live! Get 30% off EdgeAlgo.</p>
      </div>
      <MenuCover cover = {props.cover} setCover = {props.setCover}/>
      <Header setCover = {props.setCover}/>
      <Home/>
      <Attributes/>
      <Reviews/>
      <Footer setEmail = {setEmail}/>
      <Email setEmail = {setEmail} email = {email}/>
    </div>
  )
}