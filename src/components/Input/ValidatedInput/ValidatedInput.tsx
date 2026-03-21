import React from "react";
import clsx from "clsx";
import { Input, type InputProps } from "../Input";

import s from "./ValidatedInput.module.css";

interface ValidatedInputProps extends InputProps {
  error: string;
}

const ValidatedInput = React.memo(
  ({ error, ...inputProps }: ValidatedInputProps) => {
    return (
      <div className={s["validated-input-container"]}>
        <Input
          {...{
            ...inputProps,
            className: clsx(inputProps.className, { [s["invalid"]]: error }),
          }}
        />
        {error && <p className={s["error"]}>{error}</p>}
      </div>
    );
  },
);

export default ValidatedInput;
