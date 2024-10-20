import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";
import imgNav from "../Img/nav-icon/img.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div>
            <img src={imgNav} alt="" />
          </div>
          <div className="footer-icons">
            <FaFacebookF className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
        <div className="footer-links">
          <div>
            <ul className="link-list">
              <li>About Us</li>
              <li>Our Pricing</li>
              <li>Our Gallery</li>
              <li>Appointment</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <ul className="link-list">
              <li>Orthology</li>
              <li>Neurology</li>
              <li>Dental Care</li>
              <li>Ophthalmology</li>
              <li>Cardiology</li>
            </ul>
          </div>
          <div>
            <ul className="link-list">
              <li>About Us</li>
              <li>Our Pricing</li>
              <li>Our Gallery</li>
              <li>Appointment</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
