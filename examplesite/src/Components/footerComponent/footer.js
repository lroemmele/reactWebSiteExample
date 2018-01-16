import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="footerHeader">
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="footerNav">
                <ul>
                  <li><h5><u>Links</u></h5></li>
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
                <li><h5><u>Follow Us</u></h5></li>
                <li><a className="facebook" href="Insert URL Here" target="_blank">Facebook</a></li>
                <li><a className="twitter" href="Insert URL Here" target="_blank">Twitter</a></li>
                <li><a className="pinterest" href="Insert URL Here" target="_blank">Pinterest</a></li>
                <li><a className="instagram" href="Insert URL Here" target="_blank">Instagram</a></li>
                <li><a className="youtube" href="Insert URL Here" target="_blank">YouTube</a></li>
              </ul>
            </div>

            <div className="col">
              <ul className="contactFooterList">
                <li><h5><u>Contact</u></h5></li>
                <li>1-800-555-5555</li>
                <li>support@nomail.com</li>
                <li>123 Main St<br/>New York, NY 12345</li>
              </ul>
            </div>

          </div>


          <div className="row">
            <div className="container">
              <div className="footer-copyright">
                <p>© 2017 Copyright: Luke Roemmele</p>
              </div>
            </div>
          </div>
        </div>


      </footer>
    );
  }
}

export default Footer;
