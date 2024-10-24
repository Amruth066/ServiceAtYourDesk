import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer>
      <div className="foot-panel1" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
        Back to Top
      </div>
      <div className="foot-panel2">
      {[...Array(4)].map((_, index) => (
        <ul>
          <p>Get to Know Us</p>
          <li><a href="#">Careers at Work At Your Will</a></li>
          <li><a href="#">Our Blog</a></li>
          <li><a href="#">About Work At Your Will</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Our Services</a></li>
          <li><a href="#">Work At Your Will Community</a></li>
        </ul>
      ))}
      </div>
      <div className="foot-panel3">
        <div className="logo">
          <img src="your-logo-url.png" alt="Work At Your Will Logo" style={{ height: '50px' }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
