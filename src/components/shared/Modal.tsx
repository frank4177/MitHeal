import "rc-dialog/assets/index.css";
import * as React from "react";
import Dialog from "rc-dialog";

interface IModalProps {
  button?: JSX.Element;
  content?: JSX.Element;
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  modal?: boolean
  width?: number
  height?: number
}

const Modal = ({ button, content, modal,setModal,height, width }: IModalProps) => {

  const onToggleDialog = () => {
    setModal((value) => !value);
  };

  const dialog = (
    <Dialog
      visible={modal}
      animation="zoom"
      maskAnimation="fade"
      onClose={onToggleDialog}
      forceRender
      style={{
        maxWidth: `${width ? width : 400}px`,
        width: "100%",
        height: `${height ? height : 80}px`,
      }}
    >
      {content}
    </Dialog>
  );

  return (
    <div>
      <span onClick={onToggleDialog}>{button}</span>
      {dialog}
    </div>
  );
};

export default Modal;
