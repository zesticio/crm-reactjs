import React, { useContext} from "react";
// import "./header.css";
import "./header.scss";
import { useSelector, useDispatch,useState,useNavigate } from "../../common/common.import";
import { switchTheme } from "../../redux/slice/themeSlice";
import AppLogo from "../../images/logo.svg";
import { VscBellDot } from "react-icons/vsc";
import { Avatar, Image } from "antd";
import FaceAvatar from "../../images/face28.jpg";
import PopupMenu from "../popupmenu/index";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import { AiOutlineInfoCircle,AiOutlineSetting,AiOutlinePoweroff } from "react-icons/ai";
import ThemeContext from "../../context/themecontext/themecontext"
import { isLogout } from "../../redux/slice/authSlice";

export default function Header() {
  const isdark = useSelector((state) => state.theme.isDark);
  const { theme, setTheme } = useContext(ThemeContext);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  function userLogout() {
    dispatch(isLogout());
  }

  function userProfile(){
    navigate("/profile")
  }

  const menu = (
    <Menu
      className="bellPopupMenu"
      items={[
        {
          key: "0",
          label: (
            <div className="container p-3">
            <h6>Notifications</h6>
          </div>
          ),
          disabled : true
        },
        {
          key: "1",
          label: (
            <div className="logout-item p-2">
             <div class="preview-item-content">
                  <h6 class="preview-subject font-weight-normal">Application Error</h6>
                  <p class="font-weight-light small-text mb-0 text-muted">
                    Just now
                  </p>
                </div>
            </div>
          ),
          icon: <AiOutlineSetting size={20}  color="blue" className="text-primary" />,
        },
        {
          key: "2",
          label: (
            <div className="logout-item p-2">
              <div class="preview-item-content">
                  <h6 class="preview-subject font-weight-normal">Settings</h6>
                  <p class="font-weight-light small-text mb-0 text-muted">
                    Private message
                  </p>
                </div>
            </div>
          ),
          icon: <AiOutlinePoweroff size={20}  color="blue" className="text-primary" />,
        },
        {
          key: "3",
          label: (
            <div className="logout-item p-2">
              <div class="preview-item-content">
                  <h6 class="preview-subject font-weight-normal">New user registration</h6>
                  <p class="font-weight-light small-text mb-0 text-muted">
                    2 days ago
                  </p>
                </div>
            </div>
          ),
          icon: <AiOutlinePoweroff size={20}  color="blue" className="text-primary" />,
        },
      ]}
    />
  );

  const ProfileMenu = (
    <Menu
    className="popupMenu"
      items={[
        {
          key: "0",
          label: (
            <div className="container p-3">
              <h6>Deebendu Zestic IT Solutions Private Limited</h6>
            </div>
          ),
          disabled : true
        },
        {
          key: "1",
          label: (
            <div className="logoutItem p-2" onClick={()=> userProfile()}>
              <a class="dropdownItem">
                Setting
              </a>
            </div>
          ),
          icon: <AiOutlineSetting size={20}  color="blue" className="text-primary" />,
        },
        {
          key: "2",
          label: (
            <div className="logoutItem p-2" onClick={()=> userLogout()}>
              <a class="dropdownItem" >
                Logout
              </a>
            </div>
          ),
          icon: <AiOutlinePoweroff size={20}  color="blue" className="text-primary" />,
        },
      ]}
    />
  );

  function handleThemeChange(){
    if(theme === "light"){
      setTheme("dark")
    }
    else{
      setTheme("light")
    }
  }

  return (
    <div className="layoutHeader">
      <div className="row">
        <div className="col-1 d-flex align-items-center justify-content-start">
          <div className="headerLogo d-flex align-items-center justify-content-center">
            <img src={AppLogo} width={40} height={34} />
          </div>
        </div>
        <div className="col-2 d-flex align-items-center justify-content-start">
          {/* <button onClick={handleThemeChange}>{theme == "light" ? "dark" : "light"}</button> */}
        </div>
        <div className="col-9 d-flex align-items-center justify-content-end">
          <div className="headerMenu">
            <Dropdown
              overlay={menu}
              trigger={["click"]}
              className="notificationIcon"
            >
              <VscBellDot className="bellIcon" />
            </Dropdown>

            <Dropdown
              overlay={ProfileMenu}
              trigger={["click"]}
              className="profileAvatar"
            >
              <Avatar src={FaceAvatar} className="profileImg" />
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}
