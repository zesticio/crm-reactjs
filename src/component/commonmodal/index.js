import React, { useState } from "react";
import "./index.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import * as component from "../index";
import { AiOutlineClose } from "react-icons/ai";

export default function CommonModal({ modalHeading, children }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    console.log("fdskjhskjhfkjdshfds");
    setShow(true);
  };
  const CrossIcon = () => (
    <AiOutlineClose size={23} onClick={handleClose} className="closeIcon" />
  );
  return (
    <React.Fragment>
      <component.AddButton handleOnClick={handleShow} />
      <Modal show={show} onHide={handleClose}>
      <CrossIcon />
        <Modal.Body className="mt-5">
          <div>{children}</div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}
