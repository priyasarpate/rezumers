import { useContext, useRef } from "react";
import { Form } from "@unform/web";
import Input from "../InputFields/Input";
import * as yup from "yup";
import {FormContext} from "../context/index"

const schema = yup.object().shape({
  address: yup
    .string()
    .min(2, "Address is too short")
    .required("Address is required"),
});

export default function BillingInfo({ formStep, nextFormStep }) {
  const { setFormValues,data } = useContext(FormContext);
  console.log(data, "context")
  const formRef = useRef();

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed - do something with data
      setFormValues(data);
      console.log(data,"trying")
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
    <div className={formStep === 1 ? {}: {}}>
      <h2>Billing Info</h2>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <Input name="address" label="Address" type="address" />
        </div>
        <button type="submit">Next</button>
      </Form>
    </div>
  );
}
