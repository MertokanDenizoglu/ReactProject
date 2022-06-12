import React, { Component } from 'react';
import './Nav.css';

 class Nav extends Component {
  render() {
    return (
      <div className='list1'>
        <ul>
            <li><a><i class="fa-solid fa-location-dot"></i>6036 Richmond hwy Alexandria , VA USA 22303</a></li>
            <li><a><i class="fa-solid fa-clock"></i>Mon-Sat:0.9Am-18.00Pm . Sunday Closed</a></li>
            <li><a><i class="fa-solid fa-phone"></i>+1 409 879 - 506 203</a></li>
            <li><a>
            <i class="fa-brands fa-facebook-square"></i>
            <i class="fa-brands fa-twitter-square"></i>
            <i class="fa-brands fa-google-plus-square"></i>
                
                </a></li>
        </ul>
      </div>
    )
  }
}
export default Nav;