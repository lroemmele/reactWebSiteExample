import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="footerNav">
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
              </div>
            </div>
            <div className="col">
              <ul className="footer-social">
                <li><a className="facebook" href="Insert URL Here" target="_blank">Facebook</a></li>
                <li><a className="twitter" href="Insert URL Here" target="_blank">Twitter</a></li>
                <li><a className="pinterest" href="Insert URL Here" target="_blank">Pinterest</a></li>
                <li><a className="instagram" href="Insert URL Here" target="_blank">Instagram</a></li>
                <li><a className="youtube" href="Insert URL Here" target="_blank">YouTube</a></li>
              </ul>
            </div>
          </div>


          <div className="row">
            <div className="container">
              <div className="footer-copyright">
                © 2017 Copyright: Luke Roemmele
              </div>
            </div>
          </div>
        </div>


      </footer>
    );
  }
}

export default Footer;
