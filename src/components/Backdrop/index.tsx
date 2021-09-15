import "./style.css";
import { createPortal } from "react-dom";
import { FC } from "react";

type backdropProps = {
  onConfirm?: () => void;
};

const backdropRoot = document.getElementById("backdrop")!;

const Backdrop: FC<backdropProps> = (props) =>
  createPortal(
    <div className="backdrop" onClick={props.onConfirm}>
      {props.children}
    </div>,
    backdropRoot
  );

export default Backdrop;
