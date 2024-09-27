import React from "react";
import Header from "./Header"; // Import Header component
import Footer from "./Footer"; // Import Footer component

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children} {/* This is where the content of each page will go */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
