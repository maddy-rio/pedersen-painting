
function Main() {
  return (
    <main>
        {/* Landing Page */}
        <section id="landing-page">
       
          <div class="banner">
            <p>Crafting Premium Living, One Brushstroke at a Time.</p>
            <button class="hollow-button" onClick={() => window.location.href = '/work'}>View our work</button>
            <button class="solid-button" onClick={() => window.location.href = '/contact'}>Contact us</button>
          
         </div>
    </section>

    {/* Section 1 */}
    <section id="section1">
<img src="/waimarama1.png"></img>
<div className="section-text">
  <p className="section-header">WHO WE ARE</p>
<p>Welcome to Pedersen Painting & Decorating, your trusted choice for superior painting solutions in Hawke's Bay. As a family-run business, we take pride in delivering exceptional results tailored to your vision. With a focus on residential new builds and partnerships with industry leaders, we promise a premium finish that stands the test of time.</p>
            <button class="section-button" onClick={() => window.location.href = '/about'}>More about us</button>
            </div>
    </section>


    {/*  Section 2  */}
    <section id="section2">
      <img src="/waimarama2.png"></img>
      <div className="section-text">
      <p className="section-header">OUR SERVICES</p>
      <p>
Elevate your space with our premium services. From residential to commercial painting, we specialize in precision and professionalism. Our offerings include interior and exterior transformations, wallpapering, waterblasting, and roof painting. Explore our services and experience the difference in every project.</p>
            <button class="section-button" onClick={() => window.location.href = '/services'}>View our services</button>
            </div>
    </section>

     {/* Section 3  */}
     <section id="section3">
  <div class="flex-container">
    <div class="flex-item">
      <div class="image-container">
        <img src="/Taihape.png" alt="House in Taihape"/>
        <div class="static-overlay"></div>
        <div class="overlay"></div>
        <div class="text">Taihape</div>
      </div>
    </div>
    <div class="flex-item">
      <div class="image-container">
        <img src="/Waimarama.png" alt="House in Waimarama"/>
        <div class="static-overlay"></div>
        <div class="overlay"></div>
        <div class="text">Waimārama</div>
      </div>
    </div>
    <div class="flex-item">
      <div class="image-container">
        <img src="/Edenlane.png" alt="House on Eden Lane"/>
        <div class="static-overlay"></div>
        <div class="overlay"></div>
        <div class="text">Eden Lane</div>
      </div>
    </div>
    
  </div>
</section>


    </main>
  )
}

export default Main