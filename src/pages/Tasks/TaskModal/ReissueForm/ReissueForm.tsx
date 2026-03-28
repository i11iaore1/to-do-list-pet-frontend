import { useCallback, useState } from "react";
import { DateInput } from "../../../../components/inputs/dateInputs/DateInput/DateInput";
import Form from "../../../../components/Form/Form";
import {
  DateOrNullToDateValueOrNull,
  getTodayDateValue,
} from "../../../../utils/date";
import type { DateValue } from "react-aria-components";

import s from "./ReissueForm.module.css";
import useReissueTask from "../../../../hooks/tasks/useReissueTask";
import type { CardInfo } from "../../List/Card/Card";

interface ReissueFormFields {
  deadline: DateValue | null;
}

const getFormErrors = (formFields: ReissueFormFields): ReissueFormFields => {
  const currentErrors: ReissueFormFields = {
    deadline: null,
  };

  return currentErrors;
};

interface ReissueFormProps {
  initialTaskData: CardInfo;
  afterSubmit: () => void;
}

const ReissueForm = (props: ReissueFormProps) => {
  const [formFields, setFormFields] = useState<ReissueFormFields>({
    deadline: DateOrNullToDateValueOrNull(props.initialTaskData.deadline),
  });
  const [errors, setErrors] = useState<ReissueFormFields>({
    deadline: null,
  });

  const { mutate } = useReissueTask();

  const processFormFields = useCallback(
    (formFields: ReissueFormFields) => {
      const requestData = {
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
      label="Reissue"
      formFields={formFields}
      setErrors={setErrors}
      getFormErrors={getFormErrors}
      processFormFields={processFormFields}
    >
      <p className={s["description"]}>{props.initialTaskData.description}</p>
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

export default ReissueForm;
