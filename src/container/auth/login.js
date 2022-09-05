import React from "react";
import { isLogin } from "../../redux/slice/authSlice";
import { useDispatch } from "react-redux";
import LoginImg from "../../images/login.png";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import "./login.css";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function userLogin() {
    navigate("/otp")
  }
  return (
    <React.Fragment>
      <div className="content-wrapper d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-6 mx-auto">
            <div className="auth-form-light text-left">
              <d iv className="row w-100 mx-0 align-items-center">
                <div
                  className="col-lg-6 col-md-6 mx-auto"
                  style={{ borderRight: "1px solid #E9ECEF" }}
                >
                  <div className="brand-icon">
                    <img src={LoginImg} alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mx-auto px-5">
                  <h4>Hello! let's get started</h4>
                  <h6 className="font-weight-light">Email address</h6>
                  <form className="pt-3">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="exampleInputEmail1"
                        placeholder="email address"
                      />
                    </div>
                    <div className="mt-3">
                      <Button
                        className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                        onClick={userLogin}
                      >
                        Next
                      </Button>
                    </div>
                  </form>
                </div>
              </d>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
