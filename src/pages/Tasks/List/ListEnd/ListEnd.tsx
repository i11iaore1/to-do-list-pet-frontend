import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

import s from "./ListEnd.module.css";

interface ListEndProps {
  onTrigger: () => void;
  children: React.ReactNode;
  className?: string;
}

const VISIBLE_FOR_MS = 100;

const ListEnd = (props: ListEndProps) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  // delay for triggering
  useEffect(() => {
    if (inView) {
      const timeoutId = setTimeout(() => {
        if (inView) {
          // if list end is still visible after n ms - trigger
          console.log("triggered");
          props.onTrigger();
        }
      }, VISIBLE_FOR_MS);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [inView, props.onTrigger]);

  return (
    <div
      ref={ref}
      className={clsx(s["intersection-observer"], props.className)}
    >
      {props.children}
    </div>
  );
};

export default ListEnd;
