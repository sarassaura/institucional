import React from "react";
import { Outlet } from "react-router";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
