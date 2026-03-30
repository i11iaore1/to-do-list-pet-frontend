import clsx from "clsx";

import s from "./OnScreenMessage.module.css";

interface OnScreenMessageProps {
  children: React.ReactNode;
  classname?: string;
}

const OnScreenMessage = (props: OnScreenMessageProps) => {
  return (
    <div className={clsx(s["message-container"], props.classname)}>
      {props.children}
    </div>
  );
};

export default OnScreenMessage;
