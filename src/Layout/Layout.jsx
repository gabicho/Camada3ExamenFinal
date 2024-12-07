import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import ThemeProvider from "../Components/ThemeProvider";
// import Navbar  from "../Components/Navbar";

const Layout = () => {
  return (
    <div>
      
      <Navbar/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
