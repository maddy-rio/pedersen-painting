import Carousel4 from './pages/Carousels.jsx/Carousel4'
import Carousel3 from './pages/Carousels.jsx/Carousel3'
import Carousel2 from './pages/Carousels.jsx/Carousel2'

import { motion, animate, stagger, useInView } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

function Main() {
  // Add animation
  // Landing page section
  const [hasLandingPageAnimated, setHasLandingPageAnimated] = useState(false)

  // Section one
  const [hasSectionOneImageAnimated, setHasSectionOneImageAnimated] =
    useState(false)
  const [hasSectionOneTextAnimated, setHasSectionOneTextAnimated] =
    useState(false)

  // Section two
  const [hasSectionTwoImageAnimated, setHasSectionTwoImageAnimated] =
    useState(false)
  const [hasSectionTwoTextAnimated, setHasSectionTwoTextAnimated] =
    useState(false)

  // Section three
  const [hasSectionThreeTextAnimated, setHasSectionThreeTextAnimated] =
    useState(false)

  const images = useRef(null)
  const imagesInView = useInView(images)

  useEffect(() => {
    if (imagesInView) {
      animate(
        '.animate-project-image',
        { opacity: 1, x: 0 },
        {
          duration: 0.5,
          delay: stagger(0.35, { startDelay: 0.1 }),
          ease: 'circOut',
        },
      )
    } else {
      animate('.animate-project-image', { opacity: 0, x: -10 }, { duration: 0 })
    }
  }, [imagesInView])

  // Animation variants
  const landingPageVariant = {
    hidden: { opacity: 0, x: -5 },
    visible: { opacity: 1, x: 0 },
  }

  const sectionOneImageVariant = {
    hidden: { opacity: 0, x: -5 },
    visible: { opacity: 1, x: 0 },
  }

  const sectionOneTextVariant = {
    hidden: { opacity: 0, x: 5 },
    visible: { opacity: 1, x: 0 },
  }

  const sectionTwoImageVariant = {
    hidden: { opacity: 0, x: 5 },
    visible: { opacity: 1, x: 0 },
  }

  const sectionTwoTextVariant = {
    hidden: { opacity: 0, x: -5 },
    visible: { opacity: 1, x: 0 },
  }

  const sectionThreeTextVariant = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
  }

  const [showModal, setShowModal] = useState(false)
  const [selectedCarousel, setSelectedCarousel] = useState(null)

  const toggleModal = (carouselComponent) => {
    setSelectedCarousel(carouselComponent)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedCarousel(null)
  }

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal()
    }
  }

  return (
    <main>
      {/* Landing Page */}
      <motion.section
        id="landing-page"
        variants={landingPageVariant}
        initial="hidden"
        transition={{ ease: 'linear', duration: 0.5, delay: 0.25 }}
        animate={hasLandingPageAnimated ? 'visible' : 'hidden'}
        onViewportEnter={() => {
          if (!hasLandingPageAnimated) {
            setHasLandingPageAnimated(true)
          }
        }}
      >
        <motion.div
          class="banner"
          variants={landingPageVariant}
          initial="hidden"
          transition={{ ease: 'linear', duration: 0.5, delay: 0.4 }}
          animate={hasLandingPageAnimated ? 'visible' : 'hidden'}
          onViewportEnter={() => {
            if (!hasLandingPageAnimated) {
              setHasLandingPageAnimated(true)
            }
          }}
        >
          <h1 className="hero-header">
            Crafting Premium Living, One Brushstroke at a Time.
          </h1>
          <button
            className="hollow-button"
            onClick={() => (window.location.href = '/work')}
          >
            View our work
          </button>
          <button
            className="solid-button"
            onClick={() => (window.location.href = '/contact')}
          >
            Contact us
          </button>
        </motion.div>
      </motion.section>

      {/* Section 1 */}
      <section id="section-left">
        <motion.div
          variants={sectionOneImageVariant}
          initial="hidden"
          transition={{ ease: 'linear', duration: 0.5, delay: 0.3 }}
          animate={hasSectionOneImageAnimated ? 'visible' : 'hidden'}
          onViewportEnter={() => {
            if (!hasSectionOneImageAnimated) {
              setHasSectionOneImageAnimated(true)
            }
          }}
        >
          <img
            // className="main-image"
            src="/waimarama1.jpeg"
            alt="House in Waimarama's hallway"
          ></img>
        </motion.div>
        <motion.div
          className="section-text main-image"
          variants={sectionOneTextVariant}
          initial="hidden"
          transition={{ ease: 'linear', duration: 0.5, delay: 0.35 }}
          animate={hasSectionOneTextAnimated ? 'visible' : 'hidden'}
          onViewportEnter={() => {
            if (!hasSectionOneTextAnimated) {
              setHasSectionOneTextAnimated(true)
            }
          }}
        >
          <h1 className="section-header">WHO WE ARE</h1>
          <p>
            Welcome to Pedersen Painting & Decorating, your trusted choice for
            superior painting solutions in Hawke&apos;s Bay. As a family-run
            business, we take pride in delivering exceptional results tailored
            to your vision. With a focus on residential new builds and
            partnerships with industry leaders, we promise a premium finish that
            stands the test of time.
          </p>
          <button
            className="section-button"
            onClick={() => (window.location.href = '/about')}
          >
            More about us
          </button>
        </motion.div>
      </section>

      {/*  Section 2  */}
      <section id="section-right">
        <motion.div
          variants={sectionTwoImageVariant}
          initial="hidden"
          transition={{ ease: 'linear', duration: 0.5, delay: 0.3 }}
          animate={hasSectionTwoImageAnimated ? 'visible' : 'hidden'}
          onViewportEnter={() => {
            if (!hasSectionTwoImageAnimated) {
              setHasSectionTwoImageAnimated(true)
            }
          }}
        >
          <img
            // className="main-image"
            src="/waimarama2.jpeg"
            alt="House in Waimarama's bathroom"
          ></img>
        </motion.div>
        <motion.div
          className="section-text main-image"
          variants={sectionTwoTextVariant}
          initial="hidden"
          transition={{ ease: 'linear', duration: 0.5, delay: 0.35 }}
          animate={hasSectionTwoTextAnimated ? 'visible' : 'hidden'}
          onViewportEnter={() => {
            if (!hasSectionTwoTextAnimated) {
              setHasSectionTwoTextAnimated(true)
            }
          }}
        >
          <h1 className="section-header">OUR SERVICES</h1>
          <p>
            Elevate your space with our premium services. From residential to
            commercial painting, we specialize in precision and professionalism.
            Our offerings include interior and exterior transformations,
            wallpapering, waterblasting, and roof painting. Explore our services
            and experience the difference in every project.
          </p>
          <button
            className="section-button"
            onClick={() => (window.location.href = '/services')}
          >
            View our services
          </button>
        </motion.div>
      </section>

      {/* Section 3  */}
      <section id="section3" ref={images}>
        <motion.div
          className="section-header-center"
          variants={sectionThreeTextVariant}
          initial="hidden"
          transition={{ ease: 'linear', duration: 0.5, delay: 0.35 }}
          animate={hasSectionThreeTextAnimated ? 'visible' : 'hidden'}
          onViewportEnter={() => {
            if (!hasSectionThreeTextAnimated) {
              setHasSectionThreeTextAnimated(true)
            }
          }}
        >
          <h1 className="section-header">RECENT WORK</h1>
        </motion.div>
        <div className="flex-container">
          <div className="flex-item animate-project-image">
            <div
              className="image-container"
              onClick={() => toggleModal(<Carousel4 />)}
              role="button"
              tabIndex={0}
              aria-label="Image carousel for Taihape house"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ')
                  toggleModal(<Carousel4 />)
              }}
            >
              <img src="/Taihape.jpeg" alt="House in Taihape" />
              <div className="static-overlay"></div>
              <div className="overlay"></div>
              <div className="text">Taihape</div>
            </div>
          </div>

          <div className="flex-item animate-project-image">
            <div
              className="image-container"
              onClick={() => toggleModal(<Carousel3 />)}
              role="button"
              tabIndex={0}
              aria-label="Image carousel for Waimarama house"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ')
                  toggleModal(<Carousel3 />)
              }}
            >
              <img src="/Waimarama.jpeg" alt="House in Waimarama" />
              <div className="static-overlay"></div>
              <div className="overlay"></div>
              <div className="text">Waimārama</div>
            </div>
          </div>

          <div className="flex-item animate-project-image">
            <div
              className="image-container"
              onClick={() => toggleModal(<Carousel2 />)}
              role="button"
              tabIndex={0}
              aria-label="Image carousel for Eden Lane house"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ')
                  toggleModal(<Carousel2 />)
              }}
            >
              <img src="/Edenlane.jpeg" alt="House on Eden Lane" />
              <div className="static-overlay"></div>
              <div className="overlay"></div>
              <div className="text">Eden Lane</div>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <button className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal">
            <button className="exit-button" onClick={closeModal}>
              X
            </button>
            {selectedCarousel}
          </div>
        </button>
      )}
    </main>
  )
}

export default Main
