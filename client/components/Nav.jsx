import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// Nav bar
function Nav() {
  return (
   
    <section id="nav-bar">
      <img href="/"class="nav-image" src="../../public/nav.png"/>
      <ul class="menu">
      <li><a class="menuItem" href="#">About us</a></li>
       <li><a class="menuItem" href="#">Our work</a></li>
      <li><a class="menuItem" href="#">Services</a></li>
      <li><a class="menuItem" href="#">Testimonials</a></li>
      <li><a class="menuItem" href="#">Contact</a></li>
     </ul>
     <button class="hamburger">
     <div>
      <MenuIcon style={{ fontSize: '45px'}}/>
      <CloseIcon style={{ display: 'none'}} />
    </div>
    </button> 
    </section>
  )
}

export default Nav



