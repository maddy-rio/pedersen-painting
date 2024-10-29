import Nav from '../Nav'
import Footer from '../Footer'

function AboutUs() {
  return (
    <>
      <Nav />
      <section>
        <h1 className="about-header">&nbsp;&nbsp;About us</h1>
        <section className="about-us">
          <div>
            <p>
              Pedersen Painting & Decorating is your top choice for exceptional
              painting services in Hawke&apos;s Bay. With over a decade of
              experience, we&apos;ve built a reputation for quality
              craftsmanship and excellence.
            </p>
            <br />
            <p>
              Our team is led by Tony and Jayden, a father-and-son duo, and
              includes two additional skilled painters. We focus on premium end
              homes and use only the best products to ensure superior results.
            </p>
            <br />

            <p>
              Whether it&apos;s painting your home or enhancing your business,
              we handle every project with care and precision. Our comprehensive
              services, from wallpapering to water blasting, cater to all your
              painting needs.
            </p>
            <br />
            <p>
              Ready to elevate your space with Pedersen Painting & Decorating?
              Explore our services below and discover why we&apos;re the trusted
              name in painting excellence throughout Hawke&apos;s Bay.
            </p>
            <br />
          </div>
          <div id="about-section">
            <div className="flex-container">
              <div className="image-container">
                <div className="about-overlay"></div>

                <img src="/residential.jpeg" alt="Residential building" />
                <a href="/services">
                  <div className="overlay"></div>
                  <div className="about-text">Residential</div>
                </a>
              </div>

              <div className="image-container">
                <div className="about-overlay"></div>

                <img src="/commercial.jpeg" alt="Commercial building" />
                <a href="/services">
                  <div className="overlay"></div>
                  <div className="about-text">Commercial</div>
                </a>
              </div>

              <div className="image-container">
                <div className="about-overlay"></div>

                <img
                  src="/wallpaper.jpeg"
                  alt="Wallpaper with gold and black"
                />

                <a href="/services">
                  <div className="overlay"></div>
                  <div className="about-text">Wallpapering</div>
                </a>
              </div>

              <div className="image-container">
                <div className="about-overlay"></div>

                <img src="/waterblasting.jpeg" alt="Waterblasting house" />

                <a href="/services">
                  <div className="overlay"></div>
                  <div className="about-text">Waterblasting</div>
                </a>
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
