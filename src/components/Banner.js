import React from "react";
import "./Banner.css";
import logo from "./../assets/logo.svg";
import scrollDown from "../assets/arrow.gif";

export default function Banner() {
  return (
    <div className="banner">
      <img className="logo" src={logo} alt="" />
      <div className="cta-box">
        <div className="cta-text">
          <span className="firsat-text">fırsatı kaçırma</span>
          <p className="cta-main-text">Kod acıktırır</p>
          <p className="cta-main-text">Pizza, doyurur</p>
        </div>
        <div className="cta-btn-box">
          <button className="cta-btn">Acıktım</button>
        </div>
        <a href="#category">
          <img src={scrollDown} alt="" className="scroll-down" />
        </a>
      </div>
    </div>
  );
}
