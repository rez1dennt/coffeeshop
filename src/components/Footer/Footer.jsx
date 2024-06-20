import './Footer.css'
import FooterLogo from '../../assets/FooterLogo/FooterLogo.svg'
import AboutLogo from "../../assets/AboutLogo/AboutLogo.svg";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
<div className="Footer">
    <div className="Footer__content">
        <ul className="Footer__items">
            <img src={FooterLogo} />
            <NavLink to="/" className="Footer__li">
              Coffee house
            </NavLink>

            <NavLink to="/OurCoffee"  className="Footer__li">
            Our coffee
            </NavLink>

            <NavLink to="/Pleasure"  className="Footer__li">
            For your pleasure
            </NavLink>
        </ul>
        <img src={AboutLogo} />
    </div>
</div>

    )
}

export default Footer
