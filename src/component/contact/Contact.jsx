import React, { useState } from 'react'
import "./contact.css";
import emailjs from '@emailjs/browser';
import  { useRef } from 'react';


const Contact = () => {
  const form = useRef();
  const[done,setDone]=useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d8f6dfo', 'template_qsnakls', form.current, 'o4zfZrWrc8NJj9sAN')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };
    
  return (
    <div className='contact' id='Contact'>
        <div className="c__left">
            <span>Get In Touch</span>
            <span>Contact Me...</span>
        </div>
        <div className="c__right">
            <form ref={form} onSubmit={sendEmail}>
                <input  type="text" name='user_name' className='user' placeholder='Name' />
                <input type="email" name='user_email' className='user' placeholder='Email' />
                <textarea name="message" className='user' placeholder='Message'></textarea>
                <button type='submit' value='send'>Send</button>
                <span>{done && "Thanks For Contacting Me!!!"}</span>
            </form>

        </div>
      
    </div>
  );
};

export default Contact
