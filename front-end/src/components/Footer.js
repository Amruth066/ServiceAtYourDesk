import React from 'react';

const Footer = () => (
  <footer>
    <div className="foot-panel1">Back to Top</div>
    <div className="foot-panel2">
      {[...Array(4)].map((_, index) => (
        <ul key={index}>
          <p>Get to Know Us</p>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <a href="#">About Amazon</a>
          <a href="#">Investor Relations</a>
          <a href="#">Amazon Devices</a>
          <a href="#">Amazon Science</a>
        </ul>
      ))}
    </div>
    <div className="foot-panel3">
      <div className="logo"></div>
    </div>
  </footer>
);

export default Footer;
