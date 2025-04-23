import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navigation.css";
import { UserContext } from "../../context/UserContext";
function Navigation() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/auth");
  };
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">ServiceAtDesk</div>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/bookings" className="nav-link">Bookings</Link>
          <Link to="/messages" className="nav-link messenger-icon" aria-label="Messages">Messages</Link>

          {user ? (
            <div className="nav-link user-info">
              <span>
                Hi, <span className="username-highlight">{user.name}</span>
              </span>
              {/* <button className="button-secondary" onClick={handleLogout}>Logout</button> */}
              <Link className="nav-link" onClick={handleLogout}>Logout</Link>
            </div>
          ) : (
            <Link to="/auth" className="nav-link">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
