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
            At NextLevel Painting, quality is at the heart of everything we do. We understand that a fresh coat of paint can enhance the beauty and value of your property, which is why we exclusively use Prospec, a high-quality paint system renowned for its durability and innovative technology. As a certified Prospec applicator, our skilled team of five painters is expertly trained in the latest application techniques, ensuring that every project—residential or commercial—receives a flawless finish that stands the test of time.


            </p>
        
            <br />
            <p>
            Our commitment to excellence means that we pay meticulous attention to detail, from surface preparation to the final coat. By leveraging Prospec’s superior products and our team's expertise, we deliver stunning results that not only elevate your space but also provide lasting performance. As we continue to grow and establish ourselves in the community, we invite you to explore our services and discover why NextLevel Painting is the trusted choice for quality painting solutions. 


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
