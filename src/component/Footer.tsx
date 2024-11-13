import React from 'react';
import './css/ContentRead.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import images
import amazonLogo from '../assets/amazon.png';
import gpayLogo from '../assets/Gpay.png';
import downloadLogo from '../assets/card.png';
import paytmLogo from '../assets/paytm.png';
import visaLogo from '../assets/visa.png';

type Props = {};

const Footershop = (props: Props) => {
  return (
    <>
      <div className="footer">
        <Container>
          <hr />
          <div className="footermain">
          <div className="card-section">
            <div className="payment">
              <p>Payment Partners</p>
            </div>
            <div className="payment-img">
              
              <img src={amazonLogo} alt="Amazon Logo" />
              <img src={gpayLogo} alt="Gpay Logo" />
              <img src={downloadLogo} alt="Download Logo" />
              <img src={paytmLogo} alt="Paytm Logo" />
              <img src={visaLogo} alt="Visa Logo" />
            </div>
          </div>
          <div className="app-section">
            <div className="cartfooter">
              <p>Get deliveries with FreshCart</p>
            </div>
            <div className="app">
              
            </div>
          </div>
          </div>
          <hr />
          <div className="copyright-main">
            <div className="copyright">
              <p> 2023 - 2024 FreashCart eCommerce. All rights reserved. Powered by <span className='dev'>UI Developer</span> </p>
            </div>
            <div className="socialmedia">
              <p>Follow us on</p>
              
            </div>

          </div>
        </Container>
      </div>
    </>
  );
};

export default Footershop;
