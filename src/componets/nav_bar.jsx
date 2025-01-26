import  React from 'react';
import '../styles/nav_bar.css';

function NavBar() {
    return (
      <nav>
        <div className="logo"> <div className="logo-circle">T</div> <p>Trafalgar</p></div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#">Find a doctor</a></li>
          <li><a href="#">Apps</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">About us</a></li>
        </ul>

      
      </nav>
    )
}


export default NavBar;