import React from "react";
// import "./layout.css";
import Header from "../header/index";
import Sidebar from "../sidebar";
import "./layout.scss"
import useWindowDimensions from "../../hooks/useDimension"

export default function Layout({ children }) {
  const { height, width } = useWindowDimensions();
  console.log("width",width);
  return (
    <React.Fragment>
      <div className="layoutContainer">
        <div className="header">
          <Header />
        </div>
        <div className="sidebarContainer">
          <div className="sidebar">
            {
              width > 991 && <Sidebar />
            }
            
          </div>
          <div className="mainContent">
           {children}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
