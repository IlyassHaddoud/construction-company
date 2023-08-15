import apple from "../assets/Footer/apple.png";
import ps from "../assets/Footer/playStore.png";
import logo from "../assets/Header/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <div className="brand">
          <img src={logo} />
          <p>ISTAIX</p>
        </div>
        <div className="links">
          <p>Downaload Now</p>
          <p>License</p>
        </div>
        <div className="copyright">
          © 2023 HADDOUD ILYASS. All rights reserved
        </div>
      </div>
      <div className="right">
        <h3>Get the app</h3>
        <img src={apple} />
        <img src={ps} />
      </div>
    </div>
  );
};

export default Footer;
