import React from "react";
import Categories from "../components/Categories";
import Boost from "../components/Boost";
import Topmenus from "../components/Topmenus";
import Banner from "../components/Banner";
import "./HomePage.css";

export default function Homepage() {
  return (
    <div>
      <Banner />
      <Categories />
      <Boost />
      <Topmenus />
    </div>
  );
}
