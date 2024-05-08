import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Nav() {
  // State to track whether the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState); // Toggle the state
  };

  return (
    <section id="nav-bar">
      <img className="nav-image" src="../../public/nav.png" alt="Navigation logo" />
      <ul className={`menu ${isMenuOpen ? 'showMenu' : ''}`}>
        <li><a className="menuItem" href="/about">About us</a></li>
        <li><a className="menuItem" href="/services">Services</a></li>
        <li><a className="menuItem" href="/work">Our work</a></li>
        <li><a className="menuItem" href="/customers">Our customers</a></li>
        <li><a className="menuItem" href="/contact">Contact</a></li>
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




