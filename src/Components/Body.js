import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="">
      <Header />
      <Outlet />
    </div>
  );
};

export default Body;
