import { useState } from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import Carousel from './Carousels.jsx/Carousel'
import Carousel2 from './Carousels.jsx/Carousel2'
import Carousel3 from './Carousels.jsx/Carousel3'
import Carousel4 from './Carousels.jsx/Carousel4'
import Carousel5 from './Carousels.jsx/Carousel5'
import Carousel6 from './Carousels.jsx/Carousel6'

function OurWork() {
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
        <h1 className="page-header">&nbsp;&nbsp;Our work&nbsp;&nbsp;</h1>
        <section id="work-page">
          <section id="work-section">
            <div className="work-flex-container">
              <div className="work-flex-item">
                <div
                  className="image-container"
                  onClick={() => toggleModal(<Carousel />)}
                  role="button"
                  tabIndex={0}
                  aria-label="Image carousel for Haumoana house"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ')
                      toggleModal(<Carousel />)
                  }}
                >
                  <img src="/Haumoana.jpeg" alt="House in Haumoana" />
                  <div className="static-overlay"></div>
                  <div className="overlay"></div>
                  <div className="text">Haumoana</div>
                </div>
              </div>
              <div className="work-flex-item">
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
              <div className="work-flex-item">
                <div
                  className="image-container"
                  onClick={() => toggleModal(<Carousel3 />)}
                  role="button"
                  tabIndex={0}
                  aria-label="Image carousel for Waimārama house"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ')
                      toggleModal(<Carousel3 />)
                  }}
                >
                  <img src="/Waimarama.jpeg" alt="House in Waimārama" />
                  <div className="static-overlay"></div>
                  <div className="overlay"></div>
                  <div className="text">Waimārama</div>
                </div>
              </div>
              <div className="work-flex-item">
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
              <div className="work-flex-item">
                <div
                  className="image-container"
                  onClick={() => toggleModal(<Carousel5 />)}
                  role="button"
                  tabIndex={0}
                  aria-label="Image carousel for interior homes"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ')
                      toggleModal(<Carousel5 />)
                  }}
                >
                  <img src="/Interiors.jpeg" alt="Interior pictures" />
                  <div className="static-overlay"></div>
                  <div className="overlay"></div>
                  <div className="text">Interiors</div>
                </div>
              </div>
              <div className="work-flex-item">
                <div
                  className="image-container"
                  onClick={() => toggleModal(<Carousel6 />)}
                  role="button"
                  tabIndex={0}
                  aria-label="Image carousel for exterior homes"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ')
                      toggleModal(<Carousel6 />)
                  }}
                >
                  <img src="/Exteriors.jpeg" alt="Exterior pictures" />
                  <div className="static-overlay"></div>
                  <div className="overlay"></div>
                  <div className="text">Exteriors</div>
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
