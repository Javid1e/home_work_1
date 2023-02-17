import React from "react";
import { Outlet } from "react-router-dom";

const Default = () => {
  return (
    <div>
      Default
      <Outlet />
    </div>
  );
};
export default Default;