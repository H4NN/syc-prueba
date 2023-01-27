import React from "react";
import BarraNavegacion from "./BarraNavegacion";
import { ToastContainer } from "react-toastify";

function Layout({ children }) {
  return (
    <>
      <BarraNavegacion></BarraNavegacion>
      <ToastContainer />
      <div className="h-screen">
        <div className="container mx-auto h-full">{children}</div>
      </div>
    </>
  );
}

export default Layout;
