import { FaFacebook, FaInstagram } from 'react-icons/fa'

function footer() {
  return (
    <section id="section-footer">
      <div className="footer-container">
        <div className="footer-item">
          <h2 className="footer-heading">Services</h2>
          <ul>
            <li>
              <a href="/services" aria-label="Residential services">
                Residential
              </a>
            </li>
            <li>
              <a href="/services" aria-label="Commercial services">
                Commerical
              </a>
            </li>
            <li>
              <a href="/services" aria-label="Wallpapering services">
                Wallpapering
              </a>
            </li>
            <li>
              <a href="/services" aria-label="Waterblasting services">
                Waterblasting
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-item">
          <h2 className="footer-heading">Quick Links</h2>
          <ul>
            <li>
              <a href="/about">About us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/work">Our work</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-item">
          <h2 className="footer-contact">Contact us</h2>
          <h3 className="footer-number">027 207 1306</h3>
          <a
            className="footer-email"
            href="mailto:jayden@pedersenpainting.co.nz"
          >
            jayden@pedersenpainting.co.nz
          </a>
          <p className="footer-social">
            Connect on &nbsp;{' '}
            <a
              href="https://www.facebook.com/profile.php?id=100095498316361&mibextid=JRoKGi"
              target="_blank"
              rel="noreferrer"
              aria-label="Connect on Facebook"
            >
              <FaFacebook />
            </a>{' '}
            <a
              href="https://www.instagram.com/pedersenpaintinganddecorating?igsh=b2NqbTIyOTljdm0="
              target="_blank"
              rel="noreferrer"
              aria-label="Connect on Instagram"
            >
              <FaInstagram />
            </a>
          </p>
        </div>
      </div>
      <div className="footer-overlay"></div>
      <div className="footer-text">
        © 2024 Pedersen Painting & Decorating LTD{' '}
      </div>
    </section>
  )
}

export default footer
