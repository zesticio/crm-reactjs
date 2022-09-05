import React from "react";
import "./sidebar.scss";
import GridIcon from "../../images/Grid.svg";
import UserIcon from "../../images/User.svg";
import MailIcon from "../../images/Mail.svg";
import CartIcon from "../../images/Cart.svg";
import TaskIcon from "../../images/Tasks.svg";
import SettingIcon from "../../images/Settings.svg";
import * as common from "../../common/common.import";
import {
  AiOutlineInfoCircle,
  AiOutlineSetting,
  AiOutlinePoweroff,
} from "react-icons/ai";
import { Dropdown, Menu, Space } from "antd";

export default function Sidebar() {
  const navigate = common.useNavigate();

  const menu = (
    <Menu
      className="sidebarPopupMenu"
      items={[
        {
          key: "5",
          label: (
            <div className="d-flex align-items-center justify-content-center p-2">
              <p style={{color:"black"}}>CONTACTS AND ACCOUNTS</p>
            </div>
          )
        },
        {
          key: "0",
          label: (
            <div className="d-flex align-items-center justify-content-center p-2" onClick={() => navigate("/contacts")}>
              <h6 style={{color:"black"}}>contacts</h6>
            </div>
          )
        },
        {
          key: "1",
          label: (
            <div className="d-flex align-items-center justify-content-center p-2" onClick={() => navigate("/organization")}>
              <h6 style={{color:"black"}}>organization</h6>
            </div>
          ),
        },
        {
          key: "2",
          label: (
            <div className="d-flex align-items-center justify-content-center p-2" onClick={() => navigate("/customers")}>
            <h6 style={{color:"black"}}> customers</h6>
          </div>
          ),
        },
        {
          key: "3",
          label: (
            <div className="d-flex align-items-center justify-content-center p-2" onClick={() => navigate("/vendor")}>
            < h6 style={{color:"black"}}>vendor</h6>
          </div>
          )
        },
        {
          key: "4",
          label: (
            <div className="d-flex align-items-center justify-content-center p-2" onClick={() => navigate("/employee")}>
            <h6 style={{color:"black"}}>employee</h6>
          </div>
          )
        },
      ]}
    />
  );


  const mailMenu = (
    <Menu
      className="sidebarPopupMenu"
      items={[
        {
          key: "5",
          label: (
            <div className="d-flex align-items-center justify-content-center p-2">
              <p style={{color:"black"}}>CONVERSATIONS</p>
            </div>
          )
        },
        {
          key: "0",
          label: (
            <div className="d-flex align-items-center justify-content-center p-2" onClick={() => navigate("/contacts")}>
              <h6 style={{color:"black"}}> Email Templates</h6>
            </div>
          )
        },
        {
          key: "1",
          label: (
            <div className="d-flex align-items-center justify-content-center p-2" onClick={() => navigate("/organization")}>
              <h6 style={{color:"black"}}>Bulk Email</h6>
            </div>
          ),
        },
        {
          key: "2",
          label: (
            <div className="d-flex align-items-center justify-content-center p-2" onClick={() => navigate("/customers")}>
            <h6 style={{color:"black"}}> SMS (Short Message)</h6>
          </div>
          ),
        },
      ]}
    />
  );


  const settingMenu = (
    <Menu
      className="sidebarPopupMenu"
      items={[
        {
          key: "5",
          label: (
            <div className="d-flex align-items-center justify-content-center p-2">
              <p style={{color:"black"}}>SETTINGS</p>
            </div>
          )
        },
        {
          key: "0",
          label: (
            <div className="d-flex align-items-center justify-content-center p-2" onClick={() => navigate("/countries")}>
              <h6 style={{color:"black"}}>Countries</h6>
            </div>
          )
        },
        {
          key: "1",
          label: (
            <div className="d-flex align-items-center justify-content-center p-2" onClick={() => navigate("/state")}>
              <h6 style={{color:"black"}}>State</h6>
            </div>
          ),
        },
        {
          key: "2",
          label: (
            <div className="d-flex align-items-center justify-content-center p-2" onClick={() => navigate("/cities")}>
            <h6 style={{color:"black"}}>Cities</h6>
          </div>
          ),
        },
        {
          key: "3",
          label: (
            <div className="d-flex align-items-center justify-content-center p-2" onClick={() => navigate("/tiers")}>
            <h6 style={{color:"black"}}>Tiers</h6>
          </div>
          ),
        },
        {
          key: "4",
          label: (
            <div className="d-flex align-items-center justify-content-center p-2" onClick={() => navigate("/warehouses")}>
            <h6 style={{color:"black"}}>Warehouse</h6>
          </div>
          ),
        },
      ]}
    />
  );

  return (
    <div className="layoutSidebar">
      <div className="sidebarNavitems">
        <div className="navitemContainer">
          <div className="navItem">
            <img
              src={GridIcon}
              className="item"
              onClick={() => navigate("/dashboard")}
            />
          </div>
          <div className="navItem">
            <Dropdown
              overlay={menu}
              className="notificationIcon"
            >
              <img
                onClick={(e) => e.preventDefault()}
                src={UserIcon}
                className="item"
                
              />
            </Dropdown>
          </div>
          <div className="navItem">
          <Dropdown
              overlay={mailMenu}
              className="notificationIcon"
            >
              <img onClick={(e) => e.preventDefault()} src={MailIcon} className="item" />
            </Dropdown>
            
          </div>
          <div className="navItem">
            <img
              src={CartIcon}
              className="item"
              onClick={() => navigate("/order")}
            />
          </div>
          <div className="navItem">
            <img
              src={TaskIcon}
              className="item"
              onClick={() => navigate("/task")}
            />
          </div>
          <div className="navItem">
          <Dropdown
              overlay={settingMenu}
              className="notificationIcon"
            >
              <img onClick={(e) => e.preventDefault()} src={SettingIcon} className="item" />
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}
