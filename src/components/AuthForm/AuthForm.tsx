import { useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { RegistrationFormFields } from "../../pages/Registration/Registration";
import ValidatedInput, {
  type ValidatedInputProps,
} from "../inputs/textInputs/ValidatedInput/ValidatedInput";
import Checkbox from "../inputs/Checkbox/Checkbox";
import Form from "../Form/Form";
import { authStorageService } from "../../services/authService";
import type { LoginFormFields } from "../../pages/Login/Login";

import s from "./AuthForm.module.css";

type AuthFormFields = RegistrationFormFields | LoginFormFields;

export interface FormField<T extends AuthFormFields> extends Pick<
  ValidatedInputProps,
  "type" | "placeholder"
> {
  id: Extract<keyof T, string>;
}

interface AuthFormProps<T extends AuthFormFields> {
  label: string;
  formFieldInfoList: readonly FormField<T>[];
  getFormErrors: (formFields: T) => T;
  processFormFields: (formFields: T) => void;
  redirectPath: string;
  redirectLabel: string;
}

const AuthForm = <T extends AuthFormFields>({
  label,
  formFieldInfoList,
  getFormErrors,
  processFormFields,
  redirectPath,
  redirectLabel,
}: AuthFormProps<T>) => {
  const emptyFormFields = useMemo(
    () =>
      Object.fromEntries(
        formFieldInfoList.map((fieldInfo) => [fieldInfo.id, ""]),
      ) as T,
    [formFieldInfoList],
  );

  const [formFields, setFormFields] = useState<T>(emptyFormFields);
  const [errors, setErrors] = useState<T>(emptyFormFields);

  const [isRememberMeChecked, setIsRememberMeChecked] =
    useState<boolean>(false);

  const setters = useMemo(() => {
    const createSetter = (field: keyof T) => (value: string) => {
      setFormFields((prev) => ({ ...prev, [field]: value }));
    };

    const setters = Object.fromEntries(
      formFieldInfoList.map((fieldInfo) => [
        fieldInfo.id,
        createSetter(fieldInfo.id),
      ]),
    );

    return setters;
  }, [formFieldInfoList]);

  const processAuthForm = useCallback(
    (formFields: T) => {
      authStorageService.setStorage(
        isRememberMeChecked ? localStorage : sessionStorage,
      );
      processFormFields(formFields);
    },
    [isRememberMeChecked],
  );

  return (
    <div className={s["auth-form"]}>
      <Form
        label={label}
        formFields={formFields}
        setErrors={setErrors}
        getFormErrors={getFormErrors}
        processFormFields={processAuthForm}
      >
        {formFieldInfoList.map((formFieldInfo) => (
          <ValidatedInput
            id={formFieldInfo.id}
            type={formFieldInfo.type}
            placeholder={formFieldInfo.placeholder}
            value={formFields[formFieldInfo.id]}
            setValue={setters[formFieldInfo.id]}
            error={errors[formFieldInfo.id]}
            key={formFieldInfo.id}
          />
        ))}
        <Checkbox
          label="Remember me"
          isChecked={isRememberMeChecked}
          onChange={(value: boolean) => setIsRememberMeChecked(value)}
        />
      </Form>
      <Link to={redirectPath} className={s["redirect"]} replace>
        {redirectLabel}
      </Link>
    </div>
  );
};

export default AuthForm;
