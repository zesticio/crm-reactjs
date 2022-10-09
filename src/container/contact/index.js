import React from "react";
import * as component from "../../component/index";
import * as common from "../../common/common.import";
import * as common_func from "../../common/common.function";
import * as common_Hdr from "../../common/table.headers";
import "./index.css";
import { RiDownloadLine } from "react-icons/ri";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space, Tabs } from "antd";

export default function Contacts() {
  const location = common.useLocation();

  console.log("location", location.pathname);

  const menu = (
    <Menu
      items={[
        {
          label: <a href="https://www.antgroup.com">1st menu item</a>,
          key: "0",
        },
        {
          label: <a href="https://www.aliyun.com">2nd menu item</a>,
          key: "1",
        },
        {
          type: "divider",
        },
        {
          label: "3rd menu item",
          key: "3",
        },
      ]}
    />
  );

  return (
    <React.Fragment>
      <common_func.SplitPathName path={location.pathname} />
      <component.CardLayout>
        <div className="card-container">
          <div className="container-fluid p-3">
            <div className="row">
              <div className="col-8 pl-4">
                <component.Search placeholder={"Search Contacts..."} />
              </div>
              <div className="col-4 action-container">
                <component.ImportButton menu={menu} />
                <component.CommonModal modalHeading={"Profile"}>
                  <Tabs defaultActiveKey="1">
                    <Tabs.TabPane tab="Profile" key="1">
                      <div
                        className="tab-pane fade scroll-wrapper active show"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile"
                      >
                        <h3 className="modal-title">Profile</h3>
                        <div className="profilepic text-center mb-3">
                          <img
                            className="profilepic__image"
                            src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
                            width={150}
                            height={150}
                            alt="Profibild"
                          />
                          <div className="profilepic__content">
                            <span className="profilepic__icon">
                              <i className="fas fa-camera" />
                            </span>
                            <span className="profilepic__text">
                              Edit Profile
                            </span>
                          </div>
                        </div>
                        <div className="column">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control profile-form-input"
                              placeholder="Organization Name"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control profile-form-input"
                              placeholder="Website"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control profile-form-input"
                              placeholder="Phone"
                            />
                          </div>
                          <div className="form-group">
                            <textarea
                              type="text"
                              className="form-control profile-form-input"
                              placeholder="Description"
                              defaultValue={""}
                            />
                          </div>
                          <div className="form-group">
                            <div className="input-group search-bar">
                              <div className="input-group-prepend hover-cursor">
                                <span className="input-group-text border-right text-black text-uppercase">
                                  Account Type
                                </span>
                              </div>
                              <button
                                className="form-control text-left dropdown-toggle"
                                id="type"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Active
                              </button>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="type"
                              >
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Inactive
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-group search-bar">
                              <div className="input-group-prepend hover-cursor">
                                <span className="input-group-text border-right text-black text-uppercase">
                                  Lead Source
                                </span>
                              </div>
                              <button
                                className="form-control text-left dropdown-toggle"
                                id="lead"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Deebendu Kumar
                              </button>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="lead"
                              >
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Lorem lipsum
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="submit-btn mt-3 d-flex align-items-center justify-content-end">
                          <button
                            type="button"
                            className="btn btn-primary w-100"
                          >
                            Next step
                          </button>
                        </div>
                      </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane
                      tab="Security"
                      key="2"
                      className="securityPanal"
                    >
                     <div className="tab-pane fade scroll-wrapper active show" id="address" role="tabpanel" aria-labelledby="address">
        <h5 className="modal-title">Address</h5>
          <div className="form-group">
            <input type="text" className="form-control address-form-input" placeholder="Address Line 1" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control address-form-input" placeholder="Address Line 2" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control address-form-input" placeholder="City" />
          </div>
          <div className="form-group">
            <div className="input-group search-bar address-form-input">
              <button className="form-control text-left dropdown-toggle" id="country" data-toggle="dropdown" aria-expanded="false">City</button>
              <ul className="dropdown-menu" aria-labelledby="country">
                <li><a className="dropdown-item" href="#">India</a></li>
                <li><a className="dropdown-item" href="#">USA</a></li>
                <li><a className="dropdown-item" href="#">UK</a></li>
              </ul>
            </div>
          </div>
          <div className="form-group">
            <input type="text" className="form-control address-form-input" placeholder="State/Region" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control address-form-input" placeholder="Postcode" />
          </div>
        <div className="submit-btn mt-3 d-flex align-items-center justify-content-between">
          <button type="button" className="btn btn-secondary">Previous</button>
          <button type="button" className="btn btn-primary">Submit</button>
        </div>
      </div>
                    </Tabs.TabPane>
                  </Tabs>
                </component.CommonModal>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <component.CommonTable
                  tableHdr={common_Hdr.ContactTable}
                  tableData={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                />
              </div>
            </div>
            <div class="row mt-5 text-right">
              <div class="col">
                <nav aria-label="...">
                  <ul class="pagination justify-content-end">
                    <li class="page-item disabled">
                      <span class="page-link">Previous</span>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item active">
                      <span class="page-link">2</span>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </component.CardLayout>
    </React.Fragment>
  );
}
