import Nav from '../Nav'
import Footer from '../Footer'

function AboutUs() {

    return (
      <>
      <Nav />
      <section>
          <h1 class="about-header">&nbsp;&nbsp;About us</h1>
          <section class="about-us">
  
  
  
              <div>
                  <p>Pedersen Painting & Decorating is your top choice for exceptional painting services in Hawke's Bay. With over a decade of experience, we've built a reputation for quality craftsmanship and excellence.</p>
                  <br />
                  <p>Our team is led by Tony and Jayden, a father-and-son duo, and includes two additional skilled painters. We focus on premium end homes and use only the best products to ensure superior results.</p>
                  <br />
                
        
                  <p>Whether it's painting your home or enhancing your business, we handle every project with care and precision. Our comprehensive services, from wallpapering to water blasting, cater to all your painting needs.</p>
                  <br />
                  <p>Ready to elevate your space with Pedersen Painting & Decorating? Explore our services below and discover why we're the trusted name in painting excellence throughout Hawke's Bay.</p>
                  <br />
                
  
              </div>
              <div id='about-section'>
                  <div class="flex-container">
                          <div class="image-container">
                              <div class="about-overlay"></div>
                     
                              <img src="/residential.jpeg" alt="Residential building" />
                              <a href="/services">
                              <div class="overlay"></div>
                              </a>
                              <div class="about-text">Residential</div>
        
                      </div>
            
                          <div class="image-container">
                              <div class="about-overlay"></div>
                        
                              <img src="/commercial.jpeg" alt="Commercial building" />
                              <a href="/services">
                              <div class="overlay"></div>
                              </a>
                              <div class="about-text">Commercial</div>

                      </div>
                 
                          <div class="image-container">
                              <div class="about-overlay"></div>
                          
                              <img src="/wallpaper.jpeg" alt="Wallpaper with gold and black" />
                            
                              <a href="/services">
                              <div class="overlay"></div>
                              </a>
                              <div class="about-text">Wallpapering</div>
                        
                      </div>
  
                   
                          <div class="image-container">
                              <div class="about-overlay"></div>
                          
                              <img src="/waterblasting.jpeg" alt="Waterblasting image" />
                           
                              <a href="/services">
                              <div class="overlay"></div>
                              </a>
                              <div class="about-text">Waterblasting</div>
                          </div>
            
                  </div>
              </div>
          </section>
          <Footer />
      </section>
  </>
  
    )
}

export default AboutUs