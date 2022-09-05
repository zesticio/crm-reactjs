import React from "react";
import "./index.css";
export default function PopupMenu({children}) {
  return (
    <div className="popup-menu">
      {children}
    </div>
  );
}
