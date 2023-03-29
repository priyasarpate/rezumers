import { useContext, useRef } from "react";
import { Form } from "@unform/web";
import Input from "../InputFields/Input";
import {FormContext} from "../context/index"

import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
});

export default function PersonalInfo({ formStep, nextFormStep }) {
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
    <div className={formStep === 0 ? {} : {}}>
      <h2>Personal Info</h2>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div >
          <Input name="email" label="Email" type="email" />
        </div>
        <button type="submit">Next</button>
      </Form>
    </div>
  );
}
