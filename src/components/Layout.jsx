import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <header className="shadow-sm border-b-2 Z-10">
        <Header />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
