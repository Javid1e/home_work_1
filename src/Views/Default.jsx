import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Layouts/Header";
const Default = () => {
  return (
    <div>
      <Header />
      Default
      <Outlet />
    </div>
  );
};
export default Default;
