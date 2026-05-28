import React from "react";
import { Outlet } from "react-router-dom";
import MainNaviagation from "../components/MainNaviagation";
const RootLayout = () => {
  return (
    <>
      <MainNaviagation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
