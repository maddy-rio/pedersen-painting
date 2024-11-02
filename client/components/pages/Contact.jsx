import Nav from '../Nav'
import Footer from '../Footer'
import emailjs from 'emailjs-com'

function Contact() {
  function handleSubmit(event) {
    event.preventDefault()

    emailjs
      .sendForm(
        'service_co61l7f',
        'template_jvtxwbm',
        event.target,
        'w5N7m0Zq4jOQsPjZO',
      )
      .then((result) => {
        alert('Email successfully sent.', result.text)
        window.location.reload()
      })
      .catch((error) => {
        alert('Something went wrong!', error.text)
        window.location.reload()
      })
  }

  return (
    <>
      <Nav />
      <section>
        <h1 className="page-header">&nbsp;&nbsp;Contact us&nbsp;&nbsp;</h1>
        <p className="contact-text">Fill out the form below to get in touch</p>
        <div className="contact-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />

            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <label htmlFor="phone" className="sr-only">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your number"
              required
            />

            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">Submit enquiry</button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Contact
