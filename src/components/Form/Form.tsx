import React, { useCallback } from "react";
import Button from "../Button/Button";
import clsx from "clsx";

import s from "./Form.module.css";

interface FormProps<T> {
  label: string;
  formFields: T;
  setErrors: React.Dispatch<React.SetStateAction<T>>;
  getFormErrors: (formFields: T) => T;
  processFormFields: (formFields: T) => void;
  children: React.ReactNode;
  className?: string;
}

const Form = <T extends Record<string, any>>(props: FormProps<T>) => {
  const onSubmit = useCallback(() => {
    const currentErrors = props.getFormErrors(props.formFields);
    props.setErrors(currentErrors);
    const isValid = !Object.values(currentErrors).some((error) => error);

    if (isValid) {
      props.processFormFields(props.formFields);
    }
  }, [props.formFields, props.processFormFields]);

  return (
    <div className={clsx(s["form-container"], props.className)}>
      <p className={s["label"]}>{props.label}</p>
      {props.children}
      <Button onClick={onSubmit}>Submit</Button>
    </div>
  );
};

export default Form;
