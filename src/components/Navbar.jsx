import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo-text">AR Rohilla Graphics</h2>

      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><a href="#services">SERVICES</a></li>
        <li><Link to="/location">LOCATION</Link></li>
        <li><Link to="/contact">CONTACT US</Link></li>
      </ul>
    </nav>
  );
}