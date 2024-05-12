import Nav from '../Nav'
import Footer from '../Footer'
import emailjs from 'emailjs-com';

function handleSubmit(event) {
    event.preventDefault();
  
    emailjs.sendForm('service_co61l7f', 'template_jvtxwbm', event.target, 'w5N7m0Zq4jOQsPjZO')
      .then((result) => {
            alert('Thanks! We will be in touch soon', result.text);
            window.location.reload
      }, (error) => {
        alert('Something went wrong!', error.text);
        window.location.reload
      });
  }

//   Add a custom alert message to the page to replace alerts

function Contact() {

    return (
        <>
          <Nav />
           <section>
           <h1 class="page-header">Contact us</h1>
           <p>Fill out the form below to get in touch</p>
           <form class="contact-form" onSubmit={handleSubmit}>
      <input type="name" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <input type="phone" name="phone" placeholder="Your number" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit">Submit enquiry</button>
    </form>
           </section>
        <Footer />
        </>
    )
}

export default Contact