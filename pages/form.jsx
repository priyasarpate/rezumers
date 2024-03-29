import { useState, useRef } from "react";
import Head from "next/head";

import FormCard from "../components/FormCard";
import {
  BillingInfo,
  ConfirmPurchase,
  PersonalInfo,
} from "../components/Form";
import FormCompleted from "../components/FormCompleted";

const Form = () => {
  const [formStep, setFormStep] = useState(0);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <div>
      <Head>
        <title>Unform Multi Step Form</title>
      </Head>
      <h1>Unform Multi Step Form</h1>

      <FormCard currentStep={formStep} prevFormStep={prevFormStep}>
        {formStep >= 0 && (
          <PersonalInfo formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 1 && (
          <BillingInfo formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 2 && (
          <ConfirmPurchase formStep={formStep} nextFormStep={nextFormStep} />
        )}

        {formStep > 2 && <FormCompleted />}
      </FormCard>
    </div>
  );
};

export default Form;
