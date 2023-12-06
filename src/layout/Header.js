import React from "react";
import "./Header.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </div>
  );
}
