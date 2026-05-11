import  { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children , className = "" , onClose }, ref) {
  const modalRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        modalRef.current.showModal();
      },
      close() {
        modalRef.current.close();
      },
    };
  });
  return createPortal(
    <dialog className={`${className} modal`} ref={modalRef} onClose={onClose}>{children}</dialog>,
    document.getElementById("modal"),
  );
});

export default Modal;
