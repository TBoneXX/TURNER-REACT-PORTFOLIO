
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../css/contactform.css';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label className='labelForm' >Name</label>
      <input type="text" name="user_name" className='input' />
      <label className='labelForm'>Email</label>
      <input type="email" name="user_email" className='input' />
      <label className='labelForm'>Message</label>
      <textarea name="message" className='inputMessage' />
      <input type="submit" value="Send" className='sendButton'/>
    </form>
  );
};
export default ContactUs