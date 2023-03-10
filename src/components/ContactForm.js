
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../css/contactform.css';

function ContactUs () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_no0zwq2', 'template_y02fhbl', form.current, 'xdl0Qn3diz6sO9tXu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert('Email sent successfully')
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label className='labelForm' >Name</label>
      <input type="text" name="from_name" className='input' />
      <label className='labelForm'>Email</label>
      <input type="email" name="reply_to" className='input' />
      <label className='labelForm'>Message</label>
      <textarea name="message" className='inputMessage' />
      <input type="submit" value="Send" className='sendButton'/>
    </form>
  );
};
export default ContactUs