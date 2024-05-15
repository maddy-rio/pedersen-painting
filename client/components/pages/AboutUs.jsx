import Nav from '../Nav'
import Footer from '../Footer'

function AboutUs() {

    return (
      <>
      <Nav />
      <section>
          <h1 class="about-header">About us</h1>
          <section class="about-us">
  
  
  
              <div>
                  <p>Pedersen Painting & Decorating is your top choice for exceptional painting services in Hawkes Bay. With over a decade of business, we've earned a reputation for delivering craftsmanship of unmatched quality and excellence.</p>
                  <br />
                  <p>Meet our team: Tony and Jayden, a father-and-son duo, along with Casey and Mark, long-time partners in painting. Together, they bring over 60 years of combined expertise to every project, ensuring attention to detail and a flawless finish.</p>
                  <br />
                  <hr class="about-hr" />
                  <br />
                  <p>At Pedersen Painting, we're all about delivering premium results without the fuss. Whether it's painting your home or sprucing up your business, we handle it all with care and precision. With trusted partnerships and advanced techniques, we guarantee a stunning transformation every time.</p>
                  <br />
                  <p>From wallpapering to water blasting, our comprehensive services cater to all your painting needs. Expect nothing short of excellence from Pedersen Painting & Decorating – where quality meets simplicity, and your satisfaction is our priority.</p>
                  <br />
                  <p>Ready to elevate your space with Pedersen Painting & Decorating? Explore our services below and discover why we're the trusted name in painting excellence throughout Hawkes Bay.</p>
                  <br />
                  <hr class="about-hr" />
  
              </div>
              <div id='about-section'>
                  <div class="flex-container">
                      <div class="about-item">
                          <div class="image-container">
                              <div class="about-overlay"></div>
                              <img src="/residential.jpeg" alt="Residential building" />
                              <div class="overlay"></div>
                              <div class="about-text">Residential</div>
                          </div>
                      </div>
                      <div class="about-item">
                          <div class="image-container">
                              <div class="about-overlay"></div>
                              <img src="/commercial.jpeg" alt="Commercial building" />
                              <div class="overlay"></div>
                              <div class="about-text">Commercial</div>
                          </div>
                      </div>
                      <div class="about-item">
                          <div class="image-container">
                              <div class="about-overlay"></div>
                              <img src="/wallpaper.jpeg" alt="Wallpapering" />
                              <div class="overlay"></div>
                              <div class="about-text">Wallpapering</div>
                          </div>
                      </div>
  
                      <div class="about-item">
                          <div class="image-container">
                              <div class="about-overlay"></div>
                              <img src="/waterblasting.jpeg" alt="Waterblasting image" />
                              <div class="overlay"></div>
                              <div class="about-text">Waterblasting</div>
                          </div>
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