import React from "react";
import "./Topmenus.css";

//icons
import icon1 from "../assets/category-icons/1.svg";
import icon2 from "../assets/category-icons/2.svg";
import icon3 from "../assets/category-icons/3.svg";
import icon4 from "../assets/category-icons/4.svg";
import icon5 from "../assets/category-icons/5.svg";
import icon6 from "../assets/category-icons/6.svg";

//food imgs
import food1 from "../assets/foods/food-1.png";
import food2 from "../assets/foods/food-2.png";
import food3 from "../assets/foods/food-3.png";

export default function Topmenus() {
  return (
    <section className="top-menus">
      <div className="container-xl">
        <div className="text-box">
          <p className="text-ad">En çok paketlenen menüler</p>
          <h2 className="title-ad">Acıktıran Kodlara Doyuran Lezzetler</h2>
        </div>
        <div className="menu-box">
          <div className="menu-title-box">
            <div className="category-item">
              <img src={icon1} alt="category icon" />
              <span className="category-title">Ramen</span>
            </div>
            <div className="category-item active">
              <img src={icon2} alt="category icon" />
              <span className="category-title">Pizza</span>
            </div>
            <div className="category-item">
              <img src={icon3} alt="category icon" />
              <span className="category-title">Burger</span>
            </div>
            <div className="category-item">
              <img src={icon4} alt="category icon" />
              <span className="category-title">French Fries</span>
            </div>
            <div className="category-item">
              <img src={icon5} alt="category icon" />
              <span className="category-title">Fast Food</span>
            </div>
            <div className="category-item">
              <img src={icon6} alt="category icon" />
              <span className="category-title">Soft Drinks</span>
            </div>
          </div>
          <div className="category-foods">
            <div className="food-card">
              <img src={food1} alt="food" />
              <h3 className="food-title">Terminal Pizza</h3>
              <div className="food-info">
                <p className="food-info-text">4.9</p>
                <p className="food-info-text">(200)</p>
                <p className="food-info-price">60₺</p>
              </div>
            </div>
            <div className="food-card">
              <img src={food2} alt="food" />
              <h3 className="food-title">Position Absolute Acı Pizza</h3>
              <div className="food-info">
                <p className="food-info-text">4.9</p>
                <p className="food-info-text">(928)</p>
                <p className="food-info-price">85₺</p>
              </div>
            </div>
            <div className="food-card">
              <img src={food3} alt="food" />
              <h3 className="food-title">useEffect Tavuklu Burger</h3>
              <div className="food-info">
                <p className="food-info-text">4.9</p>
                <p className="food-info-text">(462)</p>
                <p className="food-info-price">75₺</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
