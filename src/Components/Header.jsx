import { useRef } from "react";
import logo from "../assets/Header/logo.png";

const Header = () => {
  const burger = useRef();
  const navLinks = useRef();
  const animateNav = () => {
    burger.current.classList.toggle("active");
    navLinks.current.classList.toggle("active");
    document.body.classList.toggle("active");
  };
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
        <div className="brand">ISTAIX</div>
      </div>
      <div ref={navLinks} className="nav-link">
        <li>Home</li>
        <li>Products</li>
        <li>Jobs</li>
        <li>Pricing</li>
        <li>About</li>
      </div>
      <div className="btn">
        <button>Get started</button>
      </div>
      <div ref={burger} onClick={animateNav} className="burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Header;
