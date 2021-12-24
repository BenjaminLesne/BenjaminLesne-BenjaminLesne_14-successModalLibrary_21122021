import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";

const Modal = ({
  textContent,
  open,
  setShouldModalOpen
}) => {
  return /*#__PURE__*/React.createElement("dialog", {
    className: "Modal",
    id: "modal",
    "data-testid": "modal",
    open: open
  }, /*#__PURE__*/React.createElement("div", {
    className: "Modal__content-wrapper modalbox success animate"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Modal__icon icon"
  }, /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "check",
    class: "svg-inline--fa fa-check fa-w-16",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "Modal__text-content"
  }, /*#__PURE__*/React.createElement("h1", null, "Success!"), /*#__PURE__*/React.createElement("p", null, textContent)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShouldModalOpen(false),
    type: "button",
    className: "Modal__ok-button redo btn"
  }, "Ok")));
}; // Props


Modal.propTypes = {
  textContent: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  setShouldModalOpen: PropTypes.func.isRequired
};
export default Modal;