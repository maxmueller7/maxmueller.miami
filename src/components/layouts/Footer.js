import React from 'react'
import styled from 'styled-components';

const FootercContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }
  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  ul li a {
    color: var(--mainGray);
  }

  ul li a:hover {
    color: var(--mainLightGray);
    text-decoration: none;
  }
`;

function Footer() {
  return (
    <FootercContainer className="main-footer">
      <div className="footer-middle"> <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-3 col-sm-6">
            <h4>Lorem</h4>
            <ul className="list-unstyled">
              <li><a href="/">Lorem</a></li>
              <li><a href="/">Lorem</a></li>
              <li><a href="/">Lorem</a></li>
              <li><a href="/">Lorem</a></li>
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
    </FootercContainer>
  )
}
export default Footer;
