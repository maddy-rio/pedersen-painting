import { useState } from "react"
import Nav from "../Nav"
import Footer from "../Footer"
import Carousel from "./Carousels.jsx/Carousel"
import Carousel2 from "./Carousels.jsx/Carousel2"
import Carousel3 from "./Carousels.jsx/Carousel3"
import Carousel4 from "./Carousels.jsx/Carousel4"
import Carousel5 from "./Carousels.jsx/Carousel5"
import Carousel6 from "./Carousels.jsx/Carousel6"

function OurWork() {

  const [showModal, setShowModal] = useState(false);
  const [selectedCarousel, setSelectedCarousel] = useState(null);

  const toggleModal = (carouselComponent) => {
    setSelectedCarousel(carouselComponent);
    setShowModal(!showModal);
  };

    return (
        <>
            <Nav />
            <section>
            <h1 class="page-header">Our work</h1>
             <section id="work-page">
        
            <section id="work-section">
  <div class="flex-container">
    <div class="flex-item">
      <div class="image-container">
        <img src="/Haumoana.jpeg" alt="House in Haumoana"/>
        <div class="static-overlay"></div>
        <div onClick={() => toggleModal(<Carousel />)} class="overlay"></div>
        <div class="text">Haumoana</div>
      </div>
    </div>
    <div class="flex-item">
      <div class="image-container">
        <img src="/Edenlane.jpeg" alt="House on Eden Lane"/>
        <div class="static-overlay"></div>
        <div onClick={() => toggleModal(<Carousel2 />)} class="overlay"></div>
        <div class="text">Eden Lane</div>
      </div>
    </div>
    <div class="flex-item">
      <div class="image-container">
        <img src="/Waimarama.jpeg" alt="House in Waimārama"/>
        <div class="static-overlay"></div>
        <div onClick={() => toggleModal(<Carousel3 />)} class="overlay"></div>
        <div class="text">Waimārama</div>
      </div>
    </div>
    
  </div>
  
</section>
<section id="work-section">
  <div class="flex-container">
    <div class="flex-item">
      <div class="image-container">
        <img src="/Taihape.jpeg" alt="House in Taihape"/>
        <div class="static-overlay"></div>
        <div onClick={() => toggleModal(<Carousel4 />)} class="overlay"></div>
        <div class="text">Taihape</div>
      </div>
    </div>
    <div class="flex-item">
      <div class="image-container">
        <img src="/Interiors.jpeg" alt="Interior pictures"/>
        <div class="static-overlay"></div>
        <div onClick={() => toggleModal(<Carousel5 />)} class="overlay"></div>
        <div class="text">Interiors</div>
      </div>
    </div>
    <div class="flex-item">
      <div class="image-container">
        <img src="/Exteriors.jpeg" alt="Exterior pictures"/>
        <div class="static-overlay"></div>
        <div onClick={() => toggleModal(<Carousel6 />)} class="overlay"></div>
        <div class="text">Exteriors</div>
      </div>
    </div>
    
  </div>
  
</section>
</section>
<Footer/>

{showModal && (
        <div className="modal-overlay">
          <div className="modal">
            < button className="exit-button" onClick={() => toggleModal(null)}>X</button>
            {selectedCarousel}
          </div>
        </div>
      )}

            </section>
           
           

          
        </>
    )
}

export default OurWork