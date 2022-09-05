import React from "react";
import loginImg from "../../../images/login.png"
import "./index.css"
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

import { isLogin } from "../../../redux/slice/authSlice";

export default function OtpPage(){
  const dispatch = useDispatch();
  function userLogin() {
    dispatch(isLogin());
  }
    return(
        <div className="container-scroller optContainer">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
              <div className="col-lg-6 mx-auto">
                <div className="auth-form-light text-left">
                  <d iv className="row w-100 mx-0 align-items-center">
                    <div className="col-lg-6 col-md-6 mx-auto" style={{borderRight: '1px solid #E9ECEF'}}>
                      <div className="brand-icon">
                        <img src={loginImg} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mx-auto px-5">
                      <h3 className="font-weight-bold">Enter code</h3>
                      <p>Enter the one time password sent to the
                        following number : <span className="hightlight">+919501111048</span></p>
                      <form className="pt-3">
                        <div className="form-group">
                          <label htmlFor="otp">One-time password</label>
                          <div className="enter-otp">
                            <input type="phone" className="form-control form-control-lg" id="otp" placeholder />
                            <input type="phone" className="form-control form-control-lg" id="otp" placeholder />
                            <input type="phone" className="form-control form-control-lg" id="otp" placeholder />
                            <input type="phone" className="form-control form-control-lg" id="otp" placeholder />
                            <input type="phone" className="form-control form-control-lg" id="otp" placeholder />
                            <input type="phone" className="form-control form-control-lg" id="otp" placeholder />
                          </div>
                        </div>
                        <h5 className="font-weight-bold">Didn't receive the code?</h5>
                        <a className="hightlight font-weight-bold" href="#">Resend code</a>
                        <div className="mt-3">
                         
                        <Button
                        className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                        onClick={userLogin}
                      >
                        Sign In
                      </Button>
                        </div>
                      </form>
                    </div>
                  </d></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}