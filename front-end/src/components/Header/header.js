import React from 'react';

const Header = () => (
  <header>
    <div className="navbar">
      {/* <div className="nav-logo">
        <div className="logo">ServiceAtYourDesk</div>
      </div> */}
      <div className='title-1'>
        <div className='title'>ServiceAtYourDesk</div>
      </div>
      <div className='title-2'>
        <div className='services'>
          <a href='services'>Services</a>
        </div>
        <div className='bookings'>
          <a href='myBookings'>My Bookings</a>
        </div>
        <div className='loginsignup'>
          <a href='Login'>Sign up / Log in</a>
        </div>
        <div className='BecomeSP'>
          <a href="becomesp">
            <button>Become Service Provider
            </button>
          </a>
        </div>
      </div>
    </div>
      {/* <div className="nav-address border">
        <p className="address-first">Deliver to</p>
        <div className="add-icon">
          <i className="fa-solid fa-location-dot"></i>
          <p className="address-second">India</p>
        </div>
      </div> */}
      {/* <div className="nav-search">
        <select className="search-select">
          <option>All</option>
        </select>
        <input className="search-input" placeholder="Search the Service" />
        <div className="search-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div> */}
      {/* <div className="nav-signin border">
        <p className="nav-first">Hello, sign in</p>
        <p className="nav-second">Account & list</p>
      </div>
      <div className="nav-returns border">
        <p className="nav-first">Returns</p>
        <p className="nav-second">& Orders</p>
      </div>
      <div className="nav-cart border">
        <i className="fa-solid fa-cart-shopping"></i>
        Cart
      </div>
    </div> */}
    {/* <div className="panel">
      <div className="panel-all">
        <i className="fa-solid fa-bars"></i>
        ALL
      </div>
      <div className="panel-options">
        <p>Today's Deal</p>
        <p>Customer Service</p>
        <p>Register</p>
        <p>Gift Cards</p>
        <p>Sell</p>
      </div>
      <div className="panel-details">Shop deals in Electronics</div>
    </div> */}
  </header>
);

export default Header;
