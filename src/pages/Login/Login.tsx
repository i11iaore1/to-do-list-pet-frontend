import { useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Checkbox from "../../components/Checkbox/Checkbox";
import Button from "../../components/Button/Button";
import ValidatedInput from "../../components/Input/ValidatedInput/ValidatedInput";
import { validateEmail } from "../../utils/validation";

import s from "./Login.module.css";

interface LoginFormFields {
  email: string;
  password: string;
}

const EMPTY_LOGIN_FORM_FIELDS: LoginFormFields = {
  email: "",
  password: "",
};

const Login = () => {
  const [formFields, setFormFields] = useState<LoginFormFields>(
    EMPTY_LOGIN_FORM_FIELDS,
  );

  const [isRememberMeChecked, setIsRememberMeChecked] =
    useState<boolean>(false);

  const [errors, setErrors] = useState<LoginFormFields>(
    EMPTY_LOGIN_FORM_FIELDS,
  );

  const validate = useCallback((formFields: LoginFormFields): boolean => {
    const currentErrors: LoginFormFields = {
      ...EMPTY_LOGIN_FORM_FIELDS,
    };
    if (!formFields.email) {
      console.log(formFields.email);
      currentErrors.email = "No email";
    } else {
      if (!validateEmail(formFields.email)) {
        currentErrors.email = "Not an email";
      }
    }
    if (!formFields.password) {
      currentErrors.password = "No password";
    }

    setErrors(currentErrors);

    return !Object.values(currentErrors).some((error) => error);
  }, []);

  const setters = useMemo(() => {
    const createSetter = (field: keyof LoginFormFields) => (value: string) => {
      setFormFields((prev) => ({ ...prev, [field]: value }));
    };

    return {
      email: createSetter("email"),
      password: createSetter("password"),
    };
  }, []);

  const handleLogin = useCallback(() => {
    const isValid = validate(formFields);
    console.log(
      `Login pressed.\nValidation: ${isValid}\nRemember me ${isRememberMeChecked}`,
    );
  }, []);

  return (
    <div className={s["login-container"]}>
      <label className={s["label"]}>Login</label>
      <ValidatedInput
        type="email"
        placeholder="Email"
        value={formFields.email}
        setValue={setters.email}
        error={errors.email}
      />
      <ValidatedInput
        type="password"
        placeholder="Password"
        value={formFields.password}
        setValue={setters.password}
        error={errors.password}
      />
      <Checkbox
        label="Remember me"
        isChecked={isRememberMeChecked}
        onChange={(value: boolean) => setIsRememberMeChecked(value)}
      />
      <Button onClick={handleLogin}>Login</Button>
      <Link to="/registration" className={s["redirect"]}>
        I don`t have an account yet
      </Link>
    </div>
  );
};

export default Login;
