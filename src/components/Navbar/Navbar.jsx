import headerLogo from "../../assets/Navbar/coffee-header.svg";

import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__nav">
          <ul className="header__nav-items">
            <img src={headerLogo} />
            <NavLink to="/" className="header__li">
              Coffee house
            </NavLink>

            <NavLink to="/OurCoffee" className="header__li">
              Our coffee
            </NavLink>

            <NavLink to="/Pleasure" className="header__li">
              For your pleasure
            </NavLink>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
