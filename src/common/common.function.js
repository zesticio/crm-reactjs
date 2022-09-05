import React from "react"

function SplitPathName({path}){
      return <h3>{capitalizeFirstLetter(path.replace('/', ""))}</h3>
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

export {
    SplitPathName,
    capitalizeFirstLetter
}