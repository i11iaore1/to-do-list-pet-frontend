import { useCallback, useState } from "react";
import ValidatedInput from "../../../../components/inputs/textInputs/ValidatedInput/ValidatedInput";
import { DateInput } from "../../../../components/inputs/dateInputs/DateInput/DateInput";
import type { DateValue } from "react-aria-components";
import Form from "../../../../components/Form/Form";
import {
  DateOrNullToDateValueOrNull,
  getTodayDateValue,
} from "../../../../utils/date";
import useEditTask from "../../../../hooks/tasks/useEditTask";
import type { CardInfo } from "../../List/Card/Card";

interface EditFormFields {
  description: string;
  deadline: DateValue | null;
}

const getFormErrors = (formFields: EditFormFields): EditFormFields => {
  const currentErrors: EditFormFields = {
    description: "",
    deadline: null,
  };

  if (!formFields.description) {
    currentErrors.description = "Description is required";
  }

  return currentErrors;
};

interface EditFormProps {
  initialTaskData: CardInfo;
  afterSubmit: () => void;
}

const EditForm = (props: EditFormProps) => {
  const [formFields, setFormFields] = useState<EditFormFields>({
    description: props.initialTaskData.description,
    deadline: DateOrNullToDateValueOrNull(props.initialTaskData.deadline),
  });
  const [errors, setErrors] = useState<EditFormFields>({
    description: "",
    deadline: null,
  });

  const { mutate } = useEditTask();

  const processFormFields = useCallback(
    (formFields: EditFormFields) => {
      const requestData = {
        description: formFields.description,
        due_date:
          formFields.deadline === null ? null : formFields.deadline.toString(),
      };
      mutate({ id: props.initialTaskData.id, requestData: requestData });
      props.afterSubmit();
    },
    [formFields],
  );

  return (
    <Form
      label="Edition"
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

export default EditForm;
