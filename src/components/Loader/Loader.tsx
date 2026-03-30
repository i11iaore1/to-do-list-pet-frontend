import OnScreenMessage from "../OnScreenMessage/OnScreenMessage";
import clsx from "clsx";

import s from "./Loader.module.css";

interface LoaderProps {
  classname?: string;
}

const Loader = (props: LoaderProps) => {
  return (
    <OnScreenMessage>
      <p className={clsx(s["text"], props.classname)}>Loading...</p>
    </OnScreenMessage>
  );
};

export default Loader;
