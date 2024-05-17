import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useLocation } from 'react-router-dom';

function Nav() {
  // State to track whether the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState); // Toggle the state
  };

  // Get the current location
  const location = useLocation();

  // Define the className based on the route
  // Define the CSS class for the navigation bar image based on the route
  let navBarClass = 'nav-bar';
  if (location.pathname === '/about' || location.pathname === '/services' || location.pathname === '/work' || location.pathname === '/contact') {
    navBarClass += ' special-nav-bar';
  }


  return (
    <section className={navBarClass}>
      <img onClick={() => window.location.href = '/'} className="nav-image" src="/nav.png" alt="Navigation logo" />
      <ul className={`menu ${isMenuOpen ? 'showMenu' : ''}`}>
        <li><a className="menuItem" href="/about">About us</a></li>
        <li><a className="menuItem" href="/services">Our Services</a></li>
        <li><a className="menuItem" href="/work">Our work</a></li>
        <li><a className="menuItem" href="/contact">Contact us</a></li>
      </ul>
      <button className="hamburger" onClick={toggleMenu}>
        <div>
          {isMenuOpen ? <CloseIcon style={{ fontSize: '45px' }} /> : <MenuIcon style={{ fontSize: '45px' }} />}
        </div>
      </button>
    </section>
  );
}

export default Nav;




