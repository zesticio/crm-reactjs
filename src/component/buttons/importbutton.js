import React from "react";
import { RiDownloadLine } from "react-icons/ri";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import "./importbtn.css"

export function ImportButton({menu}){
    return(
        <Dropdown overlay={menu} trigger={["click"]}>
                <button
                  onClick={(e) => e.preventDefault()}
                  className="action-dropdown-button"
                >
                  <RiDownloadLine className="action-download-icon" />
                  Import
                  <DownOutlined />
                </button>
              </Dropdown>
    )
}