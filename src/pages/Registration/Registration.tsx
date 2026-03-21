import { useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Checkbox from "../../components/Checkbox/Checkbox";
import ValidatedInput from "../../components/Input/ValidatedInput/ValidatedInput";
import { validateEmail } from "../../utils/validation";

import s from "./Registration.module.css";

interface RegistrationFormFields {
  email: string;
  username: string;
  password: string;
  passwordConf: string;
}

const EMPTY_REGISTRATION_FORM_FIELDS: RegistrationFormFields = {
  email: "",
  username: "",
  password: "",
  passwordConf: "",
};

const Registration = () => {
  const [formFields, setFormFields] = useState<RegistrationFormFields>(
    EMPTY_REGISTRATION_FORM_FIELDS,
  );

  const [isRememberMeChecked, setIsRememberMeChecked] =
    useState<boolean>(false);

  const [errors, setErrors] = useState<RegistrationFormFields>(
    EMPTY_REGISTRATION_FORM_FIELDS,
  );

  const validate = useCallback(
    (formFields: RegistrationFormFields): boolean => {
      const currentErrors: RegistrationFormFields = {
        ...EMPTY_REGISTRATION_FORM_FIELDS,
      };
      if (!formFields.email) {
        console.log(formFields.email);
        currentErrors.email = "No email";
      } else {
        if (!validateEmail(formFields.email)) {
          currentErrors.email = "Not an email";
        }
      }
      if (!formFields.username) {
        currentErrors.username = "No username";
      }
      if (!formFields.password) {
        currentErrors.password = "No password";
      }
      if (!formFields.passwordConf) {
        currentErrors.passwordConf = "No passwordConf";
      } else {
        if (formFields.password !== formFields.passwordConf) {
          currentErrors.passwordConf = "No match";
        }
      }
      setErrors(currentErrors);

      return !Object.values(currentErrors).some((error) => error);
    },
    [],
  );

  const setters = useMemo(() => {
    const createSetter =
      (field: keyof RegistrationFormFields) => (value: string) => {
        setFormFields((prev) => ({ ...prev, [field]: value }));
      };

    return {
      email: createSetter("email"),
      username: createSetter("username"),
      password: createSetter("password"),
      passwordConf: createSetter("passwordConf"),
    };
  }, []);

  const handleRegistration = useCallback(() => {
    const isValid = validate(formFields);
    console.log(
      `Register pressed.\nValidation: ${isValid}\nRemember me ${isRememberMeChecked}`,
    );
  }, []);

  return (
    <div className={s["registration-container"]}>
      <label className={s["label"]}>Registration</label>
      <ValidatedInput
        type="email"
        placeholder="Email"
        value={formFields.email}
        setValue={setters.email}
        error={errors.email}
      />
      <ValidatedInput
        type="text"
        placeholder="Username"
        value={formFields.username}
        setValue={setters.username}
        error={errors.username}
      />
      <ValidatedInput
        type="password"
        placeholder="Password"
        value={formFields.password}
        setValue={setters.password}
        error={errors.password}
      />
      <ValidatedInput
        type="password"
        placeholder="Confirm password"
        value={formFields.passwordConf}
        setValue={setters.passwordConf}
        error={errors.passwordConf}
      />
      <Checkbox
        label="Remember me"
        isChecked={isRememberMeChecked}
        onChange={(value: boolean) => setIsRememberMeChecked(value)}
      />
      <Button onClick={handleRegistration}>Register</Button>
      <Link to="/login" className={s["redirect"]}>
        I already have an account
      </Link>
    </div>
  );
};

export default Registration;
