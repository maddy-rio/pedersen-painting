
import { FaFacebook, FaInstagram } from 'react-icons/fa';
function footer() {
 return (
    <section id="section-footer">
      <div class="grid-container">
        <div class="grid-item">
         <p class="footer-heading">Services</p>
         <ul>
         <li><a href="/services">Residential</a></li>
         <li><a href="/services">Commerical</a></li>
         <li><a href="/services">Wallpapering</a></li>
         <li><a href="/services">Waterblasting</a></li>
         </ul>
      </div>
      <div class="grid-item">
         <p class="footer-heading">Quick Links</p>
         <ul>
         <li><a href="/about">About us</a></li>
         <li><a href="/services">Services</a></li>
         <li><a href="/work">Our work</a></li>
         <li><a href="/contact">Contact</a></li>
         </ul>
      </div>
      <div class="grid-item">
         <p class="footer-contact">Contact us</p>
         <p class="footer-number">027 207 1306</p>
         <a class="footer-email" href="mailto:jayden@pedersenpainting.co.nz">jayden@pedersenpainting.co.nz</a>
         <p class="footer-social">Connect on &nbsp; <a href='/'><FaFacebook /></a> <a href='/'><FaInstagram /></a></p>
      </div>
      </div>
       <div class="footer-overlay"></div>
        <div class="footer-text">© 2023 Pedersen Painting & Decorating LTD  &nbsp; &nbsp;|  &nbsp; &nbsp;  All rights reserved</div>
    </section>
 )
}

export default footer;