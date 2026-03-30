import clsx from "clsx";

import s from "./Loader.module.css";

interface LoaderProps {
  classname?: string;
}

const Loader = (props: LoaderProps) => {
  return (
    <div className={clsx(s["loader-container"], props.classname)}>
      <p className={s["text"]}>Loading...</p>
    </div>
  );
};

export default Loader;
