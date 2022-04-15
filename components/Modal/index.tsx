import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
  isOpened: boolean;
}

const Modal: React.FC<Props> = ({ children, isOpened = true }) => {
  return isOpened
    ? createPortal(children, document.querySelector("#myportal"))
    : null;
};
export default Modal;
