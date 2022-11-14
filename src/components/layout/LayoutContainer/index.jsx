import React from "react";
import { Navbar } from "..";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const LayoutContainer = () => {
  return (
    <main>
      <Navbar />
      <section className="px-12">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};

export default LayoutContainer;
