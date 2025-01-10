import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const Main = () => {
  return (
    <div className="">
      <div className="h-[72px]">
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-306px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
