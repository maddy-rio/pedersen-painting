import Nav from '../Nav'
import Footer from '../Footer'
import emailjs from 'emailjs-com';
import { useState } from 'react';
  

function Contact() {

  
  function handleSubmit(event) {
    event.preventDefault();
  
    emailjs.sendForm('service_co61l7f', 'template_jvtxwbm', event.target, 'w5N7m0Zq4jOQsPjZO')
    .then((result) => {
      alert('Email successfully sent.', result.text);
      window.location.reload();
})
.catch((error) => {
  alert('Something went wrong!', error.text);
  window.location.reload();
});
  }


    return (
        <>
          <Nav />
           <section>
           <h1 class="page-header">&nbsp;&nbsp;Contact us&nbsp;&nbsp;</h1>
           <p class="contact-text">Fill out the form below to get in touch</p>
           <div className='contact-container'>
           <form class="contact-form" onSubmit={handleSubmit}>
      <input type="name" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <input type="phone" name="phone" placeholder="Your number" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit" >Submit enquiry</button>
    </form>
    </div>
           </section>
        <Footer />

</>
);
}

export default Contact
