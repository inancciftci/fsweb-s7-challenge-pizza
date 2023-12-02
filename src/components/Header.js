import React from "react";
import "./Header.css";

export default function Header({ logo }) {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}
