import { useState } from "react"
import Nav from "../Nav"
import Footer from "../Footer"
import Carousel from "./Carousel"

function OurWork() {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
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
        <div onClick={toggleModal} class="overlay"></div>
        <div class="text">Haumoana</div>
      </div>
    </div>
    <div class="flex-item">
      <div class="image-container">
        <img src="/Edenlane.jpeg" alt="House on Eden Lane"/>
        <div class="static-overlay"></div>
        <div onClick={toggleModal} class="overlay"></div>
        <div class="text">Eden Lane</div>
      </div>
    </div>
    <div class="flex-item">
      <div class="image-container">
        <img src="/Waimarama.jpeg" alt="House in Waimārama"/>
        <div class="static-overlay"></div>
        <div onClick={toggleModal} class="overlay"></div>
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
        <div onClick={toggleModal} class="overlay"></div>
        <div class="text">Taihape</div>
      </div>
    </div>
    <div class="flex-item">
      <div class="image-container">
        <img src="/Interiors.jpeg" alt="Interior pictures"/>
        <div class="static-overlay"></div>
        <div onClick={toggleModal}class="overlay"></div>
        <div class="text">Interiors</div>
      </div>
    </div>
    <div class="flex-item">
      <div class="image-container">
        <img src="/Exteriors.jpeg" alt="Exterior pictures"/>
        <div class="static-overlay"></div>
        <div onClick={toggleModal} class="overlay"></div>
        <div class="text">Exteriors</div>
      </div>
    </div>
    
  </div>
  
</section>
</section>

{showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button onClick={toggleModal}>x</button>
           
          </div>
        </div>
      )}
<Footer />
            </section>
           
           

          
        </>
    )
}

export default OurWork