import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <h4>About Us</h4>
            <p>Cook Hub is your go-to destination for delicious recipes, cooking inspiration, and culinary tips. Whether you're a seasoned chef or a kitchen novice, we've got something for everyone. Explore our diverse collection of recipes and elevate your culinary experience with Cook Hub.</p>
          </div>

          <div className="col-lg-6 col-md-12">
            <h4>Contact Us</h4>
            <p><FontAwesomeIcon icon={faMapMarker} /> #### Main Street, City, Country</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> info@example.com</p>
            <p><FontAwesomeIcon icon={faPhone} /> +1 (111) 111-1111</p>
            <div className="social-icons">
              <a href="#" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="#" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>&copy; 2023 Your Company. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
