import React from "react";
import "./addbtn.css"

export function AddButton({handleOnClick}){
    return(
        <button
        className="action-add-button btn-primary"
        onClick={handleOnClick}
      >
        +
      </button>
    )
}