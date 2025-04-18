import Nav from '../Nav'
import Footer from '../Footer'
import Carousel from './Carousels.jsx/Carousel'
import Carousel2 from './Carousels.jsx/Carousel2'
import Carousel3 from './Carousels.jsx/Carousel3'
import Carousel4 from './Carousels.jsx/Carousel4'
import Carousel5 from './Carousels.jsx/Carousel5'
import Carousel6 from './Carousels.jsx/Carousel6'
import Carousel7 from './Carousels.jsx/Carousel7'
import Carousel8 from './Carousels.jsx/Carousel8'
import Carousel9 from './Carousels.jsx/Carousel9'
import Carousel10 from './Carousels.jsx/Carousel10'
import Carousel11 from './Carousels.jsx/Carousel11'

import { motion, animate, stagger, useInView } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

function OurWork() {
  const [hasNewPageAnimated, setHasNewPageAnimated] = useState(false)

  // Animation variants
  const transitionToNewPageVariant = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
  }

  // Work
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
          <h1 className="page-header">&nbsp;&nbsp;Our work&nbsp;&nbsp;</h1>
        </motion.div>
        <section id="work-page" ref={images}>
          <section id="work-section">
        
            <div className="work-flex-container">
              <div className="work-flex-item animate-project-image">
                <div
                  className="image-container"
                  onClick={() => toggleModal(<Carousel />)}
                  role="button"
                  tabIndex={0}
                  aria-label="Image carousel for Matangi house"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ')
                      toggleModal(<Carousel />)
                  }}
                >
                  <img src="/Matangi.jpeg" alt="House in Matangi" />
                  <div className="static-overlay"></div>
                  <div className="overlay"></div>
                  <div className="text">Matangi</div>
                </div>
              </div>
              <div className="work-flex-item animate-project-image">
                <div
                  className="image-container"
                  onClick={() => toggleModal(<Carousel2 />)}
                  role="button"
                  tabIndex={0}
                  aria-label="Image carousel for Gage Lane house"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ')
                      toggleModal(<Carousel2 />)
                  }}
                >
                  <img src="/Gage.jpeg" alt="House on Gage Lane" />
                  <div className="static-overlay"></div>
                  <div className="overlay"></div>
                  <div className="text">Gage Lane</div>
                </div>
              </div>
              <div className="work-flex-item animate-project-image">
                <div
                  className="image-container"
                  onClick={() => toggleModal(<Carousel3 />)}
                  role="button"
                  tabIndex={0}
                  aria-label="Image carousel for Puketapu house"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ')
                      toggleModal(<Carousel3 />)
                  }}
                >
                  <img src="/Puketapu.jpeg" alt="House in Puketapu" />
                  <div className="static-overlay"></div>
                  <div className="overlay"></div>
                  <div className="text">Puketapu</div>
                </div>
              </div>
              <div className="work-flex-item animate-project-image">
                <div
                  className="image-container"
                  onClick={() => toggleModal(<Carousel4 />)}
                  role="button"
                  tabIndex={0}
                  aria-label="Image carousel for The Brow House"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ')
                      toggleModal(<Carousel4 />)
                  }}
                >
                  <img src="/Thebrow.jpeg" alt="House on The Brow" />
                  <div className="static-overlay"></div>
                  <div className="overlay"></div>
                  <div className="text">The Brow</div>
                </div>
              </div>
              <div className="work-flex-item animate-project-image">
                <div
                  className="image-container"
                  onClick={() => toggleModal(<Carousel5 />)}
                  role="button"
                  tabIndex={0}
                  aria-label="Image carousel for Churchill house"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ')
                      toggleModal(<Carousel5 />)
                  }}
                >
                  <img src="/Churchill.jpeg" alt="House in Churchill" />
                  <div className="static-overlay"></div>
                  <div className="overlay"></div>
                  <div className="text">Churchill</div>
                </div>
              </div>
              <div className="work-flex-item animate-project-image">
                <div
                  className="image-container"
                  onClick={() => toggleModal(<Carousel6 />)}
                  role="button"
                  tabIndex={0}
                  aria-label="Image carousel for LandMark Office"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ')
                      toggleModal(<Carousel6 />)
                  }}
                >
                  <img src="/Landmark.jpeg" alt="LandMark Office" />
                  <div className="static-overlay"></div>
                  <div className="overlay"></div>
                  <div className="text">LandMark</div>
                </div>
              </div>
              <div className="work-flex-item animate-project-image">
                <div
                  className="image-container"
                  onClick={() => toggleModal(<Carousel7 />)}
                  role="button"
                  tabIndex={0}
                  aria-label="Image carousel for VTNZ Napier"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ')
                      toggleModal(<Carousel7 />)
                  }}
                >
                  <img src="/VTNZ.png" alt="VTNZ Napier" />
                  <div className="static-overlay"></div>
                  <div className="overlay"></div>
                  <div className="text">VTNZ Napier</div>
                </div>
              </div>
              <div className="work-flex-item animate-project-image">
                <div
                  className="image-container"
                  onClick={() => toggleModal(<Carousel8 />)}
                  role="button"
                  tabIndex={0}
                  aria-label="Image carousel for Night 'n Day"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ')
                      toggleModal(<Carousel8 />)
                  }}
                >
                  <img src="/Nightnday.png" alt="Night 'n Day" />
                  <div className="static-overlay"></div>
                  <div className="overlay"></div>
                  <div className="text">Night 'n Day</div>
                </div>
              </div>
              <div className="work-flex-item animate-project-image">
                <div
                  className="image-container"
                  onClick={() => toggleModal(<Carousel9 />)}
                  role="button"
                  tabIndex={0}
                  aria-label="Image carousel for Waimarama house"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ')
                      toggleModal(<Carousel9 />)
                  }}
                >
                 <img src="/Waimarama.jpeg" alt="House in Waimarama" />
                  <div className="static-overlay"></div>
                  <div className="overlay"></div>
                  <div className="text">Waimārama</div>
                </div>
              </div>
              <div className="work-flex-item animate-project-image">
                <div
                  className="image-container"
                  onClick={() => toggleModal(<Carousel10 />)}
                  role="button"
                  tabIndex={0}
                  aria-label="Image carousel for Taihape house"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ')
                      toggleModal(<Carousel10 />)
                  }}
                >
                  <img src="/Taihape.jpeg" alt="Taihape house" />
                  <div className="static-overlay"></div>
                  <div className="overlay"></div>
                  <div className="text">Taihape</div>
                </div>
              </div>
              
              <div className="work-flex-item animate-project-image">
                <div
                  className="image-container"
                  onClick={() => toggleModal(<Carousel11 />)}
                  role="button"
                  tabIndex={0}
                  aria-label="Image carousel for Eden Lane house"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ')
                      toggleModal(<Carousel11 />)
                  }}
                >
                  <img src="/Edenlane.jpeg" alt="Eden Lane house" />
                  <div className="static-overlay"></div>
                  <div className="overlay"></div>
                  <div className="text">Eden Lane</div>
                </div>
              </div>
              
            </div>
            
          </section>
        </section>
        <Footer />

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
      </section>
    </>
  )
}

export default OurWork
