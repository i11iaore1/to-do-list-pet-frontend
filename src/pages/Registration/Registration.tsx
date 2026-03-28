import { useCallback } from "react";
import AuthForm, { type FormField } from "../../components/AuthForm/AuthForm";
import { useRegister } from "../../hooks/user/useRegister";
import { validateEmail } from "../../utils/validation";

export interface RegistrationFormFields extends Record<string, string> {
  email: string;
  username: string;
  password: string;
  passwordConf: string;
}

const registrationFormFieldInfoList: readonly FormField<RegistrationFormFields>[] =
  [
    {
      id: "email",
      type: "email",
      placeholder: "Email",
    },
    {
      id: "username",
      type: "text",
      placeholder: "Username",
    },
    {
      id: "password",
      type: "password",
      placeholder: "Password",
    },
    {
      id: "passwordConf",
      type: "password",
      placeholder: "Confirm password",
    },
  ] as const;

const getFormErrors = (
  formFields: RegistrationFormFields,
): RegistrationFormFields => {
  const currentErrors: RegistrationFormFields = {
    email: "",
    username: "",
    password: "",
    passwordConf: "",
  };

  if (!formFields.email) {
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

  return currentErrors;
};

const Registration = () => {
  const { mutate } = useRegister();

  const processFormFields = useCallback(
    (formFields: RegistrationFormFields) => {
      const requestData = {
        email: formFields.email,
        nickname: formFields.username,
        password: formFields.password,
      };
      mutate(requestData);
    },
    [],
  );

  return (
    <AuthForm
      label="Registration"
      formFieldInfoList={registrationFormFieldInfoList}
      getFormErrors={getFormErrors}
      processFormFields={processFormFields}
      redirectLabel="I already have an account"
      redirectPath="/login"
    />
  );
};

export default Registration;
