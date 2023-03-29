import { useContext, useRef } from "react";
import { Form } from "@unform/web";
import CheckBox from "../InputFields/CheckBox";
import {FormContext} from "../context/index"

import * as yup from "yup";



const schema = yup.object().shape({
  checkbox: yup.bool().oneOf([true], "Checkbox is required"),
});

export default function ConfirmPurchase({ formStep, nextFormStep }) {
  const { setFormValues } = useContext(FormContext);
  const formRef = useRef();

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed - do something with data
      setFormValues(data);
      nextFormStep();
    } catch (err) {
      const errors = {};
      // Validation failed - do show error
      if (err instanceof yup.ValidationError) {
        console.log(err.inner);
        // Validation failed - do show error
        err.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
        formRef.current.setErrors(errors);
      }
    }
  }

  return (
    <div className={formStep === 2 ? {} : {}}>
      <h2>Confirm Purchase</h2>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <CheckBox name="checkbox" label="Ready to go?" />
        </div>

        <button type="submit">Confirm purchase</button>
      </Form>
    </div>
  );
}
