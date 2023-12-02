import React from "react";
import "./Categories.css";
import icon1 from "../assets/category-icons/1.svg";
import icon2 from "../assets/category-icons/2.svg";
import icon3 from "../assets/category-icons/3.svg";
import icon4 from "../assets/category-icons/4.svg";
import icon5 from "../assets/category-icons/5.svg";
import icon6 from "../assets/category-icons/6.svg";

export default function Categories() {
  return (
    <section className="category" id="category">
      <div className="container-xl">
        <div className="categories">
          <div className="category-box">
            <img src={icon1} alt="" className="category-img" />
            <p className="category-text">YENİ! Kore</p>
          </div>
          <div className="category-box">
            <img src={icon2} alt="" className="category-img" />
            <p className="category-text">Pizza</p>
          </div>
          <div className="category-box">
            <img src={icon3} alt="" className="category-img" />
            <p className="category-text">Burger</p>
          </div>
          <div className="category-box">
            <img src={icon4} alt="" className="category-img" />
            <p className="category-text">Kızartmalar</p>
          </div>
          <div className="category-box">
            <img src={icon5} alt="" className="category-img" />
            <p className="category-text">Fast Food</p>
          </div>
          <div className="category-box">
            <img src={icon6} alt="" className="category-img" />
            <p className="category-text">Gazlı İçecek</p>
          </div>
        </div>
      </div>
    </section>
  );
}
