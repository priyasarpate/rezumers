import { useState, createContext, useContext } from "react";

const FormContext = createContext({});

 function FormProvider(props) {
  const { data: initialData, children } = props;

  const [data, setData] = useState(initialData);

  const setFormValues = (values) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  const formContext = {
    setFormValues,
    data,
  };

  return (
    <FormContext.Provider value={ formContext }>
      {children}
    </FormContext.Provider>
  );
}
export default FormProvider;
// export const useFormData = () => useContext(FormContext);
export { FormContext };
