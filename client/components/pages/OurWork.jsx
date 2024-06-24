
import { useState } from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import Carousel from "./Carousels.jsx/Carousel";
import Carousel2 from "./Carousels.jsx/Carousel2";
import Carousel3 from "./Carousels.jsx/Carousel3";
import Carousel4 from "./Carousels.jsx/Carousel4";
import Carousel5 from "./Carousels.jsx/Carousel5";
import Carousel6 from "./Carousels.jsx/Carousel6";

function OurWork() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCarousel, setSelectedCarousel] = useState(null);

  const toggleModal = (carouselComponent) => {
    setSelectedCarousel(carouselComponent);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCarousel(null); 
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <>
      <Nav />
      <section>
        <h1 class="page-header">&nbsp;&nbsp;Our work&nbsp;&nbsp;</h1>
        <section id="work-page">
          <section id="work-section">
            <div class="work-flex-container">
            <div class="work-flex-item">
  <div class="image-container" onClick={() => toggleModal(<Carousel />)}>
    <img src="/Haumoana.jpeg" alt="House in Haumoana" />
    <div class="static-overlay"></div>
    <div class="overlay"></div>
    <div class="text">Haumoana</div>
  </div>
</div>
<div class="work-flex-item">
  <div class="image-container" onClick={() => toggleModal(<Carousel2 />)}>
    <img src="/Edenlane.jpeg" alt="House on Eden Lane" />
    <div class="static-overlay"></div>
    <div class="overlay"></div>
    <div class="text">Eden Lane</div>
  </div>
</div>
<div class="work-flex-item">
  <div class="image-container" onClick={() => toggleModal(<Carousel3 />)}>
    <img src="/Waimarama.jpeg" alt="House in Waimārama" />
    <div class="static-overlay"></div>
    <div class="overlay"></div>
    <div class="text">Waimārama</div>
  </div>
</div>
<div class="work-flex-item">
  <div class="image-container" onClick={() => toggleModal(<Carousel4 />)}>
    <img src="/Taihape.jpeg" alt="House in Taihape" />
    <div class="static-overlay"></div>
    <div class="overlay"></div>
    <div class="text">Taihape</div>
  </div>
</div>
<div class="work-flex-item">
  <div class="image-container" onClick={() => toggleModal(<Carousel5 />)}>
    <img src="/Interiors.jpeg" alt="Interior pictures" />
    <div class="static-overlay"></div>
    <div class="overlay"></div>
    <div class="text">Interiors</div>
  </div>
</div>
<div class="work-flex-item">
  <div class="image-container" onClick={() => toggleModal(<Carousel6 />)}>
    <img src="/Exteriors.jpeg" alt="Exterior pictures" />
    <div class="static-overlay"></div>
    <div class="overlay"></div>
    <div class="text">Exteriors</div>
  </div>
</div>
            </div>
          </section>
        </section>
        <Footer />

        {showModal && (
          <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal">
              <button className="exit-button" onClick={closeModal}>X</button>
              {selectedCarousel}
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default OurWork;