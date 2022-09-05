import React from "react";
// import "./layout.css";
import Header from "../header/index";
import Sidebar from "../sidebar";
import "./layout.scss"

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <div className="layoutContainer">
        <div className="header">
          <Header />
        </div>
        <div className="sidebarContainer">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="mainContent">
           {children}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
