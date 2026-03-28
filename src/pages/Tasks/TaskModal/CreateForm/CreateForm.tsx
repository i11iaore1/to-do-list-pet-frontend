import { useCallback, useState } from "react";
import ValidatedInput from "../../../../components/inputs/textInputs/ValidatedInput/ValidatedInput";
import { DateInput } from "../../../../components/inputs/dateInputs/DateInput/DateInput";
import type { DateValue } from "react-aria-components";
import Form from "../../../../components/Form/Form";
import { getTodayDateValue } from "../../../../utils/date";
import useCreateTask from "../../../../hooks/tasks/useCreateTask";

interface CreateFormFields {
  description: string;
  deadline: DateValue | null;
}

const getFormErrors = (formFields: CreateFormFields): CreateFormFields => {
  const currentErrors: CreateFormFields = {
    description: "",
    deadline: null,
  };

  if (!formFields.description) {
    currentErrors.description = "Description is required";
  }

  return currentErrors;
};

interface CreateFormProps {
  afterSubmit: () => void;
}

const CreateForm = (props: CreateFormProps) => {
  const [formFields, setFormFields] = useState<CreateFormFields>({
    description: "",
    deadline: null,
  });
  const [errors, setErrors] = useState<CreateFormFields>({
    description: "",
    deadline: null,
  });

  const { mutate } = useCreateTask();

  const processFormFields = useCallback(
    (formFields: CreateFormFields) => {
      const requestData = {
        description: formFields.description,
        due_date:
          formFields.deadline === null ? null : formFields.deadline.toString(),
      };
      mutate(requestData);
      props.afterSubmit();
    },
    [formFields],
  );

  return (
    <Form
      label="Creation"
      formFields={formFields}
      setErrors={setErrors}
      getFormErrors={getFormErrors}
      processFormFields={processFormFields}
    >
      <ValidatedInput
        id="descriprion"
        type="text"
        value={formFields.description}
        setValue={(value) => {
          setFormFields((prev) => ({ ...prev, description: value }));
        }}
        placeholder="Description"
        error={errors.description}
      />
      <DateInput
        minValue={getTodayDateValue()}
        value={formFields.deadline}
        onChange={(value) => {
          setFormFields((prev) => ({ ...prev, deadline: value }));
        }}
      />
    </Form>
  );
};

export default CreateForm;
