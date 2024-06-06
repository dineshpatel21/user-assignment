import React from "react";
import Navbar from "../navbar/Navbar";
import Leftbar from "../leftbar/Leftbar";
import Topbar from "../topbar/Topbar";
import "./layout.css";

function Layout({ children }) {
  return (
    <div className="container">
      <div className="topbar">
        <Topbar />
      </div>

      <div className="navbar">
        <Navbar />
      </div>

      <div className="homebar" style={{backgroundColor:'#ffffff'}}>{children}</div>

      <div className="leftbar" style={{backgroundColor:'#ffffff'}}>
        <Leftbar />
      </div>
    </div>
  );
}

export default Layout;
