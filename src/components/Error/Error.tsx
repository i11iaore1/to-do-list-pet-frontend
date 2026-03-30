import OnScreenMessage from "../OnScreenMessage/OnScreenMessage";
import clsx from "clsx";

import s from "./Error.module.css";

interface ErrorProps {
  message?: string;
  classname?: string;
}

const DEFAULT_ERROR_MESSAGE = "Something went wrong.";

const Error = (props: ErrorProps) => {
  return (
    <OnScreenMessage>
      <p className={clsx(s["error-text"], props.classname)}>
        {props.message || DEFAULT_ERROR_MESSAGE}
      </p>
    </OnScreenMessage>
  );
};

export default Error;
