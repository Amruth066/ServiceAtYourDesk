import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <div className="footer-logo">logo</div>
            <p className="footer-text">
              Professional services at your fingertips
            </p>
          </div>
          <div className="footer-column">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Professionals</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="serviceProviderSignIn">Login/Signup as Service Provider</a></li>
            </ul>
          </div>
          {/* Additional footer columns can be added here */}
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 ServiceAtYour Desk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
