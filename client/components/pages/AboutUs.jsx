import Nav from '../Nav'
import Footer from '../Footer'

import { motion } from 'framer-motion'
import { useState } from 'react'

function AboutUs() {
  const [hasNewPageAnimated, setHasNewPageAnimated] = useState(false)

  // Animation variants
  const transitionToNewPageVariant = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <>
      <Nav />
      <motion.section
        variants={transitionToNewPageVariant}
        initial="hidden"
        transition={{ ease: 'linear', duration: 1, delay: 0.25 }}
        animate={hasNewPageAnimated ? 'visible' : 'hidden'}
        onViewportEnter={() => {
          if (!hasNewPageAnimated) {
            setHasNewPageAnimated(true)
          }
        }}
      >
        <h1 className="about-header">&nbsp;&nbsp;About us</h1>
        <section className="about-us">
          <div>
            <p>
            At NextLevel Painting, quality is at the heart of everything we do. We understand that a fresh coat of paint can enhance the beauty and value of your property, which is why we exclusively use the best quality products from our partnered supplier, Complete Paints. For our repaint and refresh services, we utilize the eco-friendly Paint Plus product range, which features minimal odor and emissions and is proudly made in New Zealand. When it comes to new builds, we take pride in using Prospec Paints, one of the highest-quality paint systems available. Prospec’s approved applicator-only coating system is built around unrivaled highbuild technology, offering the industry’s only true Level 5 wall and ceiling finish, paired with their self-leveling enamel.


            </p>
        
            <br />
            <p>
            Our commitment to excellence means that we pay meticulous attention to detail, from surface preparation to the final coat. By leveraging superior products and our team's expertise, we deliver stunning results that not only elevate your space but also provide lasting performance. As we continue to grow and establish ourselves in the community, we invite you to explore our services and discover why NextLevel Painting is the trusted choice for quality painting solutions. 


            </p>
            <br />
          </div>
          <div id="about-section">
            <div className="flex-container">
              <div className="image-container">
                <div className="about-overlay"></div>
                <img src="/residential.jpeg" alt="Residential building" />
                <a href="/services">
                  <div
                    className="overlay"
                    aria-label="Residential services"
                  ></div>
                </a>
                <div className="about-text">Residential</div>
              </div>

              <div className="image-container">
                <div className="about-overlay"></div>
                <img src="/commercial.jpeg" alt="Commercial building" />
                <a href="/services">
                  <div
                    className="overlay"
                    aria-label="Commercial services"
                  ></div>
                </a>
                <div className="about-text">Commercial</div>
              </div>

              <div className="image-container">
                <div className="about-overlay"></div>
                <img
                  src="/wallpaper.jpeg"
                  alt="Wallpaper with gold and black"
                />
                <a href="/services">
                  <div
                    className="overlay"
                    aria-label="Wallpapering services"
                  ></div>
                </a>
                <div className="about-text">Wallpapering</div>
              </div>

              <div className="image-container">
                <div className="about-overlay"></div>
                <img src="/waterblasting.jpeg" alt="Waterblasting house" />
                <a href="/services">
                  <div
                    className="overlay"
                    aria-label="Waterblasting services"
                  ></div>
                </a>
                <div className="about-text">Waterblasting</div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </motion.section>
    </>
  )
}

export default AboutUs
