import React from "react";
import "./Footer.css";
import logo from "../assets/logo-footer.svg";
import icon1 from "../assets/footer-icons/icon-1.png";
import icon2 from "../assets/footer-icons/icon-2.png";
import icon3 from "../assets/footer-icons/icon-3.png";
import insta1 from "../assets/insta/li-0.png";
import insta2 from "../assets/insta/li-1.png";
import insta3 from "../assets/insta/li-2.png";
import insta4 from "../assets/insta/li-3.png";
import insta5 from "../assets/insta/li-4.png";
import insta6 from "../assets/insta/li-5.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-xl">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-left-first">
              <img className="footer-logo" src={logo} alt="footer logo" />
              <ul>
                <li className="company-info">
                  <img src={icon1} alt="" className="company-info-icon" />
                  <p className="company-info-text">
                    341 Londonderry Road, Istanbul Türkiye
                  </p>
                </li>
                <li className="company-info">
                  <img src={icon2} alt="" className="company-info-icon" />
                  <p className="company-info-text">
                    aciktim@teknolojikyemekler.com
                  </p>
                </li>
                <li className="company-info">
                  <img src={icon3} alt="" className="company-info-icon" />
                  <p className="company-info-text">+90 216 123 45 67</p>
                </li>
              </ul>
            </div>
            <div className="footer-left-second">
              <h3 className="footer-title">Hot Menu</h3>
              <ul>
                <li className="hotMenu-list">Terminal Pizza</li>
                <li className="hotMenu-list">5 Kişilik Hackathlon Pizza</li>
                <li className="hotMenu-list">useEffect Tavuklu Pizza</li>
                <li className="hotMenu-list">Beyaz Console Frosty</li>
                <li className="hotMenu-list">Testler Geçti Mutlu Burger</li>
                <li className="hotMenu-list">Position Absolute Acı Burger</li>
              </ul>
            </div>
          </div>
          <div className="footer-right">
            <h3 className="footer-title">Instagram</h3>
            <div className="footer-instagram">
              <img className="insta-img" src={insta1} alt="" />
              <img className="insta-img" src={insta2} alt="" />
              <img className="insta-img" src={insta3} alt="" />
              <img className="insta-img" src={insta4} alt="" />
              <img className="insta-img" src={insta5} alt="" />
              <img className="insta-img" src={insta6} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="container-xl">
        <div className="footer-copyright">
          <p className="copyright">© 2023 Teknolojik Yemekler.</p>
          <i class="fa-brands fa-twitter"></i>
        </div>
      </div>
    </footer>
  );
}
