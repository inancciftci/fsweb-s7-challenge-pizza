import React from "react";
import "./Boost.css";
import imgLeft from "../assets/cards/kart-1.png";
import imgRightTop from "../assets/cards/kart-2.png";
import imgRightBottom from "../assets/cards/kart-3.png";

export default function Boost() {
  return (
    <section className="boost-section">
      <div className="container-xl">
        <div className="boost">
          <div className="left-box">
            <img className="card-img" src={imgLeft} alt="" />
            <div className="card-text">
              <h2 className="card-title">Özel Lezzetus</h2>
              <p className="card-desc">Position: Absolute Acı Burger</p>
              <button className="card-btn">Sipariş Ver</button>
            </div>
          </div>
          <div className="right-box">
            <div className="right-top">
              <img src={imgRightTop} alt="" className="card-img" />
              <div className="card-text">
                <h2 className="card-title-2">Hackathlon Burger Menü</h2>
                <button className="card-btn">Sipariş Ver</button>
              </div>
            </div>
            <div className="right-under">
              <img src={imgRightBottom} alt="" className="card-img" />
              <div className="card-text">
                <h2 className="card-title-2">
                  <span className="red-span">Çoooook</span>{" "}
                  <span className="dark-span">hızlı npm gibi kurye </span>
                </h2>
                <button className="card-btn">Sipariş Ver</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
