import React, { Component } from 'react';
import './navbar.css'
 class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
            <ul>
                
                <li><a><i class="fa-solid fa-magnifying-glass"></i></a></li>
                <li><a>Contacts</a></li>
                <li><a>Pages</a></li>
                <li><a>Blog</a></li>
                <li><a>Services</a></li>
                <li><a>About Us</a></li>
                <li><a>Home</a></li>
                <li><a>LOGO GELECEK</a></li>
            </ul>
        </nav>
      </div>
    )
  }
}
export default Navbar;
