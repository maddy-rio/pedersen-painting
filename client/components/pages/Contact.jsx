import Nav from '../Nav'
import Footer from '../Footer'
import emailjs from 'emailjs-com'
import { motion, animate, stagger, useInView } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

function Contact() {
  const [hasNewPageAnimated, setHasNewPageAnimated] = useState(false)

  // Animation variants
  const transitionToNewPageVariant = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
  }

  // Form
  const form = useRef(null)
  const formInView = useInView(form)

  useEffect(() => {
    if (formInView) {
      animate(
        '.animate-form',
        { opacity: 1, y: 0 },
        {
          duration: 0.5,
          delay: stagger(0.35, { startDelay: 0.1 }),
          ease: 'circOut',
        },
      )
    } else {
      animate('.animate-form', { opacity: 0, y: -5 }, { duration: 0 })
    }
  }, [formInView])

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
        <motion.div
          variants={transitionToNewPageVariant}
          initial="hidden"
          transition={{ ease: 'linear', duration: 0.75, delay: 0.25 }}
          animate={hasNewPageAnimated ? 'visible' : 'hidden'}
          onViewportEnter={() => {
            if (!hasNewPageAnimated) {
              setHasNewPageAnimated(true)
            }
          }}
        >
          <h1 className="page-header">&nbsp;&nbsp;Contact us&nbsp;&nbsp;</h1>
          <p className="contact-text">
            Fill out the form below to get in touch
          </p>
        </motion.div>
        <div className="contact-container" ref={form}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              className="animate-form"
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
              className="animate-form"
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
              className="animate-form"
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
              className="animate-form"
              id="message"
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="animate-form">
              Submit enquiry
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact
