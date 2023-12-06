import React from "react";
import scrollDown from "../assets/arrow.gif";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Banner.css";

export default function Banner() {
  let history = useHistory();
  const clickHandler = () => {
    history.push("/pizza");
    window.scrollTo(0, 0);
  };
  return (
    <div className="banner">
      <div className="cta-box">
        <div className="cta-text">
          <span className="firsat-text">fırsatı kaçırma</span>
          <p className="cta-main-text">Kod acıktırır</p>
          <p className="cta-main-text">Pizza, doyurur</p>
        </div>
        <div className="cta-btn-box">
          <button onClick={clickHandler} className="cta-btn">
            Acıktım
          </button>
        </div>
        <a href="#category">
          <img src={scrollDown} alt="" className="scroll-down" />
        </a>
      </div>
    </div>
  );
}
