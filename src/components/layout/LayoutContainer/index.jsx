import React from "react";
import { Navbar } from "..";
import { Outlet } from "react-router-dom";

const LayoutContainer = () => {
  return (
    <main className="px-12">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default LayoutContainer;
