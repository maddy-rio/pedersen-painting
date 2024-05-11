
import { FaFacebook, FaInstagram } from 'react-icons/fa';
function footer() {
 return (
    <section id="section-footer">
      <div class="grid-container">
        <div class="grid-item">
         <p class="footer-heading">Services</p>
         <ul>
         <li><a href="/services">Residential painting</a></li>
         <li><a href="/services">Commerical painting</a></li>
         <li><a href="/services">Exterior painting</a></li>
         <li><a href="/services">Roof painting</a></li>
         <li><a href="/services">Wallpapering</a></li>
         <li><a href="/services">Water-blasting</a></li>
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
         <a href="mailto:jayden@pedersenpainting.co.nz" class="footer-email">jayden@pedersenpainting.co.nz</a>
         <p class="footer-social">Connect on &nbsp; <a href='/'><FaFacebook /></a> <a href='/'><FaInstagram /></a></p>
      </div>
      </div>
       <div class="footer-overlay"></div>
        <div class="footer-text">© 2024 Pedersen Painting & Decorating  &nbsp; &nbsp;|  &nbsp; &nbsp;  Website by Maddy</div>
    </section>
 )
}

export default footer;