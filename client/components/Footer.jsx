import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useState } from 'react'

function Footer() {
  const [hasAnimated, setHasAnimated] = useState(false)

  return (
    <motion.section
      id="section-footer"
      initial={{ opacity: 0, y: -5 }}
      transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.25 }}
      animate={hasAnimated ? { y: 0, opacity: 1 } : {}}
      onViewportEnter={() => {
        if (!hasAnimated) {
          setHasAnimated(true)
        }
      }}
    >
      <div className="footer-container">
        <div className="footer-item">
          <h2 className="footer-heading">Services</h2>
          <ul>
            <li aria-label="Residential services">Residential</li>
            <li aria-label="Commercial services">Commerical</li>
            <li aria-label="Wallpapering services">Wallpapering</li>
            <li aria-label="Waterblasting services">Waterblasting</li>
          </ul>
          <div className="services-button">
            <a href="/services">
              <button aria-label="View our full range of services">
                View Services
              </button>
            </a>
          </div>
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
    </motion.section>
  )
}

export default Footer
