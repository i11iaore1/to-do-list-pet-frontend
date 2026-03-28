import { createPortal } from "react-dom";
import clsx from "clsx";

import s from "./Overlay.module.css";

interface OverlayProps {
  children: React.ReactNode;
  onClose: () => void;
  className?: string;
}

const Overlay = (props: OverlayProps) => {
  return createPortal(
    <div className={s["backdrop"]} onClick={props.onClose}>
      <div
        className={clsx(props.className)}
        onClick={(e) => e.stopPropagation()}
      >
        {props.children}
      </div>
    </div>,
    document.body,
  );
};

export default Overlay;
