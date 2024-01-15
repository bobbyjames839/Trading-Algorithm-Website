import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Email = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const name = document.getElementById('email-name')
    const email = document.getElementById('email-email')
    const message = document.getElementById('email-message')
    const success = document.getElementById('email-success')
    const error = document.getElementById('email-error')

    if (name.value !== '' && email.value !== '' && message.value !== '') {

      emailjs.sendForm('service_96l851n', 'template_hjo8zn8', form.current, '8cz9C4EQvPEbct7Cf')
        .then((result) => {
            console.log(result.text);
            name.value = ''
            email.value = ''
            message.value = ''
            success.style.display = 'block';
            setTimeout(() => {
                success.style.display = 'none';
            }, 3000);
        }, (error) => {
            console.log(error.text);
        });
    } else {
      error.style.display = 'block';
      setTimeout(() => {
          error.style.display = 'none';
      }, 3000);
    }
  };

  return (
    <>
    <span onClick={() => props.setEmail(prev => !prev)}><i className={`fa ${props.email ? 'fa-chevron-down' : 'fa-comment'} expand-email`}></i></span>
      
    {props.email && <div className="email">

      <p id="email-success" className="email-success">Messsage sent successfully</p>
      <p id="email-error" className="email-error">Please complete the form</p>

      <p className="email-title">Send an enquiry</p>
      <form ref={form} onSubmit={sendEmail} className="email-form">
        <input id="email-name" name="name" className='name-input' placeholder="Name" type='text'/>
        <input id="email-email" name="email" className="email-input" placeholder="Email" type='email'/>
        <textarea id="email-message" name="message" className="message-input" type='text' placeholder="Type message here"/>
        <button type="submit">Send</button>
      </form>

    </div>}
    </>
  )
}