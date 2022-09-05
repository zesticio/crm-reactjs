import React from "react";
import "./index.css";
import FilterIcon from "../../images/Filter.svg";
import { AiOutlineSearch } from "react-icons/ai";

export function Search({ placeholder,value,onChange,onBlur }) {
  return (
    <div class="input-group search-bar">
      <div class="input-group-prepend hover-cursor">
        <span class="input-group-text" id="search">
          <AiOutlineSearch />
        </span>
      </div>
      <input
        type="text"
        class="form-control"
        placeholder={placeholder}
        aria-label="search"
        aria-describedby="search"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <span class="input-group-text" id="filter">
        <img src={FilterIcon} />
      </span>
    </div>
  );
}
