import { validateEmail } from "../../utils/validation";
import type { FormField } from "../../components/AuthForm/AuthForm";
import { useCallback } from "react";
import { useLogin } from "../../hooks/user/useLogin";
import AuthForm from "../../components/AuthForm/AuthForm";

export interface LoginFormFields extends Record<string, string> {
  email: string;
  password: string;
}

const loginFormFieldInfoList: readonly FormField<LoginFormFields>[] = [
  {
    id: "email",
    type: "email",
    placeholder: "Email",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Password",
  },
];

const getFormErrors = (formFields: LoginFormFields): LoginFormFields => {
  const currentErrors: LoginFormFields = {
    email: "",
    password: "",
  };

  if (!formFields.email) {
    currentErrors.email = "No email";
  } else {
    if (!validateEmail(formFields.email)) {
      currentErrors.email = "Not an email";
    }
  }
  if (!formFields.password) {
    currentErrors.password = "No password";
  }

  return currentErrors;
};

const Login = () => {
  const { mutate } = useLogin();

  const processFormFields = useCallback((formFields: LoginFormFields) => {
    const requestData = {
      email: formFields.email,
      password: formFields.password,
    };
    mutate(requestData);
  }, []);

  return (
    <AuthForm
      label="Login"
      formFieldInfoList={loginFormFieldInfoList}
      getFormErrors={getFormErrors}
      processFormFields={processFormFields}
      redirectLabel="I don't have an account yet"
      redirectPath="/registration"
    />
  );
};

export default Login;
