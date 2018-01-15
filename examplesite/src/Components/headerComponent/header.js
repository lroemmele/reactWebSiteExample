import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <header>
        <div className="banner">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Products">Products</Link>
              </li>
              <li>
                <Link to="/Aboutpage">About Us</Link>
              </li>
              <li>
                <Link to="/Contact">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>

      </header>
    );
  }
}

export default Header;
