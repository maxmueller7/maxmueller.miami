import React from 'react'
import Navbar from './Navbar'

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-3 col-sm-6">
            <h4>Lorem</h4>
            <ul className="list-unstyled">
              <li>Lorem1</li>
              <li>Lorem2</li>
              <li>Lorem3</li>
              <li>Lorem4</li>
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} Max Mueller - All rights reserved
          </p>
        </div>
      </div>
    </div>
  )
}
export default Footer;
