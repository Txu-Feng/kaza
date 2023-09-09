import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.scss'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
