import React, { Component } from "react";
import ContactUs from "./ContactForm";

class Contact extends Component {


  
  render() {
    return (
   <>
   <div>
    <h2> CONTACT FORM</h2>
    <p className="contactMeParagraph">Links to all my contact pages can be found at the bottom of the page, including my Resume, GitHub, and LinkedIn pages. 
    You can also send me an email by submitting the form below. Thanks and have a great day!</p>
   </div>
   <ContactUs >

   </ContactUs>
   </>
    )
  }
}
 
export default Contact;