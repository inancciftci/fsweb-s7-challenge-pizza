import React from "react";
import Header from "./Header";
import PageBody from "./PageBody";
import Footer from "./Footer";

export default function Main() {
  return (
    <div className="layout">
      <Header />
      <PageBody />
      <Footer />
    </div>
  );
}
