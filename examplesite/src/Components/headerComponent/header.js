import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {

 collapseNavMenu () {

     if(window.innerWidth <= 576){
      document.getElementById('navbarSupportedContent').collapse('hide');
    }
  }
  render() {

    return (

       <div className="container-fluid">
        <div className="bg">
          <div className="jumbotron">

          {/*collapse navbar at 576px for mobile view*/}
          <nav className="navbar navbar-expand-sm navbar-light">

            {/*brand logo image*/}
            <Link className="navbar-brand" to="/"><img src="https://logopond.com/logos/4a614224e9d4a4fb2c629fd3d18208a9.png" width="150px"  /></Link>

            {/*toggle mobile button on below 576px*/}
            <button className="navbar-toggler" type="button"
              data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">

              <span className="navbar-toggler-icon"></span>
            </button>

              {/*nav links*/}
              <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav ">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/" onClick={this.collapseNavMenu} >Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Products" onClick={this.collapseNavMenu}>Products</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Aboutpage" onClick={this.collapseNavMenu} >About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Contact" onClick={this.collapseNavMenu} >Contact Us</Link>
                  </li>
                </ul>
              </div>

            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
