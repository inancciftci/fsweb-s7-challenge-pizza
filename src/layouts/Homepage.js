import React from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Boost from "../components/Boost";
import Topmenus from "../components/Topmenus";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <div>
      <Banner />
      <Categories />
      <Boost />
      <Topmenus />
      <Footer />
    </div>
  );
}
