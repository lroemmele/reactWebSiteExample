import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <header>
       <div className="container-fluid">

        {/*collapse navbar at 576px for mobile view*/}
        <nav className="navbar navbar-expand-sm navbar-light ">

          {/*brand logo image*/}
          <Link className="navbar-brand" to="/"><img src="https://cdn.pixabay.com/photo/2017/09/23/21/24/label-2780155__480.png" width="100px"/></Link>

          {/*toggle mobile button on below 576px*/}
          <button className="navbar-toggler" type="button"
            data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">

            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav ">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Aboutpage">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact Us</Link>
              </li>
            </ul>


          </div>
          </nav>

        </div>
      </header>
    );
  }
}

export default Header;
