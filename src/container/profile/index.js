import React from "react";
import * as component from "../../component/index";
import "./profile.scss";
import profileImg from "../../images/face12.jpg";
import { Tabs } from "antd";

export default function Profile() {
  return (
    <React.Fragment>
      <component.CardLayout>
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="d-sm-flex flex-row justify-content-between text-center text-sm-left align-items-center">
                    <div className="d-sm-flex flex-row flex-wrap text-center text-sm-left align-items-center">
                      <img
                        src={profileImg}
                        className="img-lg rounded"
                        alt="profile image"
                      />
                      <div className="ms-sm-5 ms-md-2 ms-xl-3 mt-2 mt-sm-0 mt-md-2 mt-xl-0 ml-3">
                        <h3 className="mb-0">Deebendu Kumar</h3>
                        <p className="text-muted mb-1">
                          zestic.solutions@gmail.com
                        </p>
                        <p className="text-muted mb-1">9501111048</p>
                        <p className="mb-0 text-success badge badge-info">
                          ORGANIZATION ADMIN
                        </p>
                      </div>
                    </div>
                    <button type="submit" className="saveProfileBtn">
                      Save Profile
                    </button>
                  </div>

                  <div className="profileTab mt-4">
                    <Tabs defaultActiveKey="1">
                      <Tabs.TabPane tab="Profile" key="1">
                        <div className="col-md-6">
                      <div className="tab-content" id="setting-content">
                        <div
                          className="tab-pane fade scroll-wrapper active show"
                          id="information"
                          role="tabpanel"
                          aria-labelledby="information"
                        >
                          <h3>Work Information</h3>
                          <form className="forms-sample">
                            <div className="form-group mb-3 p-2">
                              <label
                                htmlFor="inputField"
                                className="inputLabel"
                              >
                                Username
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="inputField"
                                placeholder="Username"
                              />
                            </div>
                            <div className="form-group mb-3 p-2">
                              <label
                                htmlFor="exampleInputEmail1"
                                className="inputLabel"
                              >
                                Email address
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                placeholder="Email"
                              />
                            </div>
                            <div className="form-group mb-3 p-2">
                              <label
                                htmlFor="inputField"
                                className="inputLabel"
                              >
                                mobile number
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="inputField"
                                placeholder="Username"
                              />
                            </div>
                            <div className="form-group mb-3 p-2">
                              <label
                                htmlFor="exampleInputEmail1"
                                className="inputLabel"
                              >
                                Job title
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                placeholder="Email"
                              />
                            </div>
                            <h3 className="border-top pt-3">
                              Other Information
                            </h3>
                            <div className="form-group mb-3 p-2">
                              <label
                                htmlFor="inputField"
                                className="inputLabel"
                              >
                                Username
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="inputField"
                                placeholder="Username"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                        </div>
                      </Tabs.TabPane>
                      <Tabs.TabPane tab="Security" key="2" className="securityPanal">
                      <div
                          className="securityTab"
                          id="security"
                          role="tabpanel"
                          aria-labelledby="security"
                        >
                          <div className="d-flex align-items-center justify-content-between p-3 authentication">
                            <h3 className="m-0 p-0">
                              Two-Factor Authentication
                            </h3>
                            <button
                              type="submit"
                              className="btn btn-danger mr-2"
                            >
                              Inactive
                            </button>
                          </div>
                          <div className="authentication-section p-4">
                            <h4>
                              Two-factor authentication is not enabled yet
                            </h4>
                            <p className="mt-3 mb-3">
                              By enabling two-factor authentication, you add an
                              extra layer of security that prevents unauthorized
                              access to your accounts. Once enabled, you'll be
                              required to enter both your password and an
                              authentication code from your mobile phone in
                              order to sign into your Freshworks account. After
                              you successfully enable two - factor
                              authentication, you will not be able to login
                              unless you enter the correct authentication code.
                            </p>
                            <button
                              type="submit"
                              className="btn btn-primary mr-2"
                            >
                              Enable
                            </button>
                          </div>
                        </div>
                      </Tabs.TabPane>
                    </Tabs>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </component.CardLayout>
    </React.Fragment>
  );
}
